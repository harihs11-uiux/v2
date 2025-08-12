import svgPaths from "./svg-a9i93fhkcc";

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
      className="absolute bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[34px] items-start justify-center left-0 p-[8px] top-0"
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
      className="absolute bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-start left-[34px] p-[8px] top-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-center text-nowrap w-[55px]">
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
      className="absolute bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-start left-[105px] p-[8px] top-0 w-[203px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[184px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          File Name
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div
      className="absolute bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-start left-[308px] p-[8px] top-0 w-[248px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[234px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Select File Type
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div
      className="absolute bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-center left-[556px] p-[8px] top-0 w-[145px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          Digitize Actions
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell6() {
  return (
    <div
      className="absolute bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-center left-[701px] p-[8px] top-0 w-[145px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          File Actions
        </p>
      </div>
    </div>
  );
}

function TableFreezedHeader() {
  return (
    <div
      className="h-[34px] order-3 overflow-clip relative shrink-0 w-[846px]"
      data-name="Table Freezed Header"
    >
      <TableHeaderCell />
      <TableHeaderCell1 />
      <TableHeaderCell2 />
      <TableHeaderCell3 />
      {[...Array(2).keys()].map((_, i) => (
        <TableHeaderCell4 key={i} />
      ))}
      <TableHeaderCell6 />
    </div>
  );
}

function TableHeaderCell7() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start p-[8px] relative shrink-0 w-[115px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[92px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          File Size
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell8() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start p-[8px] relative shrink-0 w-[186px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[92px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Uploaded By
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell9() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start p-[8px] relative shrink-0 w-[248px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">{`Uploaded Date & Time`}</p>
      </div>
    </div>
  );
}

function TableHeaderCell10() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start p-[8px] relative shrink-0 w-[219px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          Digitization Status
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell11() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start p-[8px] relative shrink-0 w-[219px]"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          Signing Status
        </p>
      </div>
    </div>
  );
}

function TableHeaderCell12() {
  return (
    <div
      className="basis-0 bg-[#ebeef7] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative size-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">{`E-sanchit & mapping Status`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableScrollableHeader() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px order-2 overflow-clip p-0 relative shrink-0"
      data-name="Table Scrollable Header"
    >
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell7 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableHeaderCell11 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableHeaderCell12 />
      </div>
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
        <div className="flex-none h-[34px] rotate-[180deg] w-[5px]">
          <div className="size-full" />
        </div>
      </div>
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
        role="presentation"
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

function NoOfIcons2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <TableEdit />
    </div>
  );
}

function TableHeaderCell13() {
  return (
    <div
      className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0"
      data-name="Table Header Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons2 />
    </div>
  );
}

function TableFreezedHeaderOptions() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start order-1 p-0 relative self-stretch shrink-0"
      data-name="Table Freezed Header Options"
    >
      <TableHeaderCell13 />
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
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
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
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
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
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-center w-[33px]">
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
          <g filter="url(#filter0_i_462_17774)" id="Rectangle 1620">
            <path d={svgPaths.pbdbe280} fill="var(--fill-0, #F0F0F0)" />
          </g>
          <foreignObject height="8.75" width="16.25" x="0.5" y="-1.75">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_462_17774_clip_path)",
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
            fill="var(--fill-0, #B15C5C)"
            fillRule="evenodd"
            id="Line 141 (Stroke)"
          />
          <foreignObject height="8.75" width="14.75" x="0.5" y="-0.25">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_1_462_17774_clip_path)",
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
            fill="var(--fill-0, #B15C5C)"
            fillRule="evenodd"
            id="Line 142 (Stroke)"
          />
          <foreignObject height="8.75" width="11.75" x="0.5" y="1.25">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_2_462_17774_clip_path)",
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
            fill="var(--fill-0, #B15C5C)"
            fillRule="evenodd"
            id="Line 143 (Stroke)"
          />
          <g filter="url(#filter4_i_462_17774)" id="Frame 1">
            <g clipPath="url(#clip3_462_17774)">
              <rect
                fill="url(#paint0_linear_462_17774)"
                height="6"
                rx="1"
                width="12"
                y="8.25"
              />
              <g filter="url(#filter5_d_462_17774)" id="PDF">
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
            id="filter0_i_462_17774"
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
              result="effect1_innerShadow_462_17774"
            />
          </filter>
          <clipPath
            id="bgblur_0_462_17774_clip_path"
            transform="translate(-0.5 1.75)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2e606580}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_1_462_17774_clip_path"
            transform="translate(-0.5 0.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p26cc5f00}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_462_17774_clip_path"
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
            id="filter4_i_462_17774"
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
              result="effect1_innerShadow_462_17774"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.375"
            id="filter5_d_462_17774"
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
              result="effect1_dropShadow_462_17774"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_462_17774"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_462_17774"
            x1="6.07471"
            x2="6.07471"
            y1="7.25"
            y2="12.25"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_462_17774">
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
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[203px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons4 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left w-[162px]">
        <p className="block leading-[18px]">ICB_2192_2024-25_03</p>
      </div>
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
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
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
      <ArrowDropdown1 />
    </div>
  );
}

