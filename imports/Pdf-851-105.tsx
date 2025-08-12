import svgPaths from "./svg-cc7akgvarb";

function PdfIcon() {
  return (
    <div
      className="absolute inset-[7.25%_13.31%_8.19%_14.19%]"
      data-name="PDF icon"
    >
      <div className="absolute bottom-[-2.63%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 16"
        >
          <g id="PDF icon">
            <path
              d={svgPaths.p23bc8c00}
              fill="var(--fill-0, #626776)"
              id="Path"
            />
            <path
              d={svgPaths.pe630c0}
              id="Path_2"
              stroke="var(--stroke-0, #626776)"
              strokeWidth="0.8"
            />
            <path
              d={svgPaths.p2d669f0}
              fill="var(--fill-0, #626776)"
              id="Path_3"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.pfc1ef00}
              fill="var(--fill-0, #242C40)"
              fillRule="evenodd"
              id="Shape"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3ad3c880}
              fill="var(--fill-0, #242C40)"
              fillRule="evenodd"
              id="Shape_2"
            />
            <path
              d={svgPaths.p1a059540}
              fill="var(--fill-0, #242C40)"
              id="Path_4"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Pdf() {
  return (
    <div className="relative size-full" data-name="Pdf">
      <PdfIcon />
    </div>
  );
}