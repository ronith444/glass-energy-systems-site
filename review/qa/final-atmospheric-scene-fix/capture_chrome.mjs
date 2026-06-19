import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const baseUrl = "http://127.0.0.1:4190/";
const phase = process.argv[2] || "after";
const rootDir = resolve("review/qa/final-atmospheric-scene-fix", phase);
const userDataDir = resolve("review/qa/final-atmospheric-scene-fix/.chrome-profile");
const port = 9322;

const fullPageWidths = [1440, 1280, 1024, 767, 480, 430, 390, 360];
const focusTargets = [
  ["service-scene", "#service-speed"],
  ["development-closing", "#development-pathway"],
  ["cta-footer", "#partners"],
];

class CdpClient {
  constructor(url) {
    this.id = 0;
    this.pending = new Map();
    this.events = [];
    this.ws = new WebSocket(url);
    this.ready = new Promise((resolveOpen, rejectOpen) => {
      this.ws.addEventListener("open", resolveOpen, { once: true });
      this.ws.addEventListener("error", rejectOpen, { once: true });
    });
    this.ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve: resolvePending, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) {
          reject(new Error(message.error.message));
        } else {
          resolvePending(message.result);
        }
        return;
      }
      if (message.method) {
        this.events.push(message);
      }
    });
  }

  async send(method, params = {}) {
    await this.ready;
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolvePending, reject) => {
      this.pending.set(id, { resolve: resolvePending, reject });
    });
  }

  close() {
    this.ws.close();
  }
}

async function waitForJson(url, attempts = 60) {
  for (let index = 0; index < attempts; index += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch {
      // Chrome is still booting.
    }
    await delay(200);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function createPage() {
  const response = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`, {
    method: "PUT",
  });
  if (!response.ok) {
    throw new Error(`Could not create Chrome target: ${response.status}`);
  }
  return response.json();
}

async function preparePage(client, width, height, url, selector) {
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });
  await client.send("Page.navigate", { url });
  await delay(900);
  await client.send("Runtime.evaluate", {
    expression: "document.fonts && document.fonts.ready",
    awaitPromise: true,
  });
  if (selector) {
    await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const el = document.querySelector(${JSON.stringify(selector)});
          if (el) {
            document.documentElement.style.scrollBehavior = "auto";
            const top = el.getBoundingClientRect().top + window.scrollY - 18;
            window.scrollTo(0, Math.max(0, top));
          }
        })()
      `,
      awaitPromise: true,
    });
    await delay(700);
  }
}

async function captureFull(client, filePath) {
  const metrics = await client.send("Page.getLayoutMetrics");
  const size = metrics.cssContentSize;
  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: 0,
      y: 0,
      width: Math.ceil(size.width),
      height: Math.ceil(size.height),
      scale: 1,
    },
  });
  await writeFile(filePath, Buffer.from(screenshot.data, "base64"));
}

async function captureViewport(client, filePath) {
  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
  });
  await writeFile(filePath, Buffer.from(screenshot.data, "base64"));
}

await mkdir(rootDir, { recursive: true });
await rm(userDataDir, { recursive: true, force: true });

const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  "about:blank",
], {
  stdio: "ignore",
  windowsHide: true,
});

try {
  await waitForJson(`http://127.0.0.1:${port}/json/version`);

  for (const width of fullPageWidths) {
    const height = width >= 1024 ? 1000 : 900;
    const page = await createPage();
    const client = new CdpClient(page.webSocketDebuggerUrl);
    await preparePage(client, width, height, baseUrl);
    await captureFull(client, join(rootDir, `full-${width}.png`));
    client.close();

    for (const [name, selector] of focusTargets) {
      const focusPage = await createPage();
      const focusClient = new CdpClient(focusPage.webSocketDebuggerUrl);
      await preparePage(focusClient, width, height, `${baseUrl}${selector}`, selector);
      await captureViewport(focusClient, join(rootDir, `${name}-${width}.png`));
      focusClient.close();
    }
  }
} finally {
  chrome.kill();
}

console.log(`Captured ${phase} screenshots in ${rootDir}`);
