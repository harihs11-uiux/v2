import svgPaths from "./svg-gl5ezzpp3k";

function SuccessCheck() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Success check">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Success check">
          <circle
            cx="7.875"
            cy="7.875"
            fill="var(--fill-0, #3874FF)"
            id="Base"
            r="7.875"
          />
          <g id="icon">
            <rect
              fill="var(--fill-0, white)"
              height="5.625"
              id="Rectangle 1574"
              rx="0.5625"
              width="1.125"
              x="7.3125"
              y="6.1875"
            />
            <circle
              cx="7.875"
              cy="4.5"
              fill="var(--fill-0, white)"
              id="Ellipse 39"
              r="0.5625"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton10() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="Icon Skeleton 10"
    >
      <SuccessCheck />
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
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center leading-[0] px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">2 items selected</p>
      </div>
    </div>
  );
}

function IconSkeleton11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="delete">
          <mask
            height="18"
            id="mask0_218_140035"
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
          <g mask="url(#mask0_218_140035)">
            <path
              d={svgPaths.p5ce8b80}
              fill="var(--fill-0, #CF3B3B)"
              id="delete_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px1() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <IconSkeleton11 />
    </div>
  );
}

function IconLeft1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px1 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center leading-[0] px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <IconLeft1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#cf3b3b] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Delete FIle</p>
      </div>
    </div>
  );
}

export default function FooterActionControls() {
  return (
    <div
      className="bg-[#050e25] box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative rounded-lg size-full"
      data-name="Footer action Controls"
    >
      <Button />
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-5" data-name="Seperator">
            <div
              className="absolute bottom-0 left-0 right-0 top-[-1px]"
              style={
                { "--stroke-0": "rgba(80, 87, 103, 1)" } as React.CSSProperties
              }
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="presentation"
                viewBox="0 0 20 1"
              >
                <line
                  id="Seperator"
                  stroke="var(--stroke-0, #505767)"
                  x2="20"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Button1 />
    </div>
  );
}