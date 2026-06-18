import { capabilities, whatWeBuild } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";
import { GlassPlane } from "../ui/GlassPlane";

export function WhatWeBuildSection() {
  return (
    <Section id={whatWeBuild.id} surface="dark" labelledBy="what-title">
      <ConnectorAnchor position="entry" />
      <Container className="split-grid">
        <div>
          <Eyebrow>{whatWeBuild.eyebrow}</Eyebrow>
          <h2 id="what-title">{whatWeBuild.headline}</h2>
          <p>{whatWeBuild.body}</p>
        </div>
        <div className="system-panel">
          <GlassPlane />
          <ul className="stack-list">
            {capabilities.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
