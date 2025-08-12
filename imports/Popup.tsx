import svgPaths from "./svg-auqjrqj069";

function Cancel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative rounded shrink-0"
      data-name="Cancel"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function AcceptChanges() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative rounded shrink-0"
      data-name="Accept Changes"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">{`Save  Changes`}</p>
      </div>
    </div>
  );
}

function ActionButtonGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Button Group"
    >
      <Cancel />
      <AcceptChanges />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bg-[#242c40] bottom-0 box-border content-stretch flex flex-row items-center justify-end left-0 px-6 py-2 right-0"
      data-name="Footer"
    >
      <ActionButtonGroup />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="close">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g>
          <mask
            height="18"
            id="mask0_235_5369"
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
          <g mask="url(#mask0_235_5369)">
            <path
              d={svgPaths.p4280c0}
              fill="var(--fill-0, white)"
              id="close_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TitleBar() {
  return (
    <div
      className="absolute bg-[#1f2432] box-border content-stretch flex flex-row items-start justify-between left-0 p-[16px] right-0 top-0"
      data-name="Title Bar"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative self-stretch shrink-0 text-[#ffffff] text-[14px] text-left w-[156px]">
        <p className="block leading-[18px]">Customize Table View</p>
      </div>
      <Close />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption1() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 1"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox1 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption2() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 2"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox2 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p6acadc0}
            fill="var(--fill-0, #3874FF)"
            id="check_box"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption3() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 3"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox3 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption4() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 4"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox4 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption5() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 5"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox5 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption6() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 6"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox6 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption7() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 7"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox7 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption8() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 8"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox8 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption9() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 9"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox9 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption10() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 10"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox10 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption11() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 11"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox11 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption12() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 12"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox12 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption13() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 13"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox13 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #CDCFD3)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function Suboption14() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Suboption 14"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-2.5 pr-2 py-2 relative w-full">
          <Checkbox14 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
            <p className="block leading-[16px]">Column Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldList() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[424px] items-start justify-start left-4 overflow-clip p-0 right-4 rounded shadow-[0px_0px_13.2px_0px_#d8dce9] top-[90px]"
      data-name="Field List"
    >
      <Suboption1 />
      <Suboption2 />
      <Suboption3 />
      <Suboption4 />
      <Suboption5 />
      <Suboption6 />
      <Suboption7 />
      <Suboption8 />
      <Suboption9 />
      <Suboption10 />
      <Suboption11 />
      <Suboption12 />
      <Suboption13 />
      <Suboption14 />
    </div>
  );
}

function Search() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-4"
      data-name="search"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="icon">
          <mask
            height="16"
            id="mask0_235_5365"
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
          <g mask="url(#mask0_235_5365)">
            <path
              d={svgPaths.p18195a80}
              fill="var(--fill-0, #626776)"
              id="search"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Icon Right"
    >
      <Search />
    </div>
  );
}

function SearchTextbox() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start left-4 p-[8px] right-4 rounded top-[46px]"
      data-name="Search Textbox"
    >
      <div className="absolute border border-[#d0d5e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9497a1] text-[12px] text-left">
        <p className="block leading-[16px]">{`Search `}</p>
      </div>
      <IconRight />
    </div>
  );
}

function ListOfFields() {
  return (
    <div
      className="basis-0 bg-[#ebeef7] grow h-[530px] min-h-px min-w-px overflow-clip relative rounded shrink-0"
      data-name="List of Fields"
    >
      <FieldList />
      <SearchTextbox />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-4 not-italic text-[#050e25] text-[12px] text-left top-4 w-[346px]">
        <p className="block leading-[18px]">Select Fields for the table</p>
      </div>
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_235_5377)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1ee4d500}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_235_5377">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <ArrowDropdown1 />
      <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
        <p className="block leading-[16px]">Left Freezed Pane</p>
      </div>
    </div>
  );
}

