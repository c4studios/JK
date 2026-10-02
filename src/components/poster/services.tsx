import { FitLine, FitSplit } from "@/components/poster/fit";
import { PrintedPhoto } from "@/components/poster/printed-photo";
import { site } from "@/lib/site";

const cameraScreen = {
  src: "/images/IMG_7557.JPEG",
  alt: "The drain camera's screen showing the inside of a pipe",
  caption: "Camera footage from inside a line",
  width: 1536,
  height: 2048,
  ink: "blue",
  position: "50% 30%",
} as const;

/** Ruled modules, each service title filling its own module in wood type. */
export function Services() {
  const [drains, hotWater, gas, leaks, renovations, commercial] = site.services;

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <h2 id="services-title" className="section-head">
        What we do
      </h2>
      <div className="modules">
        <article className="module module--w4">
          <h3 className="measure">
            <FitLine text={drains.title} className="ink-ink inked" />
          </h3>
          <p className="module__detail">{drains.detail}</p>
        </article>
        <div className="module module--w2 module--photo">
          <PrintedPhoto photo={cameraScreen} sizes="(min-width: 52rem) 30vw, 100vw" className="module__print" />
        </div>

        <article className="module module--w2">
          <h3 className="measure">
            <FitLine text={hotWater.title} className="ink-blue inked" />
          </h3>
          <p className="module__detail">{hotWater.detail}</p>
        </article>
        <article className="module module--w2">
          <h3 className="measure">
            <FitLine text={gas.title} className="ink-ink inked" />
          </h3>
          <p className="module__detail">{gas.detail}</p>
        </article>
        <article className="module module--w2">
          <h3 className="measure">
            <FitLine text={leaks.title} className="ink-blue inked" />
          </h3>
          <p className="module__detail">{leaks.detail}</p>
        </article>

        <article className="module module--w4">
          <h3 className="measure inked">
            <FitSplit
              text={renovations.title}
              className="ink-ink"
              parts={[{ text: "Renovations &" }, { text: "New builds", className: "m-blue" }]}
            />
          </h3>
          <p className="module__detail">{renovations.detail}</p>
        </article>
        <article className="module module--w2">
          <h3 className="measure">
            <FitLine text={commercial.title} className="ink-blue inked" />
          </h3>
          <p className="module__detail">{commercial.detail}</p>
        </article>
      </div>
    </section>
  );
}
