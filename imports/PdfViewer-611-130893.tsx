import svgPaths from "./svg-yxbkyl92te";
import imgScreenshot20250212At95415Am1 from "figma:asset/bc3eb327401b3fa4ac091f3c898d9aa470b84123.png";

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Files</p>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div
      className="bg-[#202433] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[9px] relative shrink-0 w-[76px]"
      data-name="Block"
      style={{ height: '48px' }}
    >
      <div className="absolute border-[#505767] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Title />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0"
      data-name="Title"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Pages</p>
      </div>
    </div>
  );
}

function NavDefault() {
  return (
    <div
      className="bg-[#2d364d] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[9px] relative shrink-0 w-[76px]"
      data-name="Nav/Default"
      style={{ height: '48px' }}
    >
      <div className="absolute border-[#505767] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Title1 />
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-4"
      data-name="arrow_dropdown"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_586_24059)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p32976780}
            fill="var(--fill-0, #9497A1)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_586_24059">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Dropdown Icon"
    >
      <ArrowDropdown />
    </div>
  );
}

function Dropdown() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[4px] relative shrink-0 w-[196px]"
      data-name="Dropdown"
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          SELE
        </p>
      </div>
      <DropdownIcon />
    </div>
  );
}

function LeftsideControls() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Leftside Controls"
    >
      <NavDefault />
      <Dropdown />
    </div>
  );
}

function ZoomOut() {
  return (
    <div className="relative shrink-0 size-4" data-name="Zoom out">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 16 16"
      >
        <g id="Zoom out">
          <g id="icon">
            <mask
              height="16"
              id="mask0_578_23422"
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
            <g mask="url(#mask0_578_23422)"></g>
          </g>
          <path
            clipRule="evenodd"
            d={svgPaths.p1302d900}
            fill="var(--fill-0, #9497A1)"
            fillRule="evenodd"
            id="Line 107 (Stroke)"
          />
        </g>
      </svg>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-4 relative shrink-0 w-[85px]" data-name="Slider">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 85 16"
      >
        <g id="Slider">
          <rect
            fill="var(--fill-0, #9497A1)"
            height="2"
            id="Base"
            rx="1"
            width="85"
            y="7"
          />
          <rect
            fill="var(--fill-0, #3874FF)"
            height="2"
            id="Fill"
            rx="1"
            width="26.1875"
            y="7"
          />
          <circle
            cx="24.5564"
            cy="8"
            fill="var(--fill-0, #3874FF)"
            id="Ellipse 1"
            r="6"
          />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-4" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="add_circle">
          <mask
            height="16"
            id="mask0_578_23410"
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
          <g mask="url(#mask0_578_23410)">
            <path
              d={svgPaths.p17180a00}
              fill="var(--fill-0, #9497A1)"
              id="add_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <ZoomOut />
      <Slider />
      <Add />
    </div>
  );
}

function IconSkeleton3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Icon Skeleton 3"
    >
      <Frame27 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">100 %</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="icon">
          <mask
            height="16"
            id="mask0_578_23427"
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
          <g mask="url(#mask0_578_23427)">
            <path
              d={svgPaths.p5202000}
              fill="var(--fill-0, #9497A1)"
              id="refresh"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 2">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="icon">
          <mask
            height="16"
            id="mask0_578_23414"
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
          <g mask="url(#mask0_578_23414)">
            <path
              d={svgPaths.p107e2600}
              fill="var(--fill-0, #9497A1)"
              id="refresh"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSkeleton1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 1">
      <Icon2 />
    </div>
  );
}

function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <IconSkeleton3 />
      <IconSkeleton2 />
      <IconSkeleton1 />
    </div>
  );
}

function ToolbarIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Toolbar Icons"
    >
      <NoOfIcons />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Close</p>
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
      <Button />
    </div>
  );
}

function RightSideControls() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-end p-0 relative shrink-0"
      data-name="Right Side Controls"
    >
      <ToolbarIcons />
    </div>
  );
}

function ListToolbar() {
  return (
    <div
      className="basis-0 bg-[#2d364d] grow h-12 min-h-px min-w-px relative shrink-0"
      data-name="List Toolbar"
      style={{ height: '48px' }}
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-0 pr-3 py-0 relative w-full" style={{ height: '48px' }}>
          <LeftsideControls />
          <RightSideControls />
        </div>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Toolbar"
      style={{ height: '48px' }}
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Block />
      <ListToolbar />
    </div>
  );
}

function Icon3() {
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
            id="mask0_578_23418"
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
          <g mask="url(#mask0_578_23418)">
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

function NoOfIcons1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Icon3 />
    </div>
  );
}

function CollapsedTitlebarActions() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Collapsed Titlebar Actions"
    >
      <NoOfIcons1 />
    </div>
  );
}

function SidebarCollapsedTitlebar() {
  return (
    <div
      className="bg-[#202433] relative shrink-0 w-[52px]"
      data-name="Sidebar Collapsed  Titlebar"
      style={{ height: '48px' }}
    >
      <div className="overflow-clip relative w-[52px]" style={{ height: '48px' }}>
        <CollapsedTitlebarActions />
      </div>
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CollapsedCardTitle() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-8"
      data-name="Collapsed Card Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">FL 01</p>
      </div>
    </div>
  );
}