function SheetName() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Sheet Name"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[79px] items-center justify-start px-2 py-1 relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function DragList() {
  return (
    <div className="h-[18px] relative shrink-0 w-4" data-name="drag list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_235_5373"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_235_5373)">
            <path
              d={svgPaths.p211bf300}
              fill="var(--fill-0, #626776)"
              id="drag_indicator"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FieldTitlee() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Field Titlee"
    >
      <DragList />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Column Name
        </p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[60px] items-center justify-start px-4 py-1 relative w-full">
          <FieldTitlee />
        </div>
      </div>
    </div>
  );
}

function Sections() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sections">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-3 pr-0 py-0 relative w-full">
          {[...Array(4).keys()].map((_, i) => (
            <Heading1 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SelectedFields() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-1 items-start justify-start left-4 px-0 py-2 right-4 rounded top-[43px]"
      data-name="Selected Fields"
    >
      <SheetName />
      <Sections />
    </div>
  );
}

function ArrowDropdown2() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_235_5377)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1ee4d500}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_235_5377">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <ArrowDropdown2 />
      <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
        <p className="block leading-[16px]">Middle Scrollable Area</p>
      </div>
    </div>
  );
}

function SheetName1() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Sheet Name"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[79px] items-center justify-start px-2 py-1 relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function DragList4() {
  return (
    <div className="h-[18px] relative shrink-0 w-4" data-name="drag list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_235_5373"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_235_5373)">
            <path
              d={svgPaths.p211bf300}
              fill="var(--fill-0, #626776)"
              id="drag_indicator"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FieldTitlee4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Field Titlee"
    >
      <DragList4 />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Column Name
        </p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[60px] items-center justify-start px-4 py-1 relative w-full">
          <FieldTitlee4 />
        </div>
      </div>
    </div>
  );
}

function Sections1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sections">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-3 pr-0 py-0 relative w-full">
          {[...Array(4).keys()].map((_, i) => (
            <Heading5 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SelectedFields1() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-1 items-start justify-start left-4 px-0 py-2 right-4 rounded top-[211px]"
      data-name="Selected Fields"
    >
      <SheetName1 />
      <Sections1 />
    </div>
  );
}

function ArrowDropdown3() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow_dropdown">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_235_5377)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1ee4d500}
            fill="var(--fill-0, #626776)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_235_5377">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <ArrowDropdown3 />
      <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[12px] text-left">
        <p className="block leading-[16px]">Right Freezed Pane</p>
      </div>
    </div>
  );
}

function SheetName2() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="Sheet Name"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[79px] items-center justify-start px-2 py-1 relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function DragList8() {
  return (
    <div className="h-[18px] relative shrink-0 w-4" data-name="drag list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_235_5373"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_235_5373)">
            <path
              d={svgPaths.p211bf300}
              fill="var(--fill-0, #626776)"
              id="drag_indicator"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FieldTitlee8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Field Titlee"
    >
      <DragList8 />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Column Name
        </p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[60px] items-center justify-start px-4 py-1 relative w-full">
          <FieldTitlee8 />
        </div>
      </div>
    </div>
  );
}

function Sections2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sections">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start pl-3 pr-0 py-0 relative w-full">
          {[...Array(4).keys()].map((_, i) => (
            <Heading9 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SelectedFields2() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-1 items-start justify-start left-4 px-0 py-2 right-4 rounded top-[379px]"
      data-name="Selected Fields"
    >
      <SheetName2 />
      <Sections2 />
    </div>
  );
}

function SelectedFields3() {
  return (
    <div
      className="basis-0 bg-[#e5e8f3] grow h-[530px] min-h-px min-w-px overflow-clip relative rounded shrink-0"
      data-name="Selected Fields"
    >
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-4 not-italic text-[#050e25] text-[12px] text-left top-4 w-[347px]">
        <p className="block leading-[18px]">Selected fields for table view</p>
      </div>
      <SelectedFields />
      <SelectedFields1 />
      <SelectedFields2 />
    </div>
  );
}

function Panel() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 items-start justify-start left-4 p-0 top-[66px] w-[768px]"
      data-name="Panel"
    >
      <ListOfFields />
      <SelectedFields3 />
    </div>
  );
}

export default function Popup() {
  return (
    <div
      className="bg-[#cad2e5] overflow-clip relative rounded-xl size-full"
      data-name="Popup"
    >
      <Footer />
      <TitleBar />
      <Panel />
    </div>
  );
}