function TableBodyCell3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-full items-center justify-between px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9497a1] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Multi-typed Document
        </p>
      </div>
      <NoOfIcons5 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Digitize</p>
      </div>
    </div>
  );
}

function Frame41996() {
  return (
    <div className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center px-2 py-1.5 relative size-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow() {
  return (
    <div
      className="h-full relative shrink-0 w-[701px]"
      data-name="Table Freezed Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative w-[701px]">
        <TableBodyCell />
        <TableBodyCell1 />
        <TableBodyCell2 />
        <TableBodyCell3 />
        <Frame41996 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Edit Data</p>
      </div>
    </div>
  );
}

function Frame41997() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0 w-[145px]">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Button2 />
    </div>
  );
}

function TableBodyCell4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[115px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">2.5 MB</p>
      </div>
    </div>
  );
}

function AvatarAlphabet() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar (Alphabet)">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Avatar (Alphabet)">
          <circle
            cx="12"
            cy="12"
            fill="var(--fill-0, #FE7C7C)"
            id="Shape"
            r="12"
          />
          <g id="AK">
            <path
              d={svgPaths.p187c5080}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p30fd8300}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[186px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <AvatarAlphabet />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Ajith Kumar</p>
      </div>
    </div>
  );
}

function TableBodyCell6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          04:44pm 15th May 2025
        </p>
      </div>
    </div>
  );
}

function Indcator() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell7() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Digitized</p>
      </div>
    </div>
  );
}

function Indcator1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell8() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Signed</p>
      </div>
    </div>
  );
}

function Indcator2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell9() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator2 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Fetched</p>
      </div>
    </div>
  );
}

function TableScrollableRow() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Scrollable Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Frame41997 />
        <TableBodyCell4 />
        <TableBodyCell5 />
        <TableBodyCell6 />
        <TableBodyCell7 />
        <TableBodyCell8 />
        <TableBodyCell9 />
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
            id="mask0_462_17814"
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
          <g mask="url(#mask0_462_17814)">
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

function NoOfIcons6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <MoreVert />
    </div>
  );
}

function TableBodyCell10() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons6 />
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
        <TableBodyCell10 />
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div
      className="h-10 order-2 relative shrink-0 w-full"
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

function RowSet() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Row Set"
    >
      <TableRow1 />
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

function TableBodyCell11() {
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

function ArrowDropdown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17783)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p3dd41900}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17783">
            <rect fill="white" height="18" width="18" />
          </clipPath>
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
      <ArrowDropdown2 />
    </div>
  );
}

