import svgPaths from "./svg-77um7spoaq";

function XlUploadDigitalSignatureEyePasswordCopyCount() {
  return (
    <div
      className="relative rounded-[3px] shrink-0 size-[18px]"
      data-name="XL Upload/digital signature/eye password/Copy/Count"
    >
      <div className="overflow-clip relative size-[18px]">
        <div
          className="absolute size-1 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          data-name="+"
          style={{ left: "calc(50% - 4px)" }}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 4 4"
          >
            <path d={svgPaths.pe24f280} fill="var(--fill-0, #626776)" id="+" />
          </svg>
        </div>
        <div className="absolute bottom-[5.556%] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[44.444%] not-italic right-[11.111%] text-[#626776] text-[12px] text-center top-[5.556%]">
          <p className="block leading-[18px]">9</p>
        </div>
      </div>
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

export default function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative size-full"
      data-name="No. of Icons"
    >
      <XlUploadDigitalSignatureEyePasswordCopyCount />
    </div>
  );
}