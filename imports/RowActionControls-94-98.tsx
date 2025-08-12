import svgPaths from "./svg-u35ksbtsus";

function Duplicate() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="duplicate">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="duplicate">
          <mask
            height="18"
            id="mask0_91_460"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_91_460)">
            <path
              d={svgPaths.p19afbe00}
              fill="var(--fill-0, #9497A1)"
              id="control_point_duplicate"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Cancel() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="cancel">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="cancel">
          <mask
            height="18"
            id="mask0_91_456"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_91_456)">
            <path
              d={svgPaths.p2bb39d70}
              fill="var(--fill-0, #CF3B3B)"
              id="cancel_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function RowActionControls() {
  return (
    <div
      className="bg-[#050e25] relative rounded-[25px] size-full"
      data-name="Row Action Controls"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start px-4 py-2 relative size-full">
          <Duplicate />
          <Cancel />
        </div>
      </div>
    </div>
  );
}