function TableBodyCell12() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons7 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-center w-[33px]">
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
          <g filter="url(#filter0_i_462_17824)" id="Rectangle 1620">
            <path d={svgPaths.pbdbe280} fill="var(--fill-0, #F0F0F0)" />
          </g>
          <foreignObject height="8.75" width="16.25" x="0.5" y="-1.75">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_1_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_2_462_17824_clip_path)",
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
          <g filter="url(#filter4_i_462_17824)" id="Frame 1">
            <g clipPath="url(#clip3_462_17824)">
              <rect
                fill="url(#paint0_linear_462_17824)"
                height="6"
                rx="1"
                width="12"
                y="8.25"
              />
              <g filter="url(#filter5_d_462_17824)" id="PDF">
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
            id="filter0_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <clipPath
            id="bgblur_0_462_17824_clip_path"
            transform="translate(-0.5 1.75)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2e606580}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_1_462_17824_clip_path"
            transform="translate(-0.5 0.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p26cc5f00}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_462_17824_clip_path"
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
            id="filter4_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.375"
            id="filter5_d_462_17824"
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
              result="effect1_dropShadow_462_17824"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_462_17824"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_462_17824"
            x1="6.07471"
            x2="6.07471"
            y1="7.25"
            y2="12.25"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_462_17824">
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

function NoOfIcons8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <FilesIcon1 />
    </div>
  );
}

function TableBodyCell13() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[203px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons8 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left w-[162px]">
        <p className="block leading-[18px]">ICB_2193_2024-25_03</p>
      </div>
    </div>
  );
}

function ArrowDropdown3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
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
      <ArrowDropdown3 />
    </div>
  );
}

function TableBodyCell14() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-full items-center justify-between px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9497a1] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Multi-typed Document
        </p>
      </div>
      <NoOfIcons9 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Digitize</p>
      </div>
    </div>
  );
}

function Frame41999() {
  return (
    <div className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center px-2 py-1.5 relative size-full">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow1() {
  return (
    <div
      className="h-full relative shrink-0 w-[701px]"
      data-name="Table Freezed Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative w-[701px]">
        <TableBodyCell11 />
        <TableBodyCell12 />
        <TableBodyCell13 />
        <TableBodyCell14 />
        <Frame41999 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Edit Data</p>
      </div>
    </div>
  );
}

function Frame42000() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0 w-[145px]">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Button4 />
    </div>
  );
}

function TableBodyCell15() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-end p-[8px] relative shrink-0 w-[115px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          2.5 MB
        </p>
      </div>
    </div>
  );
}

function AvatarAlphabet1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar (Alphabet)">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Avatar (Alphabet)">
          <circle
            cx="12"
            cy="12"
            fill="var(--fill-0, #FE7C7C)"
            id="Shape"
            r="12"
          />
          <g id="AK">
            <path
              d={svgPaths.p187c5080}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p30fd8300}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell16() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[186px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <AvatarAlphabet1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Ajith Kumar</p>
      </div>
    </div>
  );
}

function TableBodyCell17() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          04:44pm 15th May 2025
        </p>
      </div>
    </div>
  );
}

function Indcator3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell18() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator3 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Digitized</p>
      </div>
    </div>
  );
}

function Indcator4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell19() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator4 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Signed</p>
      </div>
    </div>
  );
}

function Indcator5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell20() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator5 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Fetched</p>
      </div>
    </div>
  );
}

function TableScrollableRow1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Scrollable Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-end justify-start p-0 relative size-full">
        <Frame42000 />
        <TableBodyCell15 />
        <TableBodyCell16 />
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-10 rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
        <TableBodyCell17 />
        <TableBodyCell18 />
        <TableBodyCell19 />
        <TableBodyCell20 />
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
            id="mask0_462_17814"
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
          <g mask="url(#mask0_462_17814)">
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

function NoOfIcons10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <MoreVert1 />
    </div>
  );
}

function TableBodyCell21() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons10 />
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
        <TableBodyCell21 />
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Table Row 2"
    >
      <TableFreezedRow1 />
      <TableScrollableRow1 />
      <TableFreezedRowOptions1 />
    </div>
  );
}

