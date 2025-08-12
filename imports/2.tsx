import svgPaths from "./svg-tdbv1ckh3q";

function Mark() {
  return (
    <div
      className="absolute h-8 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]"
      data-name="Mark"
    >
      <div className="absolute bottom-0 left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 32"
        >
          <g id="Mark">
            <path
              d={svgPaths.p1d1c6f00}
              fill="url(#paint0_linear_2_30155)"
              id="Rectangle 1805"
            />
            <path
              d={svgPaths.p2f5870f2}
              fill="url(#paint1_linear_2_30155)"
              id="Rectangle 1805_2"
            />
            <path
              d={svgPaths.p30e32800}
              fill="url(#paint2_linear_2_30155)"
              id="Rectangle 1813"
            />
            <path
              d={svgPaths.p11744380}
              fill="url(#paint3_linear_2_30155)"
              id="Rectangle 1807"
            />
            <path
              d={svgPaths.p31e5ac00}
              fill="url(#paint4_linear_2_30155)"
              id="Rectangle 1806"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_2_30155"
              x1="8.51224"
              x2="2.42334"
              y1="3.43591"
              y2="9.90072"
            >
              <stop stopColor="#3874FF" />
              <stop offset="1" stopColor="#2852B5" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_2_30155"
              x1="18.734"
              x2="12.1398"
              y1="22.2212"
              y2="28.4871"
            >
              <stop stopColor="#2852B5" />
              <stop offset="1" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_2_30155"
              x1="8.43409"
              x2="21.3863"
              y1="9.2237"
              y2="15.3269"
            >
              <stop offset="0.0797732" stopColor="#3874FF" />
              <stop offset="0.37268" stopColor="#82A7FF" />
              <stop offset="0.813761" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_2_30155"
              x1="11.8385"
              x2="1.67426"
              y1="23.7239"
              y2="18.2375"
            >
              <stop offset="0.0797732" stopColor="#3874FF" />
              <stop offset="0.374435" stopColor="#82A7FF" />
              <stop offset="1" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_2_30155"
              x1="3.46187"
              x2="21.5248"
              y1="12.1612"
              y2="19.5301"
            >
              <stop offset="0.141199" stopColor="#3874FF" />
              <stop offset="0.424841" stopColor="#82A7FF" />
              <stop offset="0.751251" stopColor="#3874FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SentinelLogo() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-8"
      data-name="Sentinel Logo"
    >
      <Mark />
    </div>
  );
}

function LogoMark() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Logo Mark"
    >
      <SentinelLogo />
    </div>
  );
}

function Logo() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Logo"
    >
      <LogoMark />
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
        <g clipPath="url(#clip0_2_30119)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p3dd41900}
            fill="var(--fill-0, #9497A1)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_30119">
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
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
      data-name="Dropdown Icon"
    >
      <ArrowDropdown />
    </div>
  );
}

function NavbarDropdown() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start leading-[0] p-[4px] relative shrink-0"
      data-name="Navbar Dropdown"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[20px] overflow-inherit whitespace-pre">
          Jobs
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
}

function ModuleTitle() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Module Title"
    >
      <div className="absolute border-0 border-[#505767] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-0 pr-2 py-0 relative w-full">
          <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-12" data-name="Seperator">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 48 1"
                  >
                    <line
                      id="Seperator"
                      stroke="var(--stroke-0, #505767)"
                      x2="48"
                      y1="0.5"
                      y2="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <NavbarDropdown />
        </div>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Side"
    >
      <Logo />
      <ModuleTitle />
    </div>
  );
}

function IndividualTab() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-1 relative shrink-0"
      data-name="Individual Tab"
    >
      <div className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Imports</p>
      </div>
    </div>
  );
}

function IndividualTab1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-1 relative shrink-0"
      data-name="Individual Tab"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Exports</p>
      </div>
    </div>
  );
}

function HorizontalTab() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Horizontal Tab"
    >
      <IndividualTab />
      <IndividualTab1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-0" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30115"
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
          <g mask="url(#mask0_2_30115)">
            <path
              d={svgPaths.p30a00d00}
              fill="var(--fill-0, #9497A1)"
              id="campaign"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Indicator() {
  return (
    <div
      className="absolute bottom-[62.5%] left-[37.5%] right-[31.25%] top-[6.25%]"
      data-name="indicator"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 6 6"
      >
        <g id="indicator">
          <circle
            cx="2.8125"
            cy="2.8125"
            fill="var(--fill-0, #CF3B3B)"
            fillOpacity="0.19"
            id="Ellipse 86"
            r="2.8125"
          />
          <circle
            cx="2.8125"
            cy="2.8125"
            fill="var(--fill-0, #CF3B3B)"
            id="Ellipse 85"
            r="1.6875"
          />
        </g>
      </svg>
    </div>
  );
}

function Campaign() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Campaign">
      <Icon />
      <Indicator />
    </div>
  );
}

function ChatSupport() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Chat support">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30123"
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
          <g mask="url(#mask0_2_30123)">
            <path
              d={svgPaths.p37d2a380}
              fill="var(--fill-0, #9497A1)"
              id="contact_support"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="notifications">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30151"
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
          <g mask="url(#mask0_2_30151)">
            <path
              d={svgPaths.p28009c00}
              fill="var(--fill-0, #9497A1)"
              id="notifications"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Campaign />
      <ChatSupport />
      <Notifications />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[58px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 58 22"
      >
        <g id="Logo">
          <rect fill="white" height="22" width="58" />
          <path
            d={svgPaths.p13e2be00}
            fill="url(#paint0_linear_2_30134)"
            id="Logo_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_30134"
            x1="2"
            x2="55.0181"
            y1="12.2548"
            y2="11.3354"
          >
            <stop stopColor="#005575" />
            <stop offset="1" stopColor="#01314A" />
          </linearGradient>
        </defs>
      </svg>
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

function ProfileDetails() {
  return (
    <div
      className="bg-[#242c40] relative rounded shrink-0"
      data-name="Profile Details"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip p-[4px] relative">
        <Logo1 />
        <AvatarAlphabet />
      </div>
      <div className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function ProductUtilities() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Product Utilities"
    >
      <NoOfIcons />
      <ProfileDetails />
    </div>
  );
}

function Utilities() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-5 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Utilities"
    >
      <ProductUtilities />
    </div>
  );
}

function GlobalNavigation() {
  return (
    <div
      className="bg-[#1f2432] h-12 relative shrink-0 w-full"
      data-name="Global Navigation"
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-12 items-center justify-between px-3 py-0 relative w-full">
          <LeftSide />
          <HorizontalTab />
          <Utilities />
        </div>
      </div>
    </div>
  );
}

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

function ArrowDropdown1() {
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
      <ArrowDropdown1 />
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

function Toolbar() {
  return (
    <div
      className="bg-[#242c40] box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Toolbar"
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ListToolbar />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-0 w-[1280px]"
      data-name="Header"
    >
      <GlobalNavigation />
      <Toolbar />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute bg-[#cad2e5] inset-0" data-name="Page">
      <div className="overflow-clip relative size-full">
        <Header />
      </div>
      <div className="absolute border border-[#eff0f1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Component2() {
  return (
    <div className="bg-[#cad2e5] relative size-full" data-name="2">
      <Page />
    </div>
  );
}