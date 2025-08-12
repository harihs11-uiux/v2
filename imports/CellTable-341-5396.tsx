import svgPaths from "./svg-3rfstsoxkg";

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
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
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-start justify-center px-2 py-1.5 relative self-stretch shrink-0"
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
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative self-stretch shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[55px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          S.No
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div
      className="basis-0 bg-[#ebeef7] grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative size-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[184px]">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
              File Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableFreezedHeader() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px order-3 overflow-clip p-0 relative shrink-0"
      data-name="Table Freezed Header"
    >
      <TableHeaderCell />
      <TableHeaderCell1 />
      <TableHeaderCell2 />
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div
      className="basis-0 bg-[#ebeef7] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative size-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
              Uploaded Time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableScrollableHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start order-2 overflow-clip p-0 relative shrink-0 w-[280px]"
      data-name="Table Scrollable Header"
    >
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHeaderCell3 />
      </div>
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[30px] rotate-[180deg] w-[5px]">
          <div className="size-full" />
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[30px] items-center justify-center px-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableFreezedHeaderOptions() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start order-1 p-0 relative shrink-0"
      data-name="Table Freezed Header Options"
    >
      <TableHeaderCell4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse items-start justify-start order-2 overflow-clip p-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
      data-name="Table Header"
    >
      <TableFreezedHeader />
      <TableScrollableHeader />
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
        role="presentation"
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

function ArrowDropdown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_220_30927)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_220_30927">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown />
    </div>
  );
}

function TableBodyCell1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons3 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left w-[33px]">
        <p className="block leading-[18px]">1</p>
      </div>
    </div>
  );
}

function Group42070() {
  return (
    <div className="absolute inset-[4.167%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Group 42070">
          <g filter="url(#filter0_i_220_30931)" id="Rectangle 1620">
            <path d={svgPaths.pbdbe280} fill="var(--fill-0, #F0F0F0)" />
          </g>
          <foreignObject height="8.75" width="16.25" x="0.5" y="-1.75">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_220_30931_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p2e606580}
            data-figma-bg-blur-radius="4"
            fill="var(--fill-0, #CECACA)"
            fillRule="evenodd"
            id="Line 141 (Stroke)"
          />
          <foreignObject height="8.75" width="14.75" x="0.5" y="-0.25">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_1_220_30931_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p26cc5f00}
            data-figma-bg-blur-radius="4"
            fill="var(--fill-0, #CECACA)"
            fillRule="evenodd"
            id="Line 142 (Stroke)"
          />
          <foreignObject height="8.75" width="11.75" x="0.5" y="1.25">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_2_220_30931_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p2ca1d900}
            data-figma-bg-blur-radius="4"
            fill="var(--fill-0, #CECACA)"
            fillRule="evenodd"
            id="Line 143 (Stroke)"
          />
          <g filter="url(#filter4_i_220_30931)" id="Frame 1">
            <g clipPath="url(#clip3_220_30931)">
              <rect
                fill="url(#paint0_linear_220_30931)"
                height="6"
                rx="1"
                width="12"
                y="8.25"
              />
              <g filter="url(#filter5_d_220_30931)" id="PDF">
                <path d={svgPaths.p17f2b600} fill="var(--fill-0, white)" />
                <path d={svgPaths.p373bc900} fill="var(--fill-0, white)" />
                <path d={svgPaths.pf0c1900} fill="var(--fill-0, white)" />
              </g>
              <g id="PDF (Stroke)"></g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.5"
            id="filter0_i_220_30931"
            width="13.5"
            x="3"
            y="0"
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
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.733771 0 0 0 0 0.733771 0 0 0 0 0.733771 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_220_30931"
            />
          </filter>
          <clipPath
            id="bgblur_0_220_30931_clip_path"
            transform="translate(-0.5 1.75)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2e606580}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_1_220_30931_clip_path"
            transform="translate(-0.5 0.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p26cc5f00}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_220_30931_clip_path"
            transform="translate(-0.5 -1.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2ca1d900}
              fillRule="evenodd"
            />
          </clipPath>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="14"
            id="filter4_i_220_30931"
            width="20"
            x="-4"
            y="4.25"
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
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.775929 0 0 0 0 0.186825 0 0 0 0 0.12177 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_220_30931"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.375"
            id="filter5_d_220_30931"
            width="13"
            x="-0.5"
            y="7.6"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.124814 0 0 0 0 0.0481408 0 0 0 0 0.0397764 0 0 0 0.26 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_220_30931"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_220_30931"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_220_30931"
            x1="6.07471"
            x2="6.07471"
            y1="7.25"
            y2="12.25"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_220_30931">
            <rect fill="white" height="6" rx="1" width="12" y="8.25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FilesIcon() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="Files icon"
    >
      <Group42070 />
    </div>
  );
}

