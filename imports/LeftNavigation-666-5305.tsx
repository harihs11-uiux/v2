import svgPaths from "./svg-wai612fhg5";

function JobDetails() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Job Details">
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">FL 01</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExchangeRate() {
  return (
    <div className="relative rounded shrink-0 w-full" data-name="Exchange Rate">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">FL02</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div
      className="absolute bg-[#242c40] bottom-14 box-border content-stretch flex flex-col gap-1 items-start justify-start left-2 overflow-x-clip overflow-y-auto px-0 py-3 right-2 top-12"
      data-name="List"
    >
      <JobDetails />
      <ExchangeRate />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="absolute right-1.5 size-[18px] translate-y-[-50%]"
      data-name="Icon"
      style={{ top: "calc(50% + 1px)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="double_arrow">
          <mask
            height="18"
            id="mask0_481_8045"
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
          <g mask="url(#mask0_481_8045)">
            <path
              d={svgPaths.p1cebca00}
              fill="var(--fill-0, #9497A1)"
              id="double_arrow_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-12 left-2 right-2 top-0" data-name="Heading">
      <div className="overflow-clip relative size-full">
        <Icon />
        <div
          className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-2 not-italic text-[#ffffff] text-[16px] text-left text-nowrap"
          style={{ top: "calc(50% - 9px)" }}
        >
          <p className="block leading-[18px] whitespace-pre">Files</p>
        </div>
      </div>
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function LeftNavigation() {
  return (
    <div
      className="bg-[#242c40] relative size-full"
      data-name="Left Navigation"
    >
      <div className="relative size-full">
        <List />
        <Heading />
      </div>
      <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}