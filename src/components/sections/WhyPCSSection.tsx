import { pcsReasons, whyPcs } from "../../content/siteContent";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";

export function WhyPCSSection() {
  return (
    <Section id={whyPcs.id} surface="cream" labelledBy="why-pcs-title" className="why-pcs-entry-section">
      <Container className="why-pcs-entry">
        <div className="why-pcs-copy">
          <Eyebrow>{whyPcs.eyebrow}</Eyebrow>
          <h2 id="why-pcs-title">{whyPcs.headline}</h2>
          <p>{whyPcs.body}</p>
        </div>
        <ul className="reason-columns" aria-label="Why PCS is the control point">
          {pcsReasons.map((item, index) => (
            <li key={item.title}>
              <span>0{index + 1}</span>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
