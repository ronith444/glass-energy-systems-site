from __future__ import annotations

import csv
import math
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent

SAMPLES = {
    "before_service_1440": ROOT / "before" / "service-scene-1440.png",
    "after_service_1440": ROOT / "after" / "service-scene-1440.png",
    "after_service_390": ROOT / "after" / "service-scene-390.png",
    "before_cta_footer_390": ROOT / "before" / "cta-footer-390.png",
    "after_cta_footer_1440": ROOT / "after" / "cta-footer-1440.png",
    "after_cta_footer_390": ROOT / "after" / "cta-footer-390.png",
}


def luma(r: float, g: float, b: float) -> float:
    return (0.2126 * r) + (0.7152 * g) + (0.0722 * b)


def row_profile(path: Path) -> list[dict[str, float]]:
    image = Image.open(path).convert("RGB")
    width, height = image.size
    left = int(width * 0.10)
    right = int(width * 0.90)
    profile: list[dict[str, float]] = []

    for y in range(height):
      pixels = [image.getpixel((x, y)) for x in range(left, right)]
      count = len(pixels)
      r = sum(pixel[0] for pixel in pixels) / count
      g = sum(pixel[1] for pixel in pixels) / count
      b = sum(pixel[2] for pixel in pixels) / count
      profile.append({"y": y, "pct": y / max(1, height - 1), "r": r, "g": g, "b": b, "luma": luma(r, g, b), "jump": 0.0})

    for i in range(1, len(profile)):
      prev = profile[i - 1]
      row = profile[i]
      row["jump"] = math.sqrt((row["r"] - prev["r"]) ** 2 + (row["g"] - prev["g"]) ** 2 + (row["b"] - prev["b"]) ** 2)

    return profile


def smoothed_jumps(profile: list[dict[str, float]], window: int = 9) -> list[tuple[int, float]]:
    jumps: list[tuple[int, float]] = []
    half = window // 2
    for index in range(half, len(profile) - half):
      before = profile[index - half]
      after = profile[index + half]
      jump = math.sqrt((after["r"] - before["r"]) ** 2 + (after["g"] - before["g"]) ** 2 + (after["b"] - before["b"]) ** 2) / window
      jumps.append((index, jump))
    return jumps


def write_csv(label: str, profile: list[dict[str, float]]) -> Path:
    output = ROOT / f"{label}.csv"
    with output.open("w", newline="", encoding="utf-8") as handle:
      writer = csv.DictWriter(handle, fieldnames=["y", "pct", "r", "g", "b", "luma", "jump"])
      writer.writeheader()
      writer.writerows(profile)
    return output


def main() -> None:
    report_lines = [
      "# Gradient Profile",
      "",
      "The script samples the central 80% of each screenshot row, writes RGB/luma CSV profiles, and reports the largest smoothed row-to-row color changes. Large jumps inside images, panels, text, or the sticky header are expected; transition quality is judged from the row profile plus visual screenshots.",
      "",
    ]

    for label, path in SAMPLES.items():
      if not path.exists():
        report_lines.append(f"## {label}")
        report_lines.append("")
        report_lines.append(f"Missing screenshot: `{path}`")
        report_lines.append("")
        continue

      profile = row_profile(path)
      csv_path = write_csv(label, profile)
      jumps = sorted(smoothed_jumps(profile), key=lambda item: item[1], reverse=True)[:8]
      start = profile[0]
      midpoint = profile[len(profile) // 2]
      end = profile[-1]

      report_lines.append(f"## {label}")
      report_lines.append("")
      report_lines.append(f"- Source: `{path.name}`")
      report_lines.append(f"- CSV: `{csv_path.name}`")
      report_lines.append(f"- Top row RGB/luma: `{start['r']:.1f}, {start['g']:.1f}, {start['b']:.1f}` / `{start['luma']:.1f}`")
      report_lines.append(f"- Mid row RGB/luma: `{midpoint['r']:.1f}, {midpoint['g']:.1f}, {midpoint['b']:.1f}` / `{midpoint['luma']:.1f}`")
      report_lines.append(f"- Bottom row RGB/luma: `{end['r']:.1f}, {end['g']:.1f}, {end['b']:.1f}` / `{end['luma']:.1f}`")
      report_lines.append("- Largest smoothed row changes:")
      for y, jump in jumps:
        report_lines.append(f"  - row `{y}` (`{y / max(1, len(profile) - 1):.2%}`): `{jump:.2f}`")
      report_lines.append("")

    (ROOT / "GRADIENT_PROFILE.md").write_text("\n".join(report_lines), encoding="utf-8")


if __name__ == "__main__":
    main()
