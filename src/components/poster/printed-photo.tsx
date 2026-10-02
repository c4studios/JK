import Image from "next/image";
import type { WorkPhoto } from "@/lib/site";

type PrintedPhotoProps = {
  photo: WorkPhoto;
  sizes: string;
  className?: string;
  caption?: boolean;
};

/**
 * A real job photo printed in one ink on the stock. The colour photo sits
 * underneath (same file, so one download); hovering lifts the ink layer.
 */
export function PrintedPhoto({ photo, sizes, className, caption = true }: PrintedPhotoProps) {
  const position = photo.position ?? "50% 50%";

  return (
    <figure className={["print", `print--${photo.ink}`, className ?? ""].join(" ").trim()}>
      <div className="print__plate">
        <Image
          src={photo.src}
          alt=""
          aria-hidden="true"
          fill
          sizes={sizes}
          className="print__colour"
          style={{ objectPosition: position }}
        />
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className="print__ink"
          style={{ objectPosition: position }}
        />
      </div>
      {caption ? <figcaption>{photo.caption}</figcaption> : null}
    </figure>
  );
}
