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

function Textfield() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Textfield"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start px-2 py-1.5 relative w-full">
          <div className="basis-0 grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#050e25] text-[0px] text-left">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic">
              <span className="text-[14px]">015</span>
              <span className="css-po3kg2 text-[#cf3b3b] text-[7.74px]">●</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueType() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Value Type"
    >
      <Textfield />
    </div>
  );
}

function NoOfValueRows() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-1px] p-0 relative shrink-0"
      data-name="No of Value Rows"
    >
      <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none" />
      <ValueType />
    </div>
  );
}

export default function LabelValue() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-px py-0 relative size-full"
      data-name="Label & Value"
    >
      <TableCell />
      <NoOfValueRows />
    </div>
  );
}