export default function Footer({ name, socials, email }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        <ul className="footer__links" aria-label="Footer links">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${email}`}>Gmail</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
