import Section from './Section.jsx';

export default function Skills({ skills }) {
  return (
    <Section id="skills" title="Skills">
      <dl className="panel rows">
        {skills.map((s) => (
          <div className="rows__row" key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
