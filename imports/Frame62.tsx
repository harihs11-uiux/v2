import svgPaths from "./svg-qzrmx8urz2";
import imgEllipse2899Stroke from "figma:asset/c115c2e6907fc91592330f363e6abed34abbbc19.png";
import { imgPersonAdd } from "./svg-jkeh6";

function TableCell() {
  return (
    <div
      className="bg-[rgba(221,227,242,0.42)] box-border content-stretch flex flex-row gap-1 items-start justify-start mr-[-1px] px-2 py-1.5 relative shrink-0 w-[150px]"
      data-name="Table Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          Select Branch
        </p>
      </div>
    </div>
  );
}

function LabelValue() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px pl-0 pr-px py-0 relative shrink-0"
      data-name="Label & Value"
    >
      <TableCell />
    </div>
  );
}

function TableCell1() {
  return (
    <div
      className="bg-[rgba(221,227,242,0.42)] box-border content-stretch flex flex-row gap-1 h-full items-start justify-start mr-[-1px] px-2 py-1.5 relative shrink-0 w-[150px]"
      data-name="Table Cell"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[18px] overflow-inherit whitespace-pre">
          Assign to
        </p>
      </div>
    </div>
  );
}

function PersonAdd() {
  return (
    <div
      className="absolute left-[5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px] mask-size-[18px_18px] size-2 top-[5px]"
      data-name="person_add"
      style={{ maskImage: `url('${imgPersonAdd}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="person_add">
          <mask
            height="8"
            id="mask0_301_4809"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="8"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="8"
              id="Bounding box"
              width="8"
            />
          </mask>
          <g mask="url(#mask0_301_4809)">
            <path
              d={svgPaths.p2453e400}
              fill="var(--fill-0, #626776)"
              id="person_add_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute contents left-0 top-0" data-name="icon">
      <PersonAdd />
    </div>
  );
}

function AssignedTo() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Assigned to">
      <Icon />
      <div
        className="absolute left-px size-4 top-px"
        data-name="Ellipse 2899 (Stroke)"
      >
        <img
          className="block max-w-none size-full"
          height="16"
          src={imgEllipse2899Stroke}
          width="16"
        />
      </div>
    </div>
  );
}

function Textfield() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Textfield"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start px-2 py-1.5 relative size-full">
          <AssignedTo />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#050e25] text-[14px] text-left">
            <p className="block leading-[18px]">Select User</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueType() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Value Type"
    >
      <Textfield />
    </div>
  );
}

function NoOfValueRows() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px mr-[-1px] p-0 relative shrink-0"
      data-name="No of Value Rows"
    >
      <div className="absolute border-[#d0d5e3] border-[1px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ValueType />
    </div>
  );
}

function LabelValue1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow h-[30px] items-start justify-start min-h-px min-w-px pl-0 pr-px py-0 relative shrink-0"
      data-name="Label & Value"
    >
      <TableCell1 />
      <NoOfValueRows />
    </div>
  );
}

export default function Frame62() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
      <LabelValue />
      <LabelValue1 />
    </div>
  );
}