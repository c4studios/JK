import Image from "next/image";
import { C4Credit } from "@/components/c4-credit";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer page">
      <div className="footer__grid">
        <div>
          <Image
            src="/brand/jk-logo-header.png"
            alt="JK Plumbing Solutions"
            width={1384}
            height={700}
            sizes="96px"
            className="footer__logo"
          />
          <p style={{ margin: 0 }}>{site.legalName}</p>
          <p style={{ margin: 0 }}>Director {site.director}</p>
        </div>
        <div>
          <h2>Licensed</h2>
          <ul>
            <li>Plumbing licence {site.plumbingLicence}</li>
            <li>ABN {site.abn}</li>
            <li>Based in Campbelltown NSW</li>
          </ul>
        </div>
        <div>
          <h2>On this page</h2>
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Get in touch</h2>
          <ul>
            <li>
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} style={{ overflowWrap: "anywhere" }}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.social.instagramUrl}>@{site.social.instagram}</a>
            </li>
            <li>Facebook: {site.social.facebook}</li>
          </ul>
        </div>
      </div>
      <div className="footer__credit">
        <C4Credit />
      </div>
    </footer>
  );
}

export function CallBar() {
  return (
    <a className="call-bar" href={site.phone.href}>
      Call {site.phone.display}
    </a>
  );
}
