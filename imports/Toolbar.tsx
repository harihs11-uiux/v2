import svgPaths from "./svg-gd0h7fwbx6";

function TotalJobs() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Total Jobs"
    >
      <div className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium ml-0 mt-0 not-italic relative text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Total Jobs: 100</p>
      </div>
    </div>
  );
}

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
            id="mask0_2_30048"
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
          <g mask="url(#mask0_2_30048)">
            <path
              d={svgPaths.p8cd7480}
              fill="var(--fill-0, #3874FF)"
              id="filter_list_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList />
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <Filters />
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

function ArrowDropdown() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]"
      data-name="arrow_dropdown"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2_30164)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #3874FF)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_30164">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Right"
    >
      <ArrowDropdown />
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
        <p className="block leading-[18px] whitespace-pre">Add Filter</p>
      </div>
      <IconRight />
    </div>
  );
}

function LeftsideControls() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-3 pr-0 py-0 relative shrink-0"
      data-name="Leftside Controls"
    >
      <TotalJobs />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Create Job</p>
      </div>
    </div>
  );
}

function ToolbarActions() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0"
      data-name="Toolbar Actions"
    >
      <Button1 />
    </div>
  );
}

function RightSideControls() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0"
      data-name="Right Side Controls"
    >
      <ToolbarActions />
    </div>
  );
}

function ListToolbar() {
  return (
    <div
      className="basis-0 grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="List Toolbar"
    >
      <div className="absolute border-0 border-[#505767] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-12 items-center justify-between pl-0 pr-3 py-0 relative w-full">
          <LeftsideControls />
          <RightSideControls />
        </div>
      </div>
    </div>
  );
}

export default function Toolbar() {
  return (
    <div
      className="bg-[#242c40] box-border content-stretch flex flex-row items-center justify-start p-0 relative size-full"
      data-name="Toolbar"
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ListToolbar />
    </div>
  );
}