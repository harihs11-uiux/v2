import svgPaths from "./svg-nif5l2vdkm";

function Icon() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="icon">
          <mask
            height="16"
            id="mask0_578_23427"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_578_23427)">
            <path
              d={svgPaths.p5202000}
              fill="var(--fill-0, #9497A1)"
              id="refresh"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function IconSkeleton2() {
  return (
    <div className="relative size-full" data-name="Icon Skeleton 2">
      <Icon />
    </div>
  );
}