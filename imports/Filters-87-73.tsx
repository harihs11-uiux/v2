import svgPaths from "./svg-xkhl016h09";

function FilterList() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="filter_list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="filter_list">
          <mask
            height="16"
            id="mask0_2_30074"
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
          <g mask="url(#mask0_2_30074)">
            <path
              d={svgPaths.p8cd7480}
              fill="var(--fill-0, #626776)"
              id="filter_list_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Filters() {
  return (
    <div className="relative size-full" data-name="filters">
      <FilterList />
    </div>
  );
}