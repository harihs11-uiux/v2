import svgPaths from "./svg-okqppzsenn";

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p2e32d400}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-center pl-0 px-2 py-1.5 relative self-stretch shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Checkbox />
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 px-2 py-1.5 relative self-stretch shrink-0 w-[71px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Sr. No.
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 px-2 py-1.5 relative self-stretch shrink-0 flex-grow"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Job Details</p>
      </div>
    </div>
  );
}

function TableFreezedHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start order-3 overflow-clip p-0 relative shrink-0"
      data-name="Table Freezed Header"
    >
      <TableHeaderCell />
      <TableHeaderCell1 />
      <TableHeaderCell2 />
    </div>
  );
}

function FilterList2() {
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

function Filters2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList2 />
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Filters2 />
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[262px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Status
        </p>
      </div>
      <NoOfIcons4 />
    </div>
  );
}

function TableEdit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="table edit">
          <rect
            fill="var(--fill-0, #626776)"
            height="12"
            id="Rectangle 3"
            width="1.2"
            x="5"
            y="3"
          />
          <path
            d={svgPaths.p3c1edf00}
            fill="var(--fill-0, #626776)"
            id="Subtract"
          />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #626776)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <TableEdit />
    </div>
  );
}

function TableHeaderCell6() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons5 />
    </div>
  );
}

function TableFreezedHeaderOptions() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-end order-1 p-0 relative self-stretch shrink-0"
      data-name="Table Freezed Header Options"
    >
      <TableHeaderCell5 />
      <TableHeaderCell6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between order-3 overflow-clip p-0 rounded-tl-[4px] rounded-tr-[4px] shrink-0 sticky top-0 w-full"
      data-name="Table Header"
    >
      <TableFreezedHeader />
      <TableFreezedHeaderOptions />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p2e32d400}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start pl-0 px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Checkbox1 />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute h-[15.342px] left-[2.869px] top-[1.455px] w-[11.905px]"
      data-name="icon"
    >
      <div className="absolute bottom-[-1.768%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 16"
        >
          <g id="icon">
            <foreignObject height="15.01" width="14.4327" x="-1.26404" y="-3">
              <div
                style={{
                  backdropFilter: "blur(1.5px)",
                  clipPath: "url(#bgblur_0_2_30097_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              clipRule="evenodd"
              d={svgPaths.p24f27600}
              data-figma-bg-blur-radius="3"
              fill="url(#paint0_linear_2_30097)"
              fillOpacity="0.65"
              fillRule="evenodd"
              id="Body"
            />
            <foreignObject
              height="12.8243"
              width="15.3047"
              x="-1.7"
              y="4.21739"
            >
              <div
                style={{
                  backdropFilter: "blur(0.85px)",
                  clipPath: "url(#bgblur_1_2_30097_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <g
              data-figma-bg-blur-radius="1.7"
              filter="url(#filter1_i_2_30097)"
              id="Shape 1"
            >
              <rect
                fill="url(#paint1_linear_2_30097)"
                height="9.42427"
                rx="2"
                width="11.9047"
                y="5.91739"
              />
            </g>
            <foreignObject
              height="36.5804"
              width="34.3596"
              x="-11.2277"
              y="-7.66054"
            >
              <div
                style={{
                  backdropFilter: "blur(7.94px)",
                  clipPath: "url(#bgblur_2_2_30097_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <g
              data-figma-bg-blur-radius="15.8888"
              filter="url(#filter2_d_2_30097)"
              id="Union"
            >
              <mask fill="white" id="path-3-inside-1_2_30097">
                <path d={svgPaths.p2aba9500} />
              </mask>
              <path
                d={svgPaths.p2aba9500}
                fill="url(#paint2_linear_2_30097)"
                shapeRendering="crispEdges"
              />
              <path
                d={svgPaths.p3ec9200}
                fill="url(#paint3_linear_2_30097)"
                mask="url(#path-3-inside-1_2_30097)"
              />
            </g>
          </g>
          <defs>
            <clipPath
              id="bgblur_0_2_30097_clip_path"
              transform="translate(1.26404 3)"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p24f27600}
                fillRule="evenodd"
              />
            </clipPath>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="12.8243"
              id="filter1_i_2_30097"
              width="15.3047"
              x="-1.7"
              y="4.21739"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.85" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.872577 0 0 0 0 0.218986 0 0 0 0 0.165333 0 0 0 1 0"
              />
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_2_30097"
              />
            </filter>
            <clipPath
              id="bgblur_1_2_30097_clip_path"
              transform="translate(1.7 -4.21739)"
            >
              <rect height="9.42427" rx="2" width="11.9047" y="5.91739" />
            </clipPath>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="36.5804"
              id="filter2_d_2_30097"
              width="34.3596"
              x="-11.2277"
              y="-7.66054"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.29097" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.738283 0 0 0 0 0.322544 0 0 0 0 0.30047 0 0 0 1 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_2_30097"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_2_30097"
                mode="normal"
                result="shape"
              />
            </filter>
            <clipPath
              id="bgblur_2_2_30097_clip_path"
              transform="translate(11.2277 7.66054)"
            >
              <path d={svgPaths.p2aba9500} />
            </clipPath>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_2_30097"
              x1="5.95233"
              x2="5.95233"
              y1="11.555"
              y2="-0.335695"
            >
              <stop stopColor="#FF7C78" />
              <stop offset="1" stopColor="#FF2A15" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_2_30097"
              x1="5.95235"
              x2="5.95235"
              y1="5.24789"
              y2="15.3417"
            >
              <stop stopColor="#ED5D59" stopOpacity="0.52" />
              <stop offset="1" stopColor="#FF5B49" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_2_30097"
              x1="7.24308"
              x2="4.1211"
              y1="9.51924"
              y2="10.3483"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.77" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_2_30097"
              x1="4.04694"
              x2="6.56141"
              y1="8.79805"
              y2="11.404"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Lock">
      <Icon1 />
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Lock />
    </div>
  );
}

function TableBodyCell1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start pl-0 px-2 py-1.5 relative shrink-0 w-[71px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons6 />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px] text-left">
        <p className="block leading-[18px]">1</p>
      </div>
    </div>
  );
}

function JobDetails() {
  return (
    <div className="relative shrink-0 size-5" data-name="Job Details">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Job Details">
          <path
            d={svgPaths.p1b4d5b00}
            fill="var(--fill-0, #626776)"
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <JobDetails />
    </div>
  );
}

function TableBodyCell4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-full items-center justify-start pl-0 px-2 py-1.5 relative shrink-0 flex-grow"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons8 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Soorya &gt; Krishnan &gt; Thiruvilla
        </p>
      </div>
    </div>
  );
}

