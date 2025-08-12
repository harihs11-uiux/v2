import svgPaths from "./svg-lkfmxqowmz";
import imgDragDrop1 from "figma:asset/2268d98a623615bf571c0d3239235f81e9bad801.png";

function IconSkeleton10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="Icon Skeleton 10">
          <mask
            height="18"
            id="mask0_351_1676"
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
          <g mask="url(#mask0_351_1676)">
            <path
              d={svgPaths.p2816c8c0}
              fill="var(--fill-0, white)"
              id="file_upload"
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
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <IconSkeleton10 />
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

function Button() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center leading-[0] px-4 py-2 relative rounded shrink-0"
      data-name="Button"
    >
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Upload</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0"
      data-name="Button Group"
    >
      <Button />
    </div>
  );
}

function Action() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Action"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[16px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{`Drag & Drop Files`}</p>
      </div>
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-center text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{`Upload Pre Alert Documents here `}</p>
      </div>
      <ButtonGroup />
    </div>
  );
}

interface EmptyStateMessageProps {
  onUploadClick?: () => void;
  fileType?: string;
}

export default function EmptyStateMessage({ onUploadClick, fileType = "files" }: EmptyStateMessageProps) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-full"
      data-name="Empty State message"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[120px] shrink-0 w-[186px]"
        data-name="Drag & Drop 1"
        style={{ backgroundImage: `url('${imgDragDrop1}')` }}
      />
      <div
        className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0"
        data-name="Action"
      >
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[16px] text-center text-nowrap">
          <p className="block leading-[20px] whitespace-pre">{`Drag & Drop Files`}</p>
        </div>
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#626776] text-[14px] text-center text-nowrap">
          <p className="block leading-[20px] whitespace-pre">{`Upload ${fileType} here`}</p>
        </div>
        <div
          className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0"
          data-name="Button Group"
        >
          <div
            className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center leading-[0] px-4 py-2 relative rounded shrink-0 cursor-pointer hover:bg-[#2563eb] transition-colors"
            data-name="Button"
            onClick={onUploadClick}
          >
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
              data-name="Icon Left"
            >
              <div
                className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
                data-name="No. of Icons /1/12 px/18 px"
              >
                <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    role="presentation"
                    viewBox="0 0 18 18"
                  >
                    <g id="Icon Skeleton 10">
                      <mask
                        height="18"
                        id="mask0_351_1676"
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
                      <g mask="url(#mask0_351_1676)">
                        <path
                          d={svgPaths.p2816c8c0}
                          fill="var(--fill-0, white)"
                          id="file_upload"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
              <p className="block leading-[18px] whitespace-pre">Upload</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}