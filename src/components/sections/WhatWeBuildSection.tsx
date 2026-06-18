import { approachOutcomes, capabilities, whatWeBuild } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { ConnectorAnchor } from "../ui/ConnectorAnchor";

export function WhatWeBuildSection() {
  return (
    <Section id={whatWeBuild.id} surface="dark" labelledBy="what-title" className="approach-section">
      <ConnectorAnchor position="entry" />
      <Container className="approach-grid">
        <div className="approach-copy">
          <Eyebrow>{whatWeBuild.eyebrow}</Eyebrow>
          <h2 id="what-title">{whatWeBuild.headline}</h2>
          <p>{whatWeBuild.body}</p>
          <ul className="outcome-list" aria-label="Deployment outcomes">
            {approachOutcomes.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="approach-panel" aria-label="Glass capability workflow">
          <div className="approach-panel-planes" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <ul className="capability-list">
            {capabilities.map((item) => (
              <li key={item.title}>
                <span className="capability-marker" aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  <em>{item.body}</em>
                </span>
                <small>
                  <i aria-hidden="true" />
                  {item.status}
                </small>
                <b aria-hidden="true">-&gt;</b>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <ConnectorAnchor position="exit" />
    </Section>
  );
}
