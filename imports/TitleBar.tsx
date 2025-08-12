import svgPaths from "./svg-1x7ayzh42k";

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
            id="mask0_251_161"
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
          <g mask="url(#mask0_251_161)">
            <path
              d={svgPaths.p4280c0}
              fill="var(--fill-0, #9497A1)"
              id="close_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function TitleBar() {
  return (
    <div className="bg-[#1f2432] relative size-full" data-name="Title Bar">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between p-[16px] relative size-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative self-stretch shrink-0 text-[#ffffff] text-[14px] text-left w-[156px]">
            <p className="block leading-[18px]">Customize Table View</p>
          </div>
          <Close />
        </div>
      </div>
    </div>
  );
}