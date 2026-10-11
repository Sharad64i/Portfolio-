import Section from './Section.jsx';

export default function Contact({ email, socials }) {
  const x = socials.find((s) => s.label === 'X');
  const handle = x ? '@' + x.href.split('/').pop() : '';
  return (
    <Section id="contact" title="Contact">
      <p className="muted contact__note">Reach me by email or on X.</p>
      <dl className="panel rows">
        <div className="rows__row rows__row--link">
          <dt>Gmail</dt>
          <dd>{email}</dd>
          <a className="rows__action" href={`mailto:${email}`}>
            Send email
          </a>
        </div>
        {x && (
          <div className="rows__row rows__row--link">
            <dt>X</dt>
            <dd>{handle}</dd>
            <a className="rows__action" href={x.href} target="_blank" rel="noopener noreferrer">
              Open profile
            </a>
          </div>
        )}
      </dl>
    </Section>
  );
}