function NoOfIcons4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <FilesIcon />
    </div>
  );
}

function TableBodyCell2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative size-full">
          <NoOfIcons4 />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left w-[162px]">
            <p className="block leading-[18px]">ICB_2192_2024-25_03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Freezed Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-end p-0 relative size-full">
        <TableBodyCell />
        <TableBodyCell1 />
        <TableBodyCell2 />
      </div>
    </div>
  );
}

function TableBodyCell3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">
              04:44pm 15th May 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableScrollableRow() {
  return (
    <div
      className="bg-[#ffffff] h-full relative shrink-0 w-[280px]"
      data-name="Table Scrollable Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative w-[280px]">
        <TableBodyCell3 />
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-10 rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="more_vert">
          <mask
            height="18"
            id="mask0_218_140070"
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
          <g mask="url(#mask0_218_140070)">
            <path
              d={svgPaths.p3a06d000}
              fill="var(--fill-0, #626776)"
              id="more_vert_2"
            />
          </g>
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
      <MoreVert />
    </div>
  );
}

function TableBodyCell4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons5 />
    </div>
  );
}

function TableFreezedRowOptions() {
  return (
    <div
      className="h-full relative shrink-0"
      data-name="Table Freezed Row Options"
    >
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-start p-0 relative">
        <TableBodyCell4 />
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div
      className="h-10 order-3 relative shrink-0 w-full"
      data-name="Table Row 1"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-10 items-start justify-start p-0 relative w-full">
        <TableFreezedRow />
        <TableScrollableRow />
        <TableFreezedRowOptions />
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
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

function TableBodyCell5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Checkbox2 />
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_220_30927)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_220_30927">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown1 />
    </div>
  );
}

