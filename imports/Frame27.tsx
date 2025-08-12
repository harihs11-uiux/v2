import svgPaths from "./svg-wg6qa13jyo";

function ZoomOut() {
  return (
    <div className="relative shrink-0 size-4" data-name="Zoom out">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Zoom out">
          <g id="icon">
            <mask
              height="16"
              id="mask0_578_23422"
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
            <g mask="url(#mask0_578_23422)"></g>
          </g>
          <path
            clipRule="evenodd"
            d={svgPaths.p1302d900}
            fill="var(--fill-0, #9497A1)"
            fillRule="evenodd"
            id="Line 107 (Stroke)"
          />
        </g>
      </svg>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-4 relative shrink-0 w-[85px]" data-name="Slider">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 85 16"
      >
        <g id="Slider">
          <rect
            fill="var(--fill-0, #9497A1)"
            height="2"
            id="Base"
            rx="1"
            width="85"
            y="7"
          />
          <rect
            fill="var(--fill-0, #3874FF)"
            height="2"
            id="Fill"
            rx="1"
            width="26.1875"
            y="7"
          />
          <circle
            cx="24.5564"
            cy="8"
            fill="var(--fill-0, #3874FF)"
            id="Ellipse 1"
            r="6"
          />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-4" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="add_circle">
          <mask
            height="16"
            id="mask0_578_23410"
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
          <g mask="url(#mask0_578_23410)">
            <path
              d={svgPaths.p17180a00}
              fill="var(--fill-0, #9497A1)"
              id="add_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full">
      <ZoomOut />
      <Slider />
      <Add />
    </div>
  );
}