import React from 'react';
import svgPaths from "../imports/svg-qzy7hb8u7n";
import Pdf from "../imports/Pdf-875-244";

interface Frame42680EnhancedProps {
  onPdfClick?: () => void;
}

function Frame42675() {
  return (
    <div className="absolute bg-[#242c40] h-12 left-0 top-0 w-[76px]">
      <div
        aria-hidden="true"
        className="absolute border-[#505767] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-center left-0 px-2 py-1 rounded top-3 w-[75px]"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center items-center not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Versions</p>
      </div>
    </div>
  );
}

function Frame42676() {
  return (
    <div className="absolute h-12 left-0 top-0 w-[76px]">
      <Frame42675 />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Nav</p>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[9px] py-0 relative shrink-0 w-[76px]"
      data-name="Block"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Button1 />
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

function Label() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-end px-1 py-0 relative rounded-sm shrink-0"
      data-name="Label"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded-sm"
      />
      <Indcator />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[12px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Live</p>
      </div>
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
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_611_130533)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #9497A1)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_611_130533">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Dropdown Icon"
    >
      <ArrowDropdown />
    </div>
  );
}

function Dropdown() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-[4px] relative shrink-0"
      data-name="Dropdown"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          Form
        </p>
      </div>
      <DropdownIcon />
    </div>
  );
}

function PdfIconButton({ onPdfClick }: { onPdfClick?: () => void }) {
  return (
    <div
      className="cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded p-2 transition-colors duration-200 flex items-center justify-center"
      onClick={onPdfClick}
      data-name="PDF Icon Button"
    >
      <div className="w-[18px] h-[18px] relative">
        <Pdf />
      </div>
    </div>
  );
}

function LeftsideControls({ onPdfClick }: { onPdfClick?: () => void }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 h-12 items-center justify-start left-0 p-0 top-0"
      data-name="Leftside Controls"
    >
      <Block />
      <Label />
      <div className="flex h-[26px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[26px]" data-name="Seperator">
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
                viewBox="0 0 26 1"
              >
                <line
                  id="Seperator"
                  stroke="var(--stroke-0, #505767)"
                  x2="26"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Dropdown />
      {/* PDF Icon after dropdown */}
      <PdfIconButton onPdfClick={onPdfClick} />
    </div>
  );
}

function Error() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Error">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Error">
          <circle
            cx="7.875"
            cy="7.875"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 37"
            r="7.875"
          />
          <g id="Vector">
            <path d={svgPaths.p2e6e6f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e6e6f00} stroke="var(--stroke-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Error1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="error"
    >
      <Error />
    </div>
  );
}

function SelectionsCards() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0"
      data-name="Selections Cards"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Error1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="warning">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="warning">
          <path
            d={svgPaths.p25951b00}
            fill="var(--fill-0, #E97330)"
            id="Polygon 1"
          />
          <rect
            fill="var(--fill-0, white)"
            height="5.625"
            id="Rectangle 1574"
            rx="0.5625"
            width="1.125"
            x="8.4375"
            y="7.875"
          />
          <circle
            cx="9"
            cy="6.1875"
            fill="var(--fill-0, white)"
            id="Ellipse 39"
            r="0.5625"
          />
        </g>
      </svg>
    </div>
  );
}

function SelectionsCards1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0"
      data-name="Selections Cards"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Warning />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

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
            fill="var(--fill-0, #FDCA5F)"
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

function Format() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="format"
    >
      <SuccessCheck />
    </div>
  );
}

function SelectionsCards2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-1 py-0.5 relative rounded shrink-0"
      data-name="Selections Cards"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#505767] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Format />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function Audit() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[22px] items-center justify-center p-[4px] relative rounded shrink-0"
      data-name="Audit"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Audit</p>
      </div>
      <SelectionsCards />
      <SelectionsCards1 />
      <SelectionsCards2 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Save</p>
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
      <Button2 />
      <Button3 />
    </div>
  );
}

function RightSideControls() {
  return (
    <div
      className="absolute box-border flex flex-row items-center justify-end p-0 right-3 h-12 top-0"
      data-name="Right Side Controls"
      style={{ gap: '12px' }}
    >
      {/* First separator */}
      <div className="flex items-center justify-center h-6 w-px bg-[#505767]" />
      
      {/* Audit button */}
      <div className="flex items-center">
        <Audit />
      </div>
      
      {/* Second separator between audit and close/save buttons */}
      <div className="flex items-center justify-center h-6 w-px bg-[#505767]" />
      
      {/* Close and Save buttons */}
      <div className="flex items-center">
        <ToolbarActions />
      </div>
    </div>
  );
}

function ListToolbar({ onPdfClick }: { onPdfClick?: () => void }) {
  return (
    <div
      className="absolute bg-[#2d364d] h-12 left-0 right-0 top-0"
      data-name="List Toolbar"
    >
      <div
        aria-hidden="true"
        className="absolute border-l border-r border-b border-[#505767] border-solid inset-0 pointer-events-none"
      />
      <LeftsideControls onPdfClick={onPdfClick} />
      <RightSideControls />
    </div>
  );
}

function Toolbar({ onPdfClick }: { onPdfClick?: () => void }) {
  return (
    <div
      className="absolute h-12 left-[75px] right-0 top-0"
      data-name="Toolbar"
    >
      <ListToolbar onPdfClick={onPdfClick} />
    </div>
  );
}

export default function Frame42680Enhanced({ onPdfClick }: Frame42680EnhancedProps) {
  return (
    <div className="relative size-full">
      <Toolbar onPdfClick={onPdfClick} />
      <Frame42676 />
    </div>
  );
}