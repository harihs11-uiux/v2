import React, { useState } from 'react';
import svgPaths from '../imports/svg-r7ieq32twk';

interface NavigationSection {
  id: string;
  title: string;
  progress: number;
  isActive?: boolean;
  isExpanded?: boolean;
}

interface FunctionalNavigationSidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSectionClick?: (sectionId: string) => void;
}

// Individual section icons
function JobDetailsIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 16"
      >
        <g id="Shapes">
          <path
            d={svgPaths.p39a43b00}
            fill={isActive ? "url(#paint0_linear_690_29360)" : "var(--fill-0, #586A9C)"}
            id="Ellipse 2840"
          />
          <g id="Rectangle 274140">
            <g filter={isActive ? "url(#filter0_i_690_29360)" : "url(#filter0_i_690_29722)"}>
              <path
                d={svgPaths.pc8cec00}
                fill={isActive ? "url(#paint1_linear_690_29360)" : "var(--fill-0, #586A9C)"}
              />
            </g>
            <path
              d={svgPaths.p203ac500}
              stroke={isActive ? "url(#paint2_linear_690_29360)" : "url(#paint0_linear_690_29722)"}
              strokeWidth="0.2"
            />
          </g>
          <foreignObject height="15.4667" width="26" x="-4" y="-1.86667">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_690_29360_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d={svgPaths.p2fe6a600}
            data-figma-bg-blur-radius="4"
            fill={isActive ? "url(#paint3_linear_690_29360)" : "url(#paint1_linear_690_29722)"}
            fillOpacity={isActive ? "0.62" : "0.34"}
            id="Rectangle 274141"
            stroke={isActive ? "url(#paint4_linear_690_29360)" : "url(#paint2_linear_690_29722)"}
            strokeWidth="0.2"
          />
          <foreignObject
            height="13.0667"
            width="12.7684"
            x="2.85263"
            y="3.33333"
          >
            <div
              style={{
                backdropFilter: "blur(2.6px)",
                clipPath: "url(#bgblur_1_690_29360_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <g
            data-figma-bg-blur-radius="5.2"
            filter={isActive ? "url(#filter2_d_690_29360)" : "url(#filter2_d_690_29722)"}
            id="Rectangle 274260"
          >
            <rect
              fill={isActive ? "url(#paint5_linear_690_29360)" : "url(#paint3_linear_690_29722)"}
              height="2.66667"
              rx="1"
              shapeRendering="crispEdges"
              width="2.36842"
              x="8.05263"
              y="8.53333"
            />
          </g>
        </g>
        <defs>
          {isActive ? (
            <>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="13.3984"
                id="filter0_i_690_29360"
                width="18"
                x="0"
                y="4.60156"
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
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0.380392 0 0 0 0 0.72549 0 0 0 1 0"
                />
                <feBlend
                  in2="shape"
                  mode="normal"
                  result="effect1_innerShadow_690_29360"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_690_29360"
                x1="8.86855"
                x2="9.23037"
                y1="-6.1943e-09"
                y2="11.6804"
              >
                <stop stopColor="#75BEFF" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_690_29360"
                x1="9"
                x2="8.05644"
                y1="0.450782"
                y2="22.6738"
              >
                <stop stopColor="#75BEFF" />
                <stop offset="0.362664" stopColor="#75BEFF" />
                <stop offset="1" stopColor="#67A8E1" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_690_29360"
                x1="9"
                x2="9"
                y1="5"
                y2="16"
              >
                <stop stopColor="#AFD9FF" />
                <stop offset="1" stopColor="#ABD0F2" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint3_linear_690_29360"
                x1="9"
                x2="9.05054"
                y1="-5.44762"
                y2="9.59983"
              >
                <stop stopColor="#5DADF4" />
                <stop offset="0.649512" stopColor="#B0D8FC" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint4_linear_690_29360"
                x1="7.65"
                x2="7.29872"
                y1="19.0145"
                y2="0.673446"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint5_linear_690_29360"
                x1="9.23684"
                x2="8.9676"
                y1="8.53333"
                y2="11.7306"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.29" />
              </linearGradient>
            </>
          ) : (
            <>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="13.3984"
                id="filter0_i_690_29722"
                width="18"
                x="0"
                y="4.60156"
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
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0"
                />
                <feBlend
                  in2="shape"
                  mode="normal"
                  result="effect1_innerShadow_690_29722"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_690_29722"
                x1="9"
                x2="9"
                y1="5"
                y2="16"
              >
                <stop stopColor="#969FB9" />
                <stop offset="1" stopColor="#687694" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_690_29722"
                x1="9"
                x2="9.02687"
                y1="2"
                y2="9.99991"
              >
                <stop stopColor="#7684A9" />
                <stop offset="0.585856" stopColor="#7E89A7" />
                <stop offset="1" stopColor="#DBDBDB" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_690_29722"
                x1="8"
                x2="7.275"
                y1="27.5"
                y2="0.67449"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint3_linear_690_29722"
                x1="9.23684"
                x2="8.9676"
                y1="8.53333"
                y2="11.7306"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.29" />
              </linearGradient>
            </>
          )}
          <clipPath
            id="bgblur_0_690_29360_clip_path"
            transform="translate(4 1.86667)"
          >
            <path d={svgPaths.p2fe6a600} />
          </clipPath>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="13.0667"
            id="filter2_d_690_29360"
            width="12.7684"
            x="2.85263"
            y="3.33333"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.201389 0 0 0 0 0.349959 0 0 0 0 0.483333 0 0 0 1 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_690_29360"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_690_29360"
              mode="normal"
              result="shape"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="13.0667"
            id="filter2_d_690_29722"
            width="12.7684"
            x="2.85263"
            y="3.33333"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.501961 0 0 0 0 0.568627 0 0 0 0 0.709804 0 0 0 1 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_690_29722"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_690_29722"
              mode="normal"
              result="shape"
            />
          </filter>
          <clipPath
            id="bgblur_1_690_29360_clip_path"
            transform="translate(-2.85263 -3.33333)"
          >
            <rect
              height="2.66667"
              rx="1"
              width="2.36842"
              x="8.05263"
              y="8.53333"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DocumentIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 16"
      >
        <g id="Group 4339">
          <g filter="url(#filter0_i_690_29624)" id="Rectangle 274261">
            <path d={svgPaths.pb26d980} fill="var(--fill-0, #586A9C)" />
          </g>
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="1.80515">
            <div
              style={{
                backdropFilter: "blur(2px)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 6.25515H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 141"
            opacity="0.9"
            stroke="url(#paint0_linear_690_29624)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="3.71778">
            <div
              style={{
                backdropFilter: "blur(2px)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 8.16778H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 142"
            opacity="0.9"
            stroke="url(#paint1_linear_690_29624)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="5.63038">
            <div
              style={{
                backdropFilter: "blur(2px)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 10.0804H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 143"
            opacity="0.9"
            stroke="url(#paint2_linear_690_29624)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="18.1309" x="-3.06544" y="7.54297">
            <div
              style={{
                backdropFilter: "blur(2px)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 11.993H10.6154"
            data-figma-bg-blur-radius="4"
            id="Line 144"
            opacity="0.9"
            stroke="url(#paint3_linear_690_29624)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <foreignObject height="8.9" width="13.5154" x="-3.06544" y="9.45557">
            <div
              style={{
                backdropFilter: "blur(2px)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d="M1.38456 13.9056H6"
            data-figma-bg-blur-radius="4"
            id="Line 145"
            opacity="0.9"
            stroke="url(#paint4_linear_690_29624)"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d={svgPaths.pcfd4e80}
            fill="var(--fill-0, #7C8CB8)"
            id="Rectangle 274262"
          />
          <path
            d={svgPaths.p1301ce00}
            fill="url(#paint5_linear_690_29624)"
            id="Rectangle 274304"
          />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="18"
            id="filter0_i_690_29624"
            width="12"
            x="0"
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
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_690_29624"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_690_29624"
            x1="6.05103"
            x2="6.05103"
            y1="5.8633"
            y2="7.3633"
          >
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_690_29624"
            x1="6.05103"
            x2="6.05103"
            y1="7.77593"
            y2="9.27593"
          >
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_690_29624"
            x1="6.05103"
            x2="6.05103"
            y1="9.68853"
            y2="11.1885"
          >
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_690_29624"
            x1="6.05103"
            x2="6.05103"
            y1="11.6011"
            y2="13.1011"
          >
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_690_29624"
            x1="3.7178"
            x2="3.7178"
            y1="13.5137"
            y2="15.0137"
          >
            <stop stopColor="white" />
            <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_690_29624"
            x1="3"
            x2="3"
            y1="-0.50354"
            y2="5"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="absolute left-3.5 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Group 3">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #00B196)"
            id="Ellipse 10"
            r="9"
          />
          <g id="check">
            <mask
              height="16"
              id="mask0_690_29734"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="16"
              x="1"
              y="1"
            >
              <rect
                fill="var(--fill-0, #D9D9D9)"
                height="16"
                id="Bounding box"
                width="16"
                x="1"
                y="1"
              />
            </mask>
            <g mask="url(#mask0_690_29734)">
              <path
                d={svgPaths.pb636100}
                fill="var(--fill-0, white)"
                id="check_2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProgressIcon({ progress }: { progress: number }) {
  return (
    <div className="absolute left-[13px] size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clock_loader_20">
          <circle
            cx="9.99929"
            cy="10"
            fill="var(--fill-0, #35405C)"
            id="Ellipse 11"
            r="7.27273"
          />
          <mask
            height="20"
            id="mask0_690_29694"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_690_29694)">
            <path
              d={svgPaths.p3820d00}
              fill="var(--fill-0, #6D758C)"
              id="clock_loader_20_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowDropdown({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className={`relative shrink-0 size-[18px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_690_29373)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p1a435af0}
            fill="var(--fill-0, #9497A1)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_690_29373">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CollapseIcon({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      <svg
        className={`block size-full transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="double_arrow">
          <mask
            height="18"
            id="mask0_481_8045"
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
          <g mask="url(#mask0_481_8045)">
            <path
              d={svgPaths.p1cebca00}
              fill="var(--fill-0, #9497A1)"
              id="double_arrow_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SidebarExpandIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="row view">
          <mask
            height="18"
            id="mask0_690_29752"
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
          <g mask="url(#mask0_690_29752)">
            <path
              d={svgPaths.p11ac00}
              fill="var(--fill-0, #9497A1)"
              id="unfold_more"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavigationSection({ 
  section, 
  onClick,
  isFirst 
}: { 
  section: NavigationSection; 
  onClick: () => void;
  isFirst?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Progress/Check Icon */}
      {section.progress === 100 ? <CheckIcon /> : <ProgressIcon progress={section.progress} />}
      
      {/* Section Content */}
      <div 
        className={`cursor-pointer transition-all duration-200 ${
          section.isActive 
            ? 'border border-[#3874ff] shadow-[0px_0px_40.5px_0px_#14203e] rounded' 
            : isHovered 
              ? 'bg-[#3a4356] rounded' 
              : ''
        }`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="box-border content-stretch flex flex-col items-start justify-center ml-10 p-[8px] w-[188px]">
          {section.isActive && (
            <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
          )}
          
          <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
              {section.id === 'jobDetails' ? (
                <JobDetailsIcon isActive={section.isActive || false} />
              ) : (
                <DocumentIcon />
              )}
            </div>
            
            <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
              <div className={`flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left w-full ${
                section.isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
              }`}>
                <p className="block leading-[18px]">{section.title}</p>
              </div>
            </div>
            
            <ArrowDropdown isExpanded={section.isExpanded || false} />
          </div>
          
          <div className={`font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-left text-nowrap w-full ${
            section.isActive ? 'text-[#cdcfd3]' : 'text-[#9497a1]'
          }`}>
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit] [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
              {`        ${section.progress} % completed`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FunctionalNavigationSidebar({
  isCollapsed: controlledCollapsed,
  onToggleCollapse,
  onSectionClick
}: FunctionalNavigationSidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [sections, setSections] = useState<NavigationSection[]>([
    { id: 'jobDetails', title: 'Job Details', progress: 100, isActive: true, isExpanded: false },
    { id: 'igmDetails', title: 'IGM Details', progress: 80, isActive: false, isExpanded: false },
    { id: 'invoiceDetails', title: 'Invoice Details', progress: 75, isActive: false, isExpanded: false },
    { id: 'itemDetails', title: 'Item Details', progress: 75, isActive: false, isExpanded: false },
    { id: 'supportingDocs', title: 'Supporting Docs', progress: 50, isActive: false, isExpanded: false },
    { id: 'statements', title: 'Statements', progress: 50, isActive: false, isExpanded: false }
  ]);

  const isCollapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  const handleToggleCollapse = () => {
    if (onToggleCollapse) {
      onToggleCollapse();
    } else {
      setInternalCollapsed(!internalCollapsed);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setSections(prevSections => 
      prevSections.map(section => ({
        ...section,
        isActive: section.id === sectionId
      }))
    );
    
    if (onSectionClick) {
      onSectionClick(sectionId);
    }
  };

  if (isCollapsed) {
    return (
      <div className="absolute bg-[#36415a] h-full w-[76px] top-0 left-0">
        <div className="h-full overflow-clip relative w-[76px]">
          {/* Header */}
          <div className="absolute bg-[#364159] h-12 left-3 top-0 w-[52px]">
            <div className="box-border content-stretch flex flex-row h-12 items-center justify-center overflow-clip p-3.5 relative w-[52px]">
              <CollapseIcon isCollapsed={isCollapsed} onClick={handleToggleCollapse} />
            </div>
            <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
          
          {/* Collapsed sections - just show icons */}
          <div className="absolute top-14 left-2 right-2 bottom-2 flex flex-col gap-2 items-center justify-start overflow-y-auto py-3">
            {sections.map((section, index) => (
              <div 
                key={section.id}
                className={`relative w-[52px] h-[40px] cursor-pointer transition-all duration-200 rounded ${
                  section.isActive 
                    ? 'border border-[#3874ff] shadow-[0px_0px_11px_1px_#272d3f]' 
                    : 'hover:bg-[#3a4356]'
                }`}
                onClick={() => handleSectionClick(section.id)}
              >
                <div className="flex items-center justify-center relative size-full">
                  <div className="p-2">
                    {section.id === 'jobDetails' ? (
                      <JobDetailsIcon isActive={section.isActive || false} />
                    ) : (
                      <DocumentIcon />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="absolute bg-[#36415a] h-full w-60 top-0 left-0">
      <div className="h-full overflow-clip relative w-60">
        {/* Header */}
        <div className="absolute bg-[#364159] h-12 left-3 top-0 w-[216px]">
          <div className="box-border content-stretch flex flex-row h-12 items-center justify-between overflow-clip px-2 py-3.5 relative w-[216px]">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
                <p className="block leading-[20px] whitespace-pre">Navigation</p>
              </div>
            </div>
            
            <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                <SidebarExpandIcon />
                <CollapseIcon isCollapsed={isCollapsed} onClick={handleToggleCollapse} />
              </div>
            </div>
          </div>
          <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Navigation Sections */}
        <div className="absolute top-12 left-0 right-0 bottom-0 overflow-y-auto py-4">
          <div className="space-y-1">
            {sections.map((section, index) => (
              <NavigationSection
                key={section.id}
                section={section}
                onClick={() => handleSectionClick(section.id)}
                isFirst={index === 0}
              />
            ))}
          </div>
          
          {/* Vertical separator line */}
          <div className="absolute flex h-[354px] items-center justify-center left-[23px] top-[47px] w-[0px]">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[354px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 354 1"
                  >
                    <line
                      id="Line 155"
                      stroke="var(--stroke-0, #535D78)"
                      x2="354"
                      y1="0.5"
                      y2="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}