function Checkbox3() {
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

function TableBodyCell22() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Checkbox3 />
    </div>
  );
}

function ArrowDropdown4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown4 />
    </div>
  );
}

function TableBodyCell23() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons11 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-center w-[33px]">
        <p className="block leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Group42072() {
  return (
    <div className="absolute inset-[4.167%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Group 42070">
          <g filter="url(#filter0_i_462_17824)" id="Rectangle 1620">
            <path d={svgPaths.pbdbe280} fill="var(--fill-0, #F0F0F0)" />
          </g>
          <foreignObject height="8.75" width="16.25" x="0.5" y="-1.75">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_1_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_2_462_17824_clip_path)",
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
          <g filter="url(#filter4_i_462_17824)" id="Frame 1">
            <g clipPath="url(#clip3_462_17824)">
              <rect
                fill="url(#paint0_linear_462_17824)"
                height="6"
                rx="1"
                width="12"
                y="8.25"
              />
              <g filter="url(#filter5_d_462_17824)" id="PDF">
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
            id="filter0_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <clipPath
            id="bgblur_0_462_17824_clip_path"
            transform="translate(-0.5 1.75)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2e606580}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_1_462_17824_clip_path"
            transform="translate(-0.5 0.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p26cc5f00}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_462_17824_clip_path"
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
            id="filter4_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.375"
            id="filter5_d_462_17824"
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
              result="effect1_dropShadow_462_17824"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_462_17824"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_462_17824"
            x1="6.07471"
            x2="6.07471"
            y1="7.25"
            y2="12.25"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_462_17824">
            <rect fill="white" height="6" rx="1" width="12" y="8.25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FilesIcon2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="Files icon"
    >
      <Group42072 />
    </div>
  );
}

function NoOfIcons12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <FilesIcon2 />
    </div>
  );
}

function TableBodyCell24() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[203px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons12 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left w-[162px]">
        <p className="block leading-[18px]">ICB_2193_2024-25_03</p>
      </div>
    </div>
  );
}

function ArrowDropdown5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown5 />
    </div>
  );
}

function TableBodyCell25() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-full items-center justify-between px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9497a1] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Multi-typed Document
        </p>
      </div>
      <NoOfIcons13 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Digitize</p>
      </div>
    </div>
  );
}

function Frame42001() {
  return (
    <div className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center px-2 py-1.5 relative size-full">
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow2() {
  return (
    <div
      className="h-full relative shrink-0 w-[701px]"
      data-name="Table Freezed Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative w-[701px]">
        <TableBodyCell22 />
        <TableBodyCell23 />
        <TableBodyCell24 />
        <TableBodyCell25 />
        <Frame42001 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Edit Data</p>
      </div>
    </div>
  );
}

function Frame42002() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0 w-[145px]">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Button6 />
    </div>
  );
}

function TableBodyCell26() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-end p-[8px] relative shrink-0 w-[115px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          2.5 MB
        </p>
      </div>
    </div>
  );
}

function AvatarAlphabet2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar (Alphabet)">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Avatar (Alphabet)">
          <circle
            cx="12"
            cy="12"
            fill="var(--fill-0, #FE7C7C)"
            id="Shape"
            r="12"
          />
          <g id="AK">
            <path
              d={svgPaths.p187c5080}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p30fd8300}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell27() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[186px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <AvatarAlphabet2 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Ajith Kumar</p>
      </div>
    </div>
  );
}

function TableBodyCell28() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          04:44pm 15th May 2025
        </p>
      </div>
    </div>
  );
}

function Indcator6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell29() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator6 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Digitized</p>
      </div>
    </div>
  );
}

function Indcator7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell30() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator7 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Signed</p>
      </div>
    </div>
  );
}

function Indcator8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell31() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator8 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Fetched</p>
      </div>
    </div>
  );
}

