/** The water drop from the JK logo, used where a gig poster would use a star. */
export function Drop({ className }: { className?: string }) {
  return (
    <svg className={["drop", className ?? ""].join(" ").trim()} viewBox="0 0 12 16" aria-hidden="true" focusable="false">
      <path d="M6 0C5.2 1.6 0 7.4 0 10.3a6 6 0 0 0 12 0C12 7.4 6.8 1.6 6 0Z" fill="currentColor" />
    </svg>
  );
}

/**
 * Duotone "printing" for photos: luminance mapped from an ink to the poster
 * stock, with a gentle S-curve so shadows sit down like ink on uncoated paper.
 * Rendered once per page; CSS references the filters by id.
 */
export function PrintFilters() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <filter id="print-ink" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.110 0.272 0.800 0.922" />
            <feFuncG type="table" tableValues="0.106 0.264 0.775 0.894" />
            <feFuncB type="table" tableValues="0.102 0.247 0.718 0.827" />
          </feComponentTransfer>
        </filter>
        <filter id="print-blue" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.114 0.276 0.801 0.922" />
            <feFuncG type="table" tableValues="0.345 0.455 0.811 0.894" />
            <feFuncB type="table" tableValues="0.639 0.677 0.765 0.827" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