function TableBodyCell6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons6 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left w-[33px]">
        <p className="block leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Group42071() {
  return (
    <div className="absolute inset-[4.167%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Group 42070">
          <g filter="url(#filter0_i_220_30931)" id="Rectangle 1620">
            <path d={svgPaths.pbdbe280} fill="var(--fill-0, #F0F0F0)" />
          </g>
          <foreignObject height="8.75" width="16.25" x="0.5" y="-1.75">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_220_30931_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p2e606580}
            data-figma-bg-blur-radius="4"
            fill="var(--fill-0, #CECACA)"
            fillRule="evenodd"
            id="Line 141 (Stroke)"
          />
          <foreignObject height="8.75" width="14.75" x="0.5" y="-0.25">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_1_220_30931_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p26cc5f00}
            data-figma-bg-blur-radius="4"
            fill="var(--fill-0, #CECACA)"
            fillRule="evenodd"
            id="Line 142 (Stroke)"
          />
          <foreignObject height="8.75" width="11.75" x="0.5" y="1.25">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_2_220_30931_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p2ca1d900}
            data-figma-bg-blur-radius="4"
            fill="var(--fill-0, #CECACA)"
            fillRule="evenodd"
            id="Line 143 (Stroke)"
          />
          <g filter="url(#filter4_i_220_30931)" id="Frame 1">
            <g clipPath="url(#clip3_220_30931)">
              <rect
                fill="url(#paint0_linear_220_30931)"
                height="6"
                rx="1"
                width="12"
                y="8.25"
              />
              <g filter="url(#filter5_d_220_30931)" id="PDF">
                <path d={svgPaths.p17f2b600} fill="var(--fill-0, white)" />
                <path d={svgPaths.p373bc900} fill="var(--fill-0, white)" />
                <path d={svgPaths.pf0c1900} fill="var(--fill-0, white)" />
              </g>
              <g id="PDF (Stroke)"></g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.5"
            id="filter0_i_220_30931"
            width="13.5"
            x="3"
            y="0"
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
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.733771 0 0 0 0 0.733771 0 0 0 0 0.733771 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_220_30931"
            />
          </filter>
          <clipPath
            id="bgblur_0_220_30931_clip_path"
            transform="translate(-0.5 1.75)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2e606580}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_1_220_30931_clip_path"
            transform="translate(-0.5 0.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p26cc5f00}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_220_30931_clip_path"
            transform="translate(-0.5 -1.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2ca1d900}
              fillRule="evenodd"
            />
          </clipPath>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="14"
            id="filter4_i_220_30931"
            width="20"
            x="-4"
            y="4.25"
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
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.775929 0 0 0 0 0.186825 0 0 0 0 0.12177 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_220_30931"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.375"
            id="filter5_d_220_30931"
            width="13"
            x="-0.5"
            y="7.6"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.124814 0 0 0 0 0.0481408 0 0 0 0 0.0397764 0 0 0 0.26 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_220_30931"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_220_30931"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_220_30931"
            x1="6.07471"
            x2="6.07471"
            y1="7.25"
            y2="12.25"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_220_30931">
            <rect fill="white" height="6" rx="1" width="12" y="8.25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FilesIcon1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="Files icon"
    >
      <Group42071 />
    </div>
  );
}

function NoOfIcons7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <FilesIcon1 />
    </div>
  );
}

function TableBodyCell7() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative size-full">
          <NoOfIcons7 />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left w-[162px]">
            <p className="block leading-[18px]">ICB_2193_2024-25_03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow1() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Freezed Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-end p-0 relative size-full">
        <TableBodyCell5 />
        <TableBodyCell6 />
        <TableBodyCell7 />
      </div>
    </div>
  );
}

function TableBodyCell8() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">
              04:44pm 15th May 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableScrollableRow1() {
  return (
    <div
      className="bg-[#ffffff] h-full relative shrink-0 w-[280px]"
      data-name="Table Scrollable Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative w-[280px]">
        <TableBodyCell8 />
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-10 rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="more_vert">
          <mask
            height="18"
            id="mask0_218_140070"
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
          <g mask="url(#mask0_218_140070)">
            <path
              d={svgPaths.p3a06d000}
              fill="var(--fill-0, #626776)"
              id="more_vert_2"
            />
          </g>
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
      <MoreVert1 />
    </div>
  );
}

function TableBodyCell9() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons8 />
    </div>
  );
}

function TableFreezedRowOptions1() {
  return (
    <div
      className="h-full relative shrink-0"
      data-name="Table Freezed Row Options"
    >
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-start p-0 relative">
        <TableBodyCell9 />
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div
      className="h-10 order-2 relative shrink-0 w-full"
      data-name="Table Row 2"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-10 items-start justify-start p-0 relative w-full">
        <TableFreezedRow1 />
        <TableScrollableRow1 />
        <TableFreezedRowOptions1 />
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
    </div>
  );
}

function Body() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-1 overflow-clip p-0 relative shrink-0 w-full"
      data-name="Body"
    >
      <RowSet />
    </div>
  );
}

export default function CellTable() {
  return (
    <div
      className="bg-[#fdfeff] relative rounded size-full"
      data-name="Cell Table"
    >
      <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative size-full">
        <TableHeader />
        <Body />
      </div>
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}