function TableScrollableRow2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Scrollable Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-end justify-start p-0 relative size-full">
        <Frame42002 />
        <TableBodyCell26 />
        <TableBodyCell27 />
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-10 rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
        <TableBodyCell28 />
        <TableBodyCell29 />
        <TableBodyCell30 />
        <TableBodyCell31 />
      </div>
    </div>
  );
}

function MoreVert2() {
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
            id="mask0_462_17814"
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
          <g mask="url(#mask0_462_17814)">
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

function NoOfIcons14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <MoreVert2 />
    </div>
  );
}

function TableBodyCell32() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons14 />
    </div>
  );
}

function TableFreezedRowOptions2() {
  return (
    <div
      className="h-full relative shrink-0"
      data-name="Table Freezed Row Options"
    >
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-start p-0 relative">
        <TableBodyCell32 />
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Table Row 3"
    >
      <TableFreezedRow2 />
      <TableScrollableRow2 />
      <TableFreezedRowOptions2 />
    </div>
  );
}

function Checkbox4() {
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

function TableBodyCell33() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Checkbox4 />
    </div>
  );
}

function ArrowDropdown6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown6 />
    </div>
  );
}

function TableBodyCell34() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons15 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-center w-[33px]">
        <p className="block leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Group42073() {
  return (
    <div className="absolute inset-[4.167%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Group 42070">
          <g filter="url(#filter0_i_462_17824)" id="Rectangle 1620">
            <path d={svgPaths.pbdbe280} fill="var(--fill-0, #F0F0F0)" />
          </g>
          <foreignObject height="8.75" width="16.25" x="0.5" y="-1.75">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_1_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_2_462_17824_clip_path)",
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
          <g filter="url(#filter4_i_462_17824)" id="Frame 1">
            <g clipPath="url(#clip3_462_17824)">
              <rect
                fill="url(#paint0_linear_462_17824)"
                height="6"
                rx="1"
                width="12"
                y="8.25"
              />
              <g filter="url(#filter5_d_462_17824)" id="PDF">
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
            id="filter0_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <clipPath
            id="bgblur_0_462_17824_clip_path"
            transform="translate(-0.5 1.75)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2e606580}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_1_462_17824_clip_path"
            transform="translate(-0.5 0.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p26cc5f00}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_462_17824_clip_path"
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
            id="filter4_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.375"
            id="filter5_d_462_17824"
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
              result="effect1_dropShadow_462_17824"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_462_17824"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_462_17824"
            x1="6.07471"
            x2="6.07471"
            y1="7.25"
            y2="12.25"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_462_17824">
            <rect fill="white" height="6" rx="1" width="12" y="8.25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FilesIcon3() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="Files icon"
    >
      <Group42073 />
    </div>
  );
}

function NoOfIcons16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <FilesIcon3 />
    </div>
  );
}

function TableBodyCell35() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[203px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons16 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left w-[162px]">
        <p className="block leading-[18px]">ICB_2193_2024-25_03</p>
      </div>
    </div>
  );
}

function ArrowDropdown7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown7 />
    </div>
  );
}

function TableBodyCell36() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-full items-center justify-between px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9497a1] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Multi-typed Document
        </p>
      </div>
      <NoOfIcons17 />
    </div>
  );
}

function Button7() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Digitize</p>
      </div>
    </div>
  );
}

function Frame42003() {
  return (
    <div className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center px-2 py-1.5 relative size-full">
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow3() {
  return (
    <div
      className="h-full relative shrink-0 w-[701px]"
      data-name="Table Freezed Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative w-[701px]">
        <TableBodyCell33 />
        <TableBodyCell34 />
        <TableBodyCell35 />
        <TableBodyCell36 />
        <Frame42003 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Edit Data</p>
      </div>
    </div>
  );
}

function Frame41998() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0 w-[145px]">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Button8 />
    </div>
  );
}

function TableBodyCell37() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-end p-[8px] relative shrink-0 w-[115px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          2.5 MB
        </p>
      </div>
    </div>
  );
}

