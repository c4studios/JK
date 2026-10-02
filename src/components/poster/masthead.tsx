import { Fragment } from "react";
import Image from "next/image";
import { Drop } from "@/components/poster/ornaments";
import { site } from "@/lib/site";

export function Masthead() {
  return (
    <header className="masthead">
      <div className="page">
        <div className="masthead__row">
          <a href="#top" className="masthead__logo">
            <Image
              src="/brand/jk-logo-header.png"
              alt="JK Plumbing Solutions"
              width={1384}
              height={700}
              sizes="80px"
              preload
            />
          </a>
          <nav aria-label="Main" className="masthead__nav">
            {site.nav.map((item, index) => (
              <Fragment key={item.href}>
                {index > 0 ? <Drop /> : null}
                <a href={item.href}>{item.label}</a>
              </Fragment>
            ))}
          </nav>
          <a className="masthead__call" href={site.phone.href}>
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </header>
  );
}
