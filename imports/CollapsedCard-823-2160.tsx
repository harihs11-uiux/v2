import svgPaths from "./svg-26kguuw50j";

function IconSkeleton10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="add_circle">
          <mask
            height="18"
            id="mask0_823_3203"
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
          <g mask="url(#mask0_823_3203)">
            <path
              d={svgPaths.p3865e500}
              fill="var(--fill-0, white)"
              id="add_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <IconSkeleton10 />
    </div>
  );
}

function IconLeft() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#3874ff] relative rounded shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[8px] relative w-full">
          <IconLeft />
        </div>
      </div>
    </div>
  );
}

export default function CollapsedCard() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative rounded shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)] size-full"
      data-name="Collapsed Card"
    >
      <Button />
    </div>
  );
}