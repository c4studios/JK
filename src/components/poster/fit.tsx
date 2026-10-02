import { Fragment, type CSSProperties } from "react";
import { fitRatio, type Face } from "@/lib/fit";

type FitVars = CSSProperties & Record<`--${string}`, string | number>;

const wdth = (face: Face) => (face === "gothic-condensed" ? 80 : 100);

type FitLineProps = {
  text: string;
  face?: Face;
  /** Face at narrow measures (40rem and under). Defaults to `face`. */
  narrowFace?: Face;
  className?: string;
  as?: "span" | "div";
};

/** One line of wood type, sized to fill its .measure container exactly. */
export function FitLine({ text, face = "gothic", narrowFace, className, as: Tag = "span" }: FitLineProps) {
  const style: FitVars = { "--fit": fitRatio(text, face), "--wd": wdth(face) };
  if (narrowFace) {
    style["--fit-m"] = fitRatio(text, narrowFace);
    style["--wd-m"] = wdth(narrowFace);
  }

  return (
    <Tag className={["fit", face === "slab" ? "fit--slab" : "", className ?? ""].join(" ").trim()} style={style}>
      {text}
    </Tag>
  );
}

type Part = { text: string; face?: Face; className?: string };

type FitSplitProps = {
  /** The whole line as it sets on wide measures. */
  text: string;
  face?: Face;
  /** The same words broken into lines for narrow measures, each filling it. */
  parts: Part[];
  className?: string;
};

/** A wide line that re-sets as several full-measure lines on narrow screens. */
export function FitSplit({ text, face = "gothic", parts, className }: FitSplitProps) {
  const style: FitVars = { "--fit": fitRatio(text, face), "--wd": wdth(face) };

  return (
    <span className={["fit fit--split", className ?? ""].join(" ").trim()} style={style}>
      {parts.map((part, index) => {
        const partFace = part.face ?? face;
        const partStyle: FitVars = { "--fit-p": fitRatio(part.text, partFace), "--wd-p": wdth(partFace) };
        return (
          <Fragment key={part.text}>
            {index > 0 ? " " : null}
            <span className={["fit__part", part.className ?? ""].join(" ").trim()} style={partStyle}>
              {part.text}
            </span>
          </Fragment>
        );
      })}
    </span>
  );
}
