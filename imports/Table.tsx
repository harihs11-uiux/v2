import svgPaths from "./svg-4o9lhjmpxm";

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
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 pr-2 py-1.5 relative self-stretch shrink-0"
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
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 pr-2 py-1.5 relative self-stretch shrink-0 w-[71px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Sr. No.
        </p>
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

function Filters() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList />
    </div>
  );
}

function NoOfIcons2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Filters />
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 pr-2 py-1.5 relative self-stretch shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[162px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Number
        </p>
      </div>
      <NoOfIcons2 />
    </div>
  );
}

function FilterList1() {
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

function Filters1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList1 />
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Filters1 />
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-start justify-start pl-0 pr-2 py-1.5 relative self-stretch shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[162px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">{`Date & Time`}</p>
      </div>
      <NoOfIcons3 />
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 pr-2 py-1.5 relative self-stretch shrink-0 w-full"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Job Details</p>
      </div>
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
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start pl-0 pr-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[262px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
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
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start pl-0 pr-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start order-3 overflow-clip p-[0px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 sticky top-0 w-full"
      data-name="Table Header"
    >
      <TableHeaderCell />
      <TableHeaderCell1 />
      <TableHeaderCell3 />
      <TableHeaderCell4 />
      <TableHeaderCell2 />
      <TableHeaderCell5 />
      <TableHeaderCell6 />
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
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
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
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0 w-[71px]"
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

function Mot() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="MOT">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="MOT">
          <g id="Union"></g>
          <g id="icon">
            <foreignObject
              height="11.7096"
              width="14.5176"
              x="1.68587"
              y="8.93806"
            >
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  clipPath: "url(#bgblur_0_2_30085_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <g
              data-figma-bg-blur-radius="4"
              filter="url(#filter0_i_2_30085)"
              id="Union_2"
            >
              <path d={svgPaths.p1baffd00} fill="url(#paint0_linear_2_30085)" />
            </g>
            <foreignObject
              height="13.6325"
              width="14.9366"
              x="5.72989"
              y="1.5486"
            >
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  clipPath: "url(#bgblur_1_2_30085_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <g
              data-figma-bg-blur-radius="4"
              filter="url(#filter1_i_2_30085)"
              id="Vector"
            >
              <path d={svgPaths.p2843ef00} fill="url(#paint1_linear_2_30085)" />
            </g>
            <foreignObject
              height="13.6117"
              width="14.9174"
              x="-2.66895"
              y="1.54477"
            >
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  clipPath: "url(#bgblur_2_2_30085_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <g
              data-figma-bg-blur-radius="4"
              filter="url(#filter2_i_2_30085)"
              id="Vector_2"
            >
              <path d={svgPaths.pa5f5900} fill="url(#paint2_linear_2_30085)" />
            </g>
            <foreignObject
              height="23.7627"
              width="11.0498"
              x="3.45626"
              y="-2.8742"
            >
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  clipPath: "url(#bgblur_3_2_30085_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              d={svgPaths.p10c0ec00}
              data-figma-bg-blur-radius="4"
              fill="var(--fill-0, #977BE8)"
              fillOpacity="0.79"
              id="Union_3"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="11.7096"
            id="filter0_i_2_30085"
            width="14.5176"
            x="1.68587"
            y="8.93806"
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
            <feGaussianBlur stdDeviation="1.15" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.300454 0 0 0 0 0.187681 0 0 0 0 0.614104 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_2_30085"
            />
          </filter>
          <clipPath
            id="bgblur_0_2_30085_clip_path"
            transform="translate(-1.68587 -8.93806)"
          >
            <path d={svgPaths.p1baffd00} />
          </clipPath>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="13.6325"
            id="filter1_i_2_30085"
            width="14.9366"
            x="5.72989"
            y="1.5486"
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
            <feGaussianBlur stdDeviation="1.15" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.300454 0 0 0 0 0.187681 0 0 0 0 0.614104 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_2_30085"
            />
          </filter>
          <clipPath
            id="bgblur_1_2_30085_clip_path"
            transform="translate(-5.72989 -1.5486)"
          >
            <path d={svgPaths.p2843ef00} />
          </clipPath>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="13.6117"
            id="filter2_i_2_30085"
            width="14.9174"
            x="-2.66895"
            y="1.54477"
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
            <feGaussianBlur stdDeviation="1.15" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.300454 0 0 0 0 0.187681 0 0 0 0 0.614104 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_2_30085"
            />
          </filter>
          <clipPath
            id="bgblur_2_2_30085_clip_path"
            transform="translate(2.66895 -1.54477)"
          >
            <path d={svgPaths.pa5f5900} />
          </clipPath>
          <clipPath
            id="bgblur_3_2_30085_clip_path"
            transform="translate(-3.45626 2.8742)"
          >
            <path d={svgPaths.p10c0ec00} />
          </clipPath>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_30085"
            x1="8.94475"
            x2="8.94475"
            y1="20.6477"
            y2="8.93806"
          >
            <stop stopColor="#3F2996" />
            <stop offset="1" stopColor="#7E5FE6" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2_30085"
            x1="13.1982"
            x2="13.1982"
            y1="1.5486"
            y2="15.1811"
          >
            <stop stopColor="#3F2996" />
            <stop offset="1" stopColor="#7E5FE6" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_2_30085"
            x1="4.79058"
            x2="4.79058"
            y1="1.54477"
            y2="15.1565"
          >
            <stop stopColor="#3F2996" />
            <stop offset="1" stopColor="#7E5FE6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Mot />
    </div>
  );
}

function TableBodyCell2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons7 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[162px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          IMP-2023-111
        </p>
      </div>
    </div>
  );
}

function TableBodyCell3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[162px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Dec 23, 2023 10:05 AM
        </p>
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
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-full"
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

function TableRow() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start order-2 overflow-clip p-0 relative shrink-0 w-full"
      data-name="Table Row"
    >
      <TableBodyCell />
      <TableBodyCell1 />
      <TableBodyCell2 />
      <TableBodyCell3 />
      <TableBodyCell4 />
      <TableBodyCell5 />
      <TableBodyCell6 />
    </div>
  );
}

function TableBody() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start order-2 p-0 relative shrink-0 w-full"
      data-name="Table Body"
    >
      <TableRow />
    </div>
  );
}

export default function Table() {
  return (
    <div className="bg-[#cad2e5] relative size-full p-3">
      <div
        className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded shadow-[0px_0px_0px_1px_#e5e5e5] w-full h-full"
        data-name="Table"
      >
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}