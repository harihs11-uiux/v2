import svgPaths from "./svg-wv05vplgkj";

function IconSkeleton10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_447_111284"
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
          <g mask="url(#mask0_447_111284)">
            <path
              d={svgPaths.p6d07b80}
              fill="var(--fill-0, #9497A1)"
              id="history"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <IconSkeleton10 />
    </div>
  );
}

function Timer() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Timer">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_445_110668"
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
          <g mask="url(#mask0_445_110668)">
            <path
              d={svgPaths.p1f467dc0}
              fill="var(--fill-0, #3874FF)"
              id="timer_play"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons112Px18Px1() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <Timer />
    </div>
  );
}

function IconLeft() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px1 />
    </div>
  );
}

function ButtonContent() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start leading-[0] p-0 relative shrink-0"
      data-name="Button Content"
    >
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Start</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-4 relative shrink-0 w-2" data-name="arrow">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 16"
      >
        <g id="arrow">
          <mask
            height="16"
            id="mask0_445_110614"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="8"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="8"
            />
          </mask>
          <g mask="url(#mask0_445_110614)">
            <path
              d={svgPaths.p8236000}
              fill="var(--fill-0, #3874FF)"
              id="arrow_right"
            />
          </g>
        </g>
      </svg>
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
      <ButtonContent />
      <div className="flex h-[8px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-2" data-name="seperator-line">
            <div
              className="absolute bottom-0 left-0 right-0 top-[-1px]"
              style={
                {
                  "--stroke-0": "rgba(40, 82, 181, 0.3)",
                } as React.CSSProperties
              }
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="presentation"
                viewBox="0 0 8 1"
              >
                <line
                  id="seperator-line"
                  stroke="var(--stroke-0, #2852B5)"
                  strokeOpacity="0.3"
                  x2="8"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Arrow />
    </div>
  );
}

function NavbarSubModuleIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Navbar Sub Module Icons"
    >
      <NoOfIcons112Px18Px />
      <Button />
    </div>
  );
}

function Icon2() {
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
            id="mask0_447_111294"
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
          <g mask="url(#mask0_447_111294)">
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
      <Icon2 />
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
            id="mask0_447_111298"
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
          <g mask="url(#mask0_447_111298)">
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
            id="mask0_447_111288"
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
          <g mask="url(#mask0_447_111288)">
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

function Logo() {
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
            fill="url(#paint0_linear_445_110618)"
            id="Logo_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_445_110618"
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
        <Logo />
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

export default function Utilities() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-end p-0 relative size-full"
      data-name="Utilities"
    >
      <NavbarSubModuleIcons />
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-12" data-name="Seperator-line">
            <div
              className="absolute bottom-0 left-0 right-0 top-[-1px]"
              style={
                {
                  "--stroke-0": "rgba(80, 87, 103, 1)",
                } as React.CSSProperties
              }
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="presentation"
                viewBox="0 0 48 1"
              >
                <line
                  id="Seperator-line"
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
      <ProductUtilities />
    </div>
  );
}