function CollapsedCard() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 w-[50px]"
      data-name="Collapsed Card"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <CollapsedCardTitle />
    </div>
  );
}

function CollapsedCardTitle1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-8"
      data-name="Collapsed Card Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">FL 02</p>
      </div>
    </div>
  );
}

function CollapsedCard1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 w-[50px]"
      data-name="Collapsed Card"
    >
      <div className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
      <CollapsedCardTitle1 />
    </div>
  );
}

function CardListCollapsed() {
  return (
    <div
      className="basis-0 bg-[#1f2533] box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px px-0 py-3 relative shrink-0"
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
      className="basis-0 bg-[#1f2432] grow min-h-px min-w-px relative shrink-0"
      data-name="Sidebar Skeleton"
    >
      <div className="box-border content-stretch flex flex-col h-full items-center justify-start overflow-clip px-3 py-0 relative">
        <SidebarCollapsedTitlebar />
        <CardListCollapsed />
      </div>
      <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0"
      data-name="Sidebar"
    >
      <SidebarSkeleton />
    </div>
  );
}

function Icon4() {
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
            id="mask0_578_23418"
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
          <g mask="url(#mask0_578_23418)">
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

function NoOfIcons2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Icon4 />
    </div>
  );
}

function CollapsedTitlebarActions1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Collapsed Titlebar Actions"
    >
      <NoOfIcons2 />
    </div>
  );
}

function SidebarCollapsedTitlebar1() {
  return (
    <div
      className="bg-[#2d364d] relative shrink-0 w-[52px]"
      data-name="Sidebar Collapsed  Titlebar"
      style={{ height: '48px' }}
    >
      <div className="overflow-clip relative w-[52px]" style={{ height: '48px' }}>
        <CollapsedTitlebarActions1 />
      </div>
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CollapsedCardTitle2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-8"
      data-name="Collapsed Card Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">PG 01</p>
      </div>
    </div>
  );
}

function CollapsedCard2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 w-[50px]"
      data-name="Collapsed Card"
    >
      <div className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
      <CollapsedCardTitle2 />
    </div>
  );
}

function CollapsedCardTitle3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-8"
      data-name="Collapsed Card Title"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">PG 02</p>
      </div>
    </div>
  );
}

function CollapsedCard3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 w-[50px]"
      data-name="Collapsed Card"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      <CollapsedCardTitle3 />
    </div>
  );
}

function CardListCollapsed1() {
  return (
    <div
      className="basis-0 bg-[#2d364d] box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px px-0 py-3 relative shrink-0"
      data-name="Card List Collapsed"
    >
      <CollapsedCard2 />
      <CollapsedCard3 />
    </div>
  );
}

function SidebarSkeleton1() {
  return (
    <div
      className="basis-0 bg-[#2d364d] grow min-h-px min-w-px relative shrink-0"
      data-name="Sidebar Skeleton"
    >
      <div className="box-border content-stretch flex flex-col h-full items-center justify-start overflow-clip px-3 py-0 relative">
        <SidebarCollapsedTitlebar1 />
        <CardListCollapsed1 />
      </div>
      <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Sidebar1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0"
      data-name="Sidebar"
    >
      <SidebarSkeleton1 />
    </div>
  );
}

function Pages() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0"
      data-name="Pages"
    >
      <div
        className="absolute aspect-[1818/2350] bg-center bg-cover bg-no-repeat left-[-2.883%] right-[-6.228%] top-[-0.213px]"
        data-name="Screenshot 2025-02-12 at 9.54.15 AM 1"
        style={{ backgroundImage: `url('${imgScreenshot20250212At95415Am1}')` }}
      />
    </div>
  );
}

function Body() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="Body"
    >
      <Sidebar />
      <Sidebar1 />
      <Pages />
    </div>
  );
}

function ScrollBar() {
  return (
    <div
      className="absolute h-[52px] left-[1076px] top-[49px] w-1.5"
      data-name="Scroll Bar"
    >
      <div
        className="absolute bg-[#cdcfd3] inset-0 rounded-[22px]"
        data-name="Vertical Bar"
      />
    </div>
  );
}

function ScrollBar1() {
  return (
    <div className="h-[52px] relative w-1.5" data-name="Scroll Bar">
      <div
        className="absolute bg-[#cdcfd3] inset-0 rounded-[22px]"
        data-name="Vertical Bar"
      />
    </div>
  );
}

export default function PdfViewer() {
  return (
    <div
      className="bg-[#f6f9ff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="PDF Viewer"
    >
      <Toolbar />
      <Body />
      <ScrollBar />
      <div className="absolute bottom-0 flex h-[6px] items-center justify-center left-[152px] w-[52px]">
        <div className="flex-none rotate-[270deg]">
          <ScrollBar1 />
        </div>
      </div>
    </div>
  );
}