import React from 'react';
import svgPaths from "../imports/svg-1bgmldt1fd";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface FunctionalGlobalNavigationProps {
  activeTab: 'files' | 'jobDetails' | 'status';
  onTabChange: (tab: 'files' | 'jobDetails' | 'status') => void;
  onBackToJobList: () => void;
  onLogout: () => void;
  jobData?: any;
}

function Mark() {
  return (
    <div
      className="absolute h-8 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]"
      data-name="Mark"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 32"
      >
        <g id="Mark">
          <path
            d={svgPaths.p1d1c6f00}
            fill="url(#paint0_linear_594_128837)"
            id="Rectangle 1805"
          />
          <path
            d={svgPaths.p2f5870f2}
            fill="url(#paint1_linear_594_128837)"
            id="Rectangle 1805_2"
          />
          <path
            d={svgPaths.p30e32800}
            fill="url(#paint2_linear_594_128837)"
            id="Rectangle 1813"
          />
          <path
            d={svgPaths.p11744380}
            fill="url(#paint3_linear_594_128837)"
            id="Rectangle 1807"
          />
          <path
            d={svgPaths.p31e5ac00}
            fill="url(#paint4_linear_594_128837)"
            id="Rectangle 1806"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_594_128837"
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
            id="paint1_linear_594_128837"
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
            id="paint2_linear_594_128837"
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
            id="paint3_linear_594_128837"
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
            id="paint4_linear_594_128837"
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
      className="absolute box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 top-0 translate-x-[-50%]"
      data-name="Logo Mark"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <SentinelLogo />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-8 relative shrink-0 w-[51px]" data-name="Logo">
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

function NavbarDropdown({ onBackToJobList, onLogout }: { onBackToJobList: () => void; onLogout: () => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="box-border content-stretch flex flex-row gap-2 items-center justify-start leading-[0] p-[4px] relative shrink-0 outline-none">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-[16px] text-left text-nowrap hover:text-white transition-colors">
          <p className="[text-overflow:inherit] block leading-[20px] overflow-inherit whitespace-pre">
            Jobs
          </p>
        </div>
        <DropdownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="bg-[#1f2432] border-[#505767] text-white min-w-[120px]"
      >
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer"
          onClick={onBackToJobList}
        >
          Job List
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer"
        >
          Create Job
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer"
        >
          Analytics
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Back({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Back"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_594_128852"
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
          <g mask="url(#mask0_594_128852)">
            <path
              d={svgPaths.p24caea00}
              fill="var(--fill-0, #9497A1)"
              id="arrow_back"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute bottom-[7.384%] left-[16.931%] right-[16.931%] top-[7.384%]"
      data-name="icon"
    >
      <div className="absolute bottom-[-2.587%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 16"
        >
          <g id="icon">
            <path
              clipRule="evenodd"
              d={svgPaths.p24f27600}
              fill="url(#paint0_linear_611_130541)"
              fillRule="evenodd"
              id="Body"
            />
            <foreignObject height="15.4243" width="17.9047" x="-3" y="2.91736">
              <div
                style={{
                  backdropFilter: "blur(1.5px)",
                  clipPath: "url(#bgblur_0_611_130541_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <g
              data-figma-bg-blur-radius="3"
              filter="url(#filter0_i_611_130541)"
              id="Shape 1"
            >
              <rect
                fill="url(#paint1_linear_611_130541)"
                height="9.42427"
                rx="2"
                width="11.9047"
                y="5.91736"
              />
            </g>
            <foreignObject
              height="36.5804"
              width="34.3596"
              x="-11.4069"
              y="-7.53493"
            >
              <div
                style={{
                  backdropFilter: "blur(7.94px)",
                  clipPath: "url(#bgblur_1_611_130541_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <g
              data-figma-bg-blur-radius="15.8888"
              filter="url(#filter1_d_611_130541)"
              id="Union"
            >
              <mask fill="white" id="path-3-inside-1_611_130541">
                <path d={svgPaths.p13548a80} />
              </mask>
              <path
                d={svgPaths.p13548a80}
                fill="url(#paint2_linear_611_130541)"
                shapeRendering="crispEdges"
              />
              <path
                d={svgPaths.p1a275800}
                fill="url(#paint3_linear_611_130541)"
                mask="url(#path-3-inside-1_611_130541)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="15.4243"
              id="filter0_i_611_130541"
              width="17.9047"
              x="-3"
              y="2.91736"
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
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.208575 0 0 0 0 0.682247 0 0 0 0 0.610166 0 0 0 1 0"
              />
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_611_130541"
              />
            </filter>
            <clipPath
              id="bgblur_0_611_130541_clip_path"
              transform="translate(3 -2.91736)"
            >
              <rect height="9.42427" rx="2" width="11.9047" y="5.91736" />
            </clipPath>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="36.5804"
              id="filter1_d_611_130541"
              width="34.3596"
              x="-11.4069"
              y="-7.53493"
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
                values="0 0 0 0 0.282353 0 0 0 0 0.717647 0 0 0 0 0.643137 0 0 0 1 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_611_130541"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_611_130541"
                mode="normal"
                result="shape"
              />
            </filter>
            <clipPath
              id="bgblur_1_611_130541_clip_path"
              transform="translate(11.4069 7.53493)"
            >
              <path d={svgPaths.p13548a80} />
            </clipPath>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_611_130541"
              x1="5.95233"
              x2="8.3083"
              y1="-1.02739"
              y2="3.42378"
            >
              <stop offset="0.181501" stopColor="#97E9DC" />
              <stop offset="1" stopColor="#00B397" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_611_130541"
              x1="5.95235"
              x2="5.95235"
              y1="6.67078"
              y2="17.4691"
            >
              <stop stopColor="#ADFFF2" />
              <stop offset="0.781643" stopColor="#00B498" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_611_130541"
              x1="7.06388"
              x2="3.9419"
              y1="9.64485"
              y2="10.4739"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.97" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_611_130541"
              x1="3.86774"
              x2="6.38222"
              y1="8.92366"
              y2="11.5296"
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

function AvatarAlphabet() {
  return (
    <div
      className="mr-[-10px] relative shrink-0 size-6"
      data-name="Avatar (Alphabet)"
    >
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
            r="11.5"
            stroke="var(--stroke-0, #242C40)"
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

function AvatarAlphabet1() {
  return (
    <div
      className="mr-[-10px] relative shrink-0 size-6"
      data-name="Avatar (Alphabet)"
    >
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
            fill="var(--fill-0, #FECA7C)"
            id="Shape"
            r="11.5"
            stroke="var(--stroke-0, #242C40)"
          />
          <g id="VJ">
            <path
              d={svgPaths.p1b67fd00}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p358e6f00}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarAlphabet2() {
  return (
    <div
      className="mr-[-10px] relative shrink-0 size-6"
      data-name="Avatar (Alphabet)"
    >
      <div className="absolute inset-[-4.167%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26 26"
        >
          <g id="Avatar (Alphabet)">
            <circle
              cx="13"
              cy="13"
              fill="var(--fill-0, #3874FF)"
              id="Shape"
              r="12.5"
              stroke="var(--stroke-0, #242C40)"
            />
            <g id="+3">
              <path
                d={svgPaths.pf843280}
                fill="var(--fill-0, white)"
                id="Vector"
              />
              <path
                d={svgPaths.p9d3df00}
                fill="var(--fill-0, white)"
                id="Vector_2"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MultiUsers() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-2.5 py-0 relative shrink-0"
      data-name="Multi Users"
    >
      <AvatarAlphabet />
      <AvatarAlphabet1 />
      <AvatarAlphabet2 />
    </div>
  );
}

function ScreenBlock({ jobData }: { jobData?: any }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Screen block"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{jobData?.jobNumber || 'ICB/12345/2025-26'}</p>
      </div>
      <Lock />
      <MultiUsers />
    </div>
  );
}

function SubModuleTitle({ onBackToJobList, jobData }: { onBackToJobList: () => void; jobData?: any }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Sub Module Title"
    >
      <Back onClick={onBackToJobList} />
      <ScreenBlock jobData={jobData} />
    </div>
  );
}

function ModuleTitle({ onBackToJobList, onLogout, jobData }: { onBackToJobList: () => void; onLogout: () => void; jobData?: any }) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Module Title"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-0 pr-2 py-0 relative w-full">
          {/* First Separator - Full Height */}
          <div className="flex h-12 items-center justify-center relative shrink-0 w-[0px] ml-[3px]">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-12" data-name="Seperator">
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
          <NavbarDropdown onBackToJobList={onBackToJobList} onLogout={onLogout} />
          {/* Second Separator - Full Height */}
          <div className="flex h-12 items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-12" data-name="Seperator">
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
          <SubModuleTitle onBackToJobList={onBackToJobList} jobData={jobData} />
        </div>
      </div>
    </div>
  );
}

function LeftSide({ onBackToJobList, onLogout, jobData }: { onBackToJobList: () => void; onLogout: () => void; jobData?: any }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 items-center justify-start left-3 p-0 top-1/2 translate-y-[-50%] w-[522.5px]"
      data-name="Left Side"
    >
      <Logo />
      <ModuleTitle onBackToJobList={onBackToJobList} onLogout={onLogout} jobData={jobData} />
    </div>
  );
}

function IndividualTab({ 
  active = false, 
  children, 
  onClick 
}: { 
  active?: boolean; 
  children: React.ReactNode; 
  onClick?: () => void;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-1 relative shrink-0 cursor-pointer hover:bg-[#333b4f] transition-colors"
      data-name="Individual Tab"
      onClick={onClick}
    >
      {active && <div className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />}
      <div className={`flex flex-col font-['Inter:${active ? 'Semi_Bold' : 'Medium'}',_sans-serif] font-${active ? 'semibold' : 'medium'} justify-center leading-[0] not-italic relative shrink-0 text-[${active ? '#ffffff' : '#cdcfd3'}] text-[14px] text-left text-nowrap`}>
        <p className="block leading-[18px] whitespace-pre">{children}</p>
      </div>
    </div>
  );
}

function HorizontalTab({ activeTab, onTabChange }: { activeTab: 'files' | 'jobDetails' | 'status'; onTabChange: (tab: 'files' | 'jobDetails' | 'status') => void }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start p-0 top-0 translate-x-[-50%]"
      data-name="Horizontal Tab"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <IndividualTab active={activeTab === 'files'} onClick={() => onTabChange('files')}>
        Files
      </IndividualTab>
      <IndividualTab active={activeTab === 'jobDetails'} onClick={() => onTabChange('jobDetails')}>
        Job Details
      </IndividualTab>
      <IndividualTab active={activeTab === 'status'} onClick={() => onTabChange('status')}>
        Status
      </IndividualTab>
    </div>
  );
}

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
            id="mask0_611_130537"
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
          <g mask="url(#mask0_611_130537)">
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
            id="mask0_594_128856"
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
          <g mask="url(#mask0_594_128856)">
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
            id="mask0_594_128848"
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
          <g mask="url(#mask0_594_128848)">
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
      className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.2)] transition-colors"
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

// Removed Upload & Close buttons - only show history icon and start button
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

function Icon4() {
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
            id="mask0_437_110334"
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
          <g mask="url(#mask0_437_110334)">
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
      <Icon4 />
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
            id="mask0_437_110330"
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
          <g mask="url(#mask0_437_110330)">
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
            id="mask0_437_110338"
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
          <g mask="url(#mask0_437_110338)">
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
            fill="url(#paint0_linear_612_4397)"
            id="Logo_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_612_4397"
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

function ProfileDetails({ onLogout }: { onLogout: () => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-[#242c40] relative rounded shrink-0 outline-none">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip p-[4px] relative">
          <Logo1 />
          <AvatarAlphabet3 />
        </div>
        <div className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-[#1f2432] border-[#505767] text-white min-w-[120px]"
      >
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ProductUtilities({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Product Utilities"
    >
      <NoOfIcons />
      <ProfileDetails onLogout={onLogout} />
    </div>
  );
}

function Utilities({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-5 items-center justify-end p-0 right-3 top-0 w-[522.5px]"
      data-name="Utilities"
    >
      <NavbarSubModuleIcons />
      <div className="flex h-12 items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-12" data-name="Seperator-line">
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
      <ProductUtilities onLogout={onLogout} />
    </div>
  );
}

export default function FunctionalGlobalNavigation({
  activeTab,
  onTabChange,
  onBackToJobList,
  onLogout,
  jobData
}: FunctionalGlobalNavigationProps) {
  return (
    <div
      className="bg-[#1f2432] relative size-full"
      data-name="Global Navigation"
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px_0px] border-solid inset-0 pointer-events-none" />
      <LeftSide onBackToJobList={onBackToJobList} onLogout={onLogout} jobData={jobData} />
      <HorizontalTab activeTab={activeTab} onTabChange={onTabChange} />
      <Utilities onLogout={onLogout} />
    </div>
  );
}