function AvatarAlphabet3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar (Alphabet)">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Avatar (Alphabet)">
          <circle
            cx="12"
            cy="12"
            fill="var(--fill-0, #FE7C7C)"
            id="Shape"
            r="12"
          />
          <g id="AK">
            <path
              d={svgPaths.p187c5080}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p30fd8300}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell38() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[186px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <AvatarAlphabet3 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Ajith Kumar</p>
      </div>
    </div>
  );
}

function TableBodyCell39() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          04:44pm 15th May 2025
        </p>
      </div>
    </div>
  );
}

function Indcator9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell40() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator9 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Digitized</p>
      </div>
    </div>
  );
}

function Indcator10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell41() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator10 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Signed</p>
      </div>
    </div>
  );
}

function Indcator11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell42() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator11 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Fetched</p>
      </div>
    </div>
  );
}

function TableScrollableRow3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Scrollable Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-end justify-start p-0 relative size-full">
        <Frame41998 />
        <TableBodyCell37 />
        <TableBodyCell38 />
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-10 rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
        <TableBodyCell39 />
        <TableBodyCell40 />
        <TableBodyCell41 />
        <TableBodyCell42 />
      </div>
    </div>
  );
}

function MoreVert3() {
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
            id="mask0_462_17814"
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
          <g mask="url(#mask0_462_17814)">
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

function NoOfIcons18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <MoreVert3 />
    </div>
  );
}

function TableBodyCell43() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons18 />
    </div>
  );
}

function TableFreezedRowOptions3() {
  return (
    <div
      className="h-full relative shrink-0"
      data-name="Table Freezed Row Options"
    >
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-start p-0 relative">
        <TableBodyCell43 />
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Table Row 4"
    >
      <TableFreezedRow3 />
      <TableScrollableRow3 />
      <TableFreezedRowOptions3 />
    </div>
  );
}

function Checkbox5() {
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

function TableBodyCell44() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Checkbox5 />
    </div>
  );
}

function ArrowDropdown8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown8 />
    </div>
  );
}

function TableBodyCell45() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons19 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-center w-[33px]">
        <p className="block leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Group42074() {
  return (
    <div className="absolute inset-[4.167%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="Group 42070">
          <g filter="url(#filter0_i_462_17824)" id="Rectangle 1620">
            <path d={svgPaths.pbdbe280} fill="var(--fill-0, #F0F0F0)" />
          </g>
          <foreignObject height="8.75" width="16.25" x="0.5" y="-1.75">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_1_462_17824_clip_path)",
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
                clipPath: "url(#bgblur_2_462_17824_clip_path)",
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
          <g filter="url(#filter4_i_462_17824)" id="Frame 1">
            <g clipPath="url(#clip3_462_17824)">
              <rect
                fill="url(#paint0_linear_462_17824)"
                height="6"
                rx="1"
                width="12"
                y="8.25"
              />
              <g filter="url(#filter5_d_462_17824)" id="PDF">
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
            id="filter0_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <clipPath
            id="bgblur_0_462_17824_clip_path"
            transform="translate(-0.5 1.75)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2e606580}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_1_462_17824_clip_path"
            transform="translate(-0.5 0.25)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p26cc5f00}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_462_17824_clip_path"
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
            id="filter4_i_462_17824"
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
              result="effect1_innerShadow_462_17824"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="7.375"
            id="filter5_d_462_17824"
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
              result="effect1_dropShadow_462_17824"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_462_17824"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_462_17824"
            x1="6.07471"
            x2="6.07471"
            y1="7.25"
            y2="12.25"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_462_17824">
            <rect fill="white" height="6" rx="1" width="12" y="8.25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FilesIcon4() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="Files icon"
    >
      <Group42074 />
    </div>
  );
}

function NoOfIcons20() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <FilesIcon4 />
    </div>
  );
}

function TableBodyCell46() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[203px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons20 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left w-[162px]">
        <p className="block leading-[18px]">ICB_2193_2024-25_03</p>
      </div>
    </div>
  );
}