function TableFreezedRow() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell4 />
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <div className="relative shrink-0 size-2" data-name="Dot">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Dot">
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #05D14B)"
            id="Ellipse 87"
            r="4"
          />
        </g>
      </svg>
    </div>
  );
}

function StatusIndicator() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Status Indicator"
    >
      <Dot />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Delivered</p>
      </div>
    </div>
  );
}

function TableBodyCell5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <StatusIndicator />
    </div>
  );
}

function TableEdit1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="table edit">
          <rect
            fill="var(--fill-0, #626776)"
            height="12"
            id="Rectangle 3"
            width="1.2"
            x="5"
            y="3"
          />
          <path
            d={svgPaths.p3c1edf00}
            fill="var(--fill-0, #626776)"
            id="Subtract"
          />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #626776)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <TableEdit1 />
    </div>
  );
}

function TableBodyCell6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons9 />
    </div>
  );
}

function TableFreezedRowOptions() {
  return (
    <div className="relative shrink-0" data-name="Table Freezed Row Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-end p-0 relative">
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell5 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableBodyCell6 />
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div
      className="order-[13] relative shrink-0 w-full"
      data-name="Table Row 1"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <TableFreezedRow />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

// Repeat similar pattern for other rows with different data
function TableRow2() {
  return (
    <div className="order-12 relative shrink-0 w-full" data-name="Table Row 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <TableFreezedRow />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="order-11 relative shrink-0 w-full" data-name="Table Row 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <TableFreezedRow />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="order-10 relative shrink-0 w-full" data-name="Table Row 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <TableFreezedRow />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="order-9 relative shrink-0 w-full" data-name="Table Row 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <TableFreezedRow />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

function RowSet() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Row Set"
    >
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Body() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-2 overflow-clip p-0 relative shrink-0 w-full"
      data-name="Body"
    >
      <RowSet />
    </div>
  );
}

function TableHeaderCell7() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableHeaderCell8() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-center text-nowrap w-[55px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          .No
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell9() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 flex-grow"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[92px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Cell Name
        </p>
      </div>
    </div>
  );
}

function TableFreezedFooter() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row h-10 items-center justify-start order-3 p-0 relative shrink-0"
      data-name="Table Freezed Footer"
    >
      <TableHeaderCell7 />
      <TableHeaderCell8 />
      <TableHeaderCell9 />
    </div>
  );
}

function TableHeaderCell11() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[150px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[92px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Cell Name
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell13() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[68px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[92px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Cell Name
        </p>
      </div>
    </div>
  );
}

function TableScrollableFooter() {
  return (
    <div
      className="basis-0 bg-[#ebeef7] box-border content-stretch flex flex-row grow h-10 items-center justify-end min-h-px min-w-px order-2 overflow-clip p-0 relative shrink-0"
      data-name="Table Scrollable Footer"
    >
      <TableHeaderCell11 />
      <TableHeaderCell13 />
    </div>
  );
}

function TableEdit2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="table edit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="table edit">
          <rect
            fill="var(--fill-0, #626776)"
            height="12"
            id="Rectangle 3"
            width="1.2"
            x="5"
            y="3"
          />
          <path
            d={svgPaths.p3c1edf00}
            fill="var(--fill-0, #626776)"
            id="Subtract"
          />
          <path d={svgPaths.p6dabd00} fill="var(--fill-0, #626776)" id="edit" />
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons45() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start opacity-0 p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <TableEdit2 />
    </div>
  );
}

function TableHeaderCell14() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0 w-[34px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons45 />
    </div>
  );
}

function TableFreezedFooterOptions() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-center justify-start order-1 p-0 relative shrink-0"
      data-name="Table Freezed Footer Options"
    >
      <TableHeaderCell14 />
    </div>
  );
}

function TableFooter() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between order-1 overflow-clip p-0 relative rounded-bl-[4px] rounded-br-[4px] shadow-[0px_-4px_13px_0px_#eeeef8] shrink-0 w-full"
      data-name="Table Footer"
    >
      <TableFreezedFooter />
      <TableScrollableFooter />
      <TableFreezedFooterOptions />
    </div>
  );
}

function CellTable() {
  return (
    <div
      className="basis-0 bg-[#fdfeff] box-border content-stretch flex flex-col-reverse grow items-start justify-start min-h-px min-w-px p-0 relative rounded shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)] shrink-0 w-full"
      data-name="Cell Table"
    >
      <TableHeader />
      <Body />
      <TableFooter />
    </div>
  );
}

export default function Table() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Table"
    >
      <CellTable />
    </div>
  );
}