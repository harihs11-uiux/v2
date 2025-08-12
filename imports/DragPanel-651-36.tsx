import svgPaths from "./svg-wsen5suc9t";

function VerticalScrollBar() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-px"
      data-name="Vertical Scroll Bar"
    >
      <div
        className="absolute bg-[#90a0cb] inset-0 rounded-[22px]"
        data-name="Vertical Bar"
      />
    </div>
  );
}

function DragHandle() {
  return (
    <div className="relative size-5" data-name="drag_handle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="drag_handle">
          <mask
            height="20"
            id="mask0_649_79"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_649_79)">
            <path
              d={svgPaths.p3ac98f00}
              fill="var(--fill-0, #90A0CB)"
              id="drag_handle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function DragPanel() {
  return (
    <div className="bg-[#dde3f2] relative size-full" data-name="Drag Panel">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-0.5 items-center justify-center px-0.5 py-0 relative size-full">
          <VerticalScrollBar />
          <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[20px]">
            <div className="flex-none rotate-[270deg]">
              <DragHandle />
            </div>
          </div>
          <VerticalScrollBar />
        </div>
      </div>
    </div>
  );
}