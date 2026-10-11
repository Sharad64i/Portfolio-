export default function Hero({ profile, socials }) {
  const base = import.meta.env.BASE_URL;
  return (
    <section id="about" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            <a className="btn" href={`${base}${profile.resume}`} download>
              Download Resume
            </a>
          </div>

          <ul className="socials" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__image">
          <img src={`${base}${profile.image}`} alt={profile.imageAlt} width="290" height="290" />
        </div>
      </div>
    </section>
  );
}
