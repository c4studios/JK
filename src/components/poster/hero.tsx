import { FitLine, FitSplit } from "@/components/poster/fit";
import { site } from "@/lib/site";

/**
 * The broadside. Four problems in wood type, each line filling the measure,
 * then the number as the one red pass. On narrow screens the first line
 * re-sets as two full-measure lines and the rest swap to condensed type.
 */
export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="measure">
        <h1 id="hero-title" className="hero__lines inked">
          <FitSplit
            text="Blocked? Leaking?"
            className="ink-ink"
            parts={[{ text: "Blocked?" }, { text: "Leaking?", className: "m-blue" }]}
          />
          <FitLine text="No hot water? Gas?" narrowFace="gothic-condensed" className="ink-blue m-ink" />
        </h1>
      </div>

      <a className="call-band" href={site.phone.href}>
        <span className="call-band__plate">
          <span className="measure inked">
            <FitLine text={`Call ${site.phone.display}`} narrowFace="gothic-condensed" />
          </span>
        </span>
      </a>

      <p className="hero__sub">
        <span>Licensed plumbers · Campbelltown to Sydney</span>
        <span className="ink-blue">Drains · leaks · hot water · gas · renovations</span>
      </p>
      <div className="hero__foot">
        <span>
          <span className="nowrap">Plumbing licence {site.plumbingLicence}</span> ·{" "}
          <span className="nowrap">ABN {site.abn}</span>
        </span>
        <a href="#contact">Planned job? Send the details</a>
      </div>
    </section>
  );
}
