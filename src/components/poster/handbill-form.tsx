"use client";

import { useRef, useState, type FormEvent } from "react";

type HandbillFormProps = {
  email: string;
  phone: { display: string; href: string };
};

const jobTypes = [
  "Renovation",
  "New build",
  "Hot water",
  "Gas fitting",
  "General maintenance",
  "Commercial",
  "Something else",
];

type Errors = Partial<Record<"name" | "contact" | "email", string>>;

/**
 * The quote form as a yellow letterbox handbill. It's for planned work: on
 * send, the visitor's email app opens with the details filled in (concept
 * stage, no server). The success state says exactly that.
 */
export function HandbillForm({ email, phone }: HandbillFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const name = value("name");
    const phoneNumber = value("phone");
    const emailAddress = value("email");
    const next: Errors = {};

    if (!name) next.name = "Add your name so we know who to ask for.";
    if (!phoneNumber && !emailAddress) next.contact = "Add a phone number or an email so we can get back to you.";
    if (emailAddress && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      next.email = "That email doesn't look right. Check it, or leave it blank and add a phone number.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstInvalid = next.name ? "name" : next.contact ? "phone" : "email";
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const lines = [
      `Name: ${name}`,
      `Phone: ${phoneNumber || "-"}`,
      `Email: ${emailAddress || "-"}`,
      `Suburb: ${value("suburb") || "-"}`,
      `Job: ${value("job") || "-"}`,
      "",
      value("details") || "(no details added)",
      "",
      "Sent from the JK Plumbing website.",
    ];
    const subject = `Job details from ${name}${value("suburb") ? ` (${value("suburb")})` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    setSent(true);
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  if (sent) {
    return (
      <div className="handbill__done" role="status">
        <h3 ref={doneRef} tabIndex={-1}>
          Ready to send
        </h3>
        <p>Your email app should have opened with the job details filled in. Send it from there.</p>
        <p>
          Nothing opened? Email <a href={`mailto:${email}`}>{email}</a> or call{" "}
          <a href={phone.href}>{phone.display}</a>.
        </p>
        <button type="button" className="handbill__again" onClick={() => setSent(false)}>
          Fill in another one
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby="handbill-intro">
      <div className="field">
        <label htmlFor="hb-name">Name</label>
        <input
          id="hb-name"
          name="name"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "hb-name-error" : undefined}
        />
        {errors.name ? (
          <p id="hb-name-error" className="field__error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="hb-phone">Phone</label>
          <input
            id="hb-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={errors.contact ? true : undefined}
            aria-describedby={errors.contact ? "hb-contact-error" : undefined}
          />
        </div>
        <div className="field">
          <label htmlFor="hb-email">Email</label>
          <input
            id="hb-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.contact || errors.email ? true : undefined}
            aria-describedby={errors.email ? "hb-email-error" : errors.contact ? "hb-contact-error" : undefined}
          />
          {errors.email ? (
            <p id="hb-email-error" className="field__error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>
      {errors.contact ? (
        <p id="hb-contact-error" className="field__error" style={{ marginTop: "-0.6rem", marginBottom: "0.9rem" }}>
          {errors.contact}
        </p>
      ) : null}

      <div className="field-row">
        <div className="field">
          <label htmlFor="hb-suburb">Suburb</label>
          <input id="hb-suburb" name="suburb" autoComplete="address-level2" />
        </div>
        <div className="field">
          <label htmlFor="hb-job">Job</label>
          <select id="hb-job" name="job" defaultValue="">
            <option value="">Choose one</option>
            {jobTypes.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="hb-details">What's the job?</label>
        <textarea id="hb-details" name="details" rows={4} />
      </div>

      <button type="submit" className="handbill__send">
        Send the details
      </button>
      <p className="handbill__fine">Your email app opens with this filled in. Attach any photos before you send.</p>
    </form>
  );
}
