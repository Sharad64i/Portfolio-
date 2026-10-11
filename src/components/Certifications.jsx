import Section from './Section.jsx';

export default function Certifications({ certifications }) {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="list">
        {certifications.map((c) => (
          <li className="list__item split" key={c.name}>
            <p>{c.name}</p>
            <p className="muted small">{c.date}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