function ArrowDropdown9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_462_17800)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_17800">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NoOfIcons21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <ArrowDropdown9 />
    </div>
  );
}

function TableBodyCell47() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-full items-center justify-between px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9497a1] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Multi-typed Document
        </p>
      </div>
      <NoOfIcons21 />
    </div>
  );
}

function Button9() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Digitize</p>
      </div>
    </div>
  );
}

function Frame42004() {
  return (
    <div className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center px-2 py-1.5 relative size-full">
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function TableFreezedRow4() {
  return (
    <div
      className="h-full relative shrink-0 w-[701px]"
      data-name="Table Freezed Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative w-[701px]">
        <TableBodyCell44 />
        <TableBodyCell45 />
        <TableBodyCell46 />
        <TableBodyCell47 />
        <Frame42004 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Edit Data</p>
      </div>
    </div>
  );
}

function Frame42005() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-1 h-full items-center justify-center px-2 py-1.5 relative shrink-0 w-[145px]">
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Button10 />
    </div>
  );
}

function TableBodyCell48() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-end p-[8px] relative shrink-0 w-[115px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          2.5 MB
        </p>
      </div>
    </div>
  );
}

function AvatarAlphabet4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar (Alphabet)">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Avatar (Alphabet)">
          <circle
            cx="12"
            cy="12"
            fill="var(--fill-0, #FE7C7C)"
            id="Shape"
            r="12"
          />
          <g id="AK">
            <path
              d={svgPaths.p187c5080}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p30fd8300}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell49() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[186px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <AvatarAlphabet4 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Ajith Kumar</p>
      </div>
    </div>
  );
}

function TableBodyCell50() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          04:44pm 15th May 2025
        </p>
      </div>
    </div>
  );
}

function Indcator12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell51() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator12 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Digitized</p>
      </div>
    </div>
  );
}

function Indcator13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell52() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[219px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator13 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Signed</p>
      </div>
    </div>
  );
}

function Indcator14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="indcator">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="3.375"
          />
        </g>
      </svg>
    </div>
  );
}

function TableBodyCell53() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-2 py-1.5 relative shrink-0 w-[248px]"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Indcator14 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Not Fetched</p>
      </div>
    </div>
  );
}

function TableScrollableRow4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Table Scrollable Row"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-end justify-start p-0 relative size-full">
        <Frame42005 />
        <TableBodyCell48 />
        <TableBodyCell49 />
        <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[5px]">
          <div className="flex-none h-10 rotate-[180deg] scale-y-[-100%] w-[5px]">
            <div className="size-full" />
          </div>
        </div>
        <TableBodyCell50 />
        <TableBodyCell51 />
        <TableBodyCell52 />
        <TableBodyCell53 />
      </div>
    </div>
  );
}

function MoreVert4() {
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
            id="mask0_462_17814"
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
          <g mask="url(#mask0_462_17814)">
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

function NoOfIcons22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <MoreVert4 />
    </div>
  );
}

function TableBodyCell54() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start px-2 py-1.5 relative shrink-0"
      data-name="Table Body Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <NoOfIcons22 />
    </div>
  );
}

function TableFreezedRowOptions4() {
  return (
    <div
      className="h-full relative shrink-0"
      data-name="Table Freezed Row Options"
    >
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-full items-center justify-start p-0 relative">
        <TableBodyCell54 />
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Table Row 5"
    >
      <TableFreezedRow4 />
      <TableScrollableRow4 />
      <TableFreezedRowOptions4 />
    </div>
  );
}

function Body() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start order-1 overflow-clip p-0 relative shrink-0 w-full"
      data-name="Body"
    >
      <RowSet />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

export default function CellTable() {
  return (
    <div
      className="bg-[#fdfeff] box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative rounded size-full"
      data-name="Cell Table"
    >
      <TableHeader />
      <Body />
    </div>
  );
}