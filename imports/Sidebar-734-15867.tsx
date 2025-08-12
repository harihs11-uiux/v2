import svgPaths from "./svg-7938i7ffse";

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="double_arrow">
          <mask
            height="18"
            id="mask0_594_128875"
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
          <g mask="url(#mask0_594_128875)">
            <path
              d={svgPaths.p2c139180}
              fill="var(--fill-0, #9497A1)"
              id="double_arrow_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Icon />
    </div>
  );
}

function CollapsedTitlebarActions() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Collapsed Titlebar Actions"
    >
      <NoOfIcons />
    </div>
  );
}

function SidebarCollapsedTitlebar() {
  return (
    <div
      className="h-12 relative shrink-0 w-[47px]"
      data-name="Sidebar Collapsed  Titlebar"
    >
      <div className="h-12 overflow-clip relative w-[47px]">
        <CollapsedTitlebarActions />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

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
            id="mask0_594_128844"
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
          <g mask="url(#mask0_594_128844)">
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

function CollapsedCard() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 h-9 items-center justify-center p-0 relative rounded shadow-[0px_0px_11px_1px_#272d3f] shrink-0 w-[45px]"
      data-name="Collapsed Card"
    >
      <Button />
    </div>
  );
}

function Indcator() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 14 14"
      >
        <g id="indcator">
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="5.25"
          />
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="2.625"
          />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Indcator />
    </div>
  );
}

function CollapsedCardTitle() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0"
      data-name="Collapsed Card Title"
    >
      <NoOfIcons1 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Live</p>
      </div>
    </div>
  );
}

function CollapsedCard1() {
  return (
    <div
      className="bg-[#32394c] box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 w-[45px]"
      data-name="Collapsed Card"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded shadow-[0px_0px_11px_1px_#272d3f]"
      />
      <CollapsedCardTitle />
    </div>
  );
}

function CardListCollapsed() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px px-0 py-3 relative shrink-0"
      data-name="Card List Collapsed"
    >
      <CollapsedCard />
      <CollapsedCard1 />
    </div>
  );
}

function SidebarSkeleton() {
  return (
    <div
      className="basis-0 bg-[#242c40] grow min-h-px min-w-px relative shrink-0"
      data-name="Sidebar Skeleton"
    >
      <div className="box-border content-stretch flex flex-col h-full items-center justify-start overflow-clip px-3 py-0 relative">
        <SidebarCollapsedTitlebar />
        <CardListCollapsed />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Sidebar"
    >
      <SidebarSkeleton />
    </div>
  );
}