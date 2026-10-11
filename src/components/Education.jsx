import Section from './Section.jsx';

export default function Education({ education }) {
  return (
    <Section id="education" title="Education">
      <ul className="list">
        {education.map((e) => (
          <li className="list__item split" key={e.school + e.period}>
            <div>
              <p>{e.school}</p>
              <p className="muted small">{e.detail}</p>
            </div>
            <p className="muted small">{e.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
