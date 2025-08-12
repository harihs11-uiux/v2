function Switch() {
  return (
    <div className="h-3 relative shrink-0 w-[25px]" data-name="Switch">
      <div className="absolute bottom-[-35%] left-[-16.8%] right-0 top-[-35%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 30 22"
        >
          <g id="Switch">
            <rect
              fill="var(--fill-0, #CF3B3B)"
              height="12"
              id="Base"
              rx="6"
              width="25"
              x="5"
              y="5"
            />
            <g filter="url(#filter0_d_990_3331)" id="Indicator">
              <circle cx="11" cy="11" fill="var(--fill-0, white)" r="4" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="20.4"
              id="filter0_d_990_3331"
              width="20.4"
              x="0.8"
              y="0.8"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_990_3331"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_990_3331"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ToogleSwitch() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative shrink-0"
      data-name="Toogle Switch"
    >
      <Switch />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">No</p>
      </div>
    </div>
  );
}

export default function ValueType() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full"
      data-name="Value Type"
    >
      <ToogleSwitch />
    </div>
  );
}