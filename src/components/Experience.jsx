import Section from './Section.jsx';
import TagList from './TagList.jsx';

export default function Experience({ experience }) {
  return (
    <Section id="experience" title="Experience">
      <div className="stack">
        {experience.map((e) => (
          <article key={e.company + e.period}>
            <header className="split">
              <p>
                <strong>{e.role}</strong>, {e.company}
              </p>
              <p className="muted small">
                {e.period} | {e.location}
              </p>
            </header>
            <ul className="bullets">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <TagList items={e.tech} />
          </article>
        ))}
      </div>
    </Section>
  );
}
