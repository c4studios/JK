import { FitLine } from "@/components/poster/fit";
import { HandbillForm } from "@/components/poster/handbill-form";
import { site } from "@/lib/site";

/** The red call act beside a yellow letterbox handbill for planned work. */
export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-head">
        Call or send the details
      </h2>
      <div className="contact">
        <div className="call-act">
          <div className="call-act__plate">
            <p className="call-act__lead">Leaking, blocked or not working?</p>
            <a className="call-act__number measure" href={site.phone.href}>
              <FitLine text={`Call ${site.phone.display}`} narrowFace="gothic-condensed" className="inked" />
            </a>
            <p className="call-act__small">
              For anything urgent, call. It&apos;s quicker to explain on the phone: what&apos;s happening, and where the job is.
            </p>
          </div>
          <div className="call-act__more">
            <p style={{ margin: 0 }}>
              Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p style={{ margin: 0 }}>
              Instagram: <a href={site.social.instagramUrl}>@{site.social.instagram}</a>
            </p>
          </div>
        </div>

        <div className="handbill">
          <h3 className="handbill__title">Planned job?</h3>
          <p id="handbill-intro" className="handbill__intro">
            Renovation, new build or some maintenance. Fill this in and we&apos;ll get back to you.
          </p>
          <HandbillForm email={site.email} phone={site.phone} />
          <a className="tearoffs" href={site.phone.href} aria-label={`Call ${site.phone.display}`}>
            {Array.from({ length: 7 }, (_, index) => (
              <span key={index} aria-hidden="true">
                <b>{site.phone.display}</b>
              </span>
            ))}
          </a>
        </div>
      </div>
    </section>
  );
}
