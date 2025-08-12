import svgPaths from "./svg-ra1x39djyh";

function Edit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="edit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="edit">
          <mask
            height="18"
            id="mask0_91_472"
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
          <g mask="url(#mask0_91_472)">
            <path
              d={svgPaths.p21f4e080}
              fill="var(--fill-0, #9497A1)"
              id="edit_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewHistory() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="View History">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="View History">
          <mask
            height="18"
            id="mask0_91_468"
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
          <g mask="url(#mask0_91_468)">
            <path
              d={svgPaths.p1c96b400}
              fill="var(--fill-0, #9497A1)"
              id="contract"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewChecklist() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="View Checklist">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="View Checklist">
          <mask
            height="18"
            id="mask0_91_464"
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
          <g mask="url(#mask0_91_464)">
            <path
              d={svgPaths.p43e0680}
              fill="var(--fill-0, #9497A1)"
              id="description"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

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
        <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-[8px] relative size-full">
          <Edit />
          <ViewHistory />
          <ViewChecklist />
          <Duplicate />
          <Cancel />
        </div>
      </div>
    </div>
  );
}