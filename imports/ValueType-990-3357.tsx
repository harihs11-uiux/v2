function Switch() {
  return (
    <div className="h-3 relative shrink-0 w-[25px]" data-name="Switch">
      <div className="absolute bottom-[-8.33%] left-0 right-[-4%] top-[-8.33%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26 14"
        >
          <g id="Switch">
            <rect
              fill="var(--fill-0, #00B196)"
              height="12"
              id="Base"
              rx="6"
              width="25"
              y="1"
            />
            <g filter="url(#filter0_d_990_3365)" id="Indicator">
              <circle cx="19" cy="7" fill="var(--fill-0, white)" r="4" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="14"
              id="filter0_d_990_3365"
              width="14"
              x="12"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_990_3365"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_990_3365"
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
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Toogle Switch"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative w-full">
          <Switch />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Yes</p>
          </div>
        </div>
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