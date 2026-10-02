import { FitLine } from "@/components/poster/fit";
import { Drop } from "@/components/poster/ornaments";
import { site } from "@/lib/site";

/** Where we work, set like a poster's bill: the base town biggest. */
export function Areas() {
  const { base, lines, beyond } = site.serviceAreas;

  return (
    <section id="areas" className="section" aria-labelledby="areas-title">
      <h2 id="areas-title" className="section-head">
        Where we work
      </h2>
      <div className="areas measure">
        <p className="sr-only">
          Based in {base}. We work across Macarthur, Camden, Narellan, Liverpool and South West Sydney. {beyond}
        </p>
        <div aria-hidden="true">
          <p className="areas__base-label">
            <Drop /> Based in <Drop />
          </p>
          <div className="areas__lines inked">
            <FitLine text={base} className="ink-ink" />
            <div className="only-wide">
              <div className="areas__lines">
                <FitLine text={lines[0]} className="ink-blue" />
                <FitLine text={lines[1]} className="ink-ink" />
              </div>
            </div>
            <div className="only-narrow">
              <div className="areas__lines">
                <FitLine text="Macarthur · Camden" className="ink-blue" />
                <FitLine text="Narellan · Liverpool" className="ink-ink" />
                <FitLine text="South West Sydney" className="ink-blue" />
              </div>
            </div>
          </div>
          <p className="areas__beyond">{beyond}</p>
        </div>
      </div>
    </section>
  );
}
