import Section from './Section.jsx';
import TagList from './TagList.jsx';

export default function Projects({ projects }) {
  return (
    <Section id="projects" title="Projects">
      <div className="stack">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <header className="project__head">
              <h3>
                {p.title} <span className="muted">— {p.subtitle}</span>
                {p.status && <span className="badge">{p.status}</span>}
              </h3>
              <ul className="project__links">
                {p.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </header>
            <p className="project__desc">{p.description}</p>
            <TagList items={p.tech} />
          </article>
        ))}
      </div>
    </Section>
  );
}
