import svgPaths from "./svg-b5i787ocap";

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
            id="mask0_170_2033"
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
          <g mask="url(#mask0_170_2033)">
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

function Filters() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Filters />
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div
      className="bg-[#ebeef7] relative shrink-0 w-full"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start px-2 py-1.5 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[162px]">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
              BE Number
            </p>
          </div>
          <NoOfIcons />
        </div>
      </div>
    </div>
  );
}

function TableBodyCell() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start px-2 py-1.5 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left w-[184px]">
            <p className="block leading-[18px]">39599394</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableBodyCell4() {
  return (
    <div
      className="bg-[#ffffff] h-[30px] relative shrink-0 w-full"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-[30px] items-start justify-start px-2 py-1.5 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left w-[184px]">
            <p className="block leading-[18px]">39599394</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame42674() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
      <TableHeaderCell />
      {[...Array(4).keys()].map((_, i) => (
        <TableBodyCell key={i} />
      ))}
      <TableBodyCell4 />
    </div>
  );
}