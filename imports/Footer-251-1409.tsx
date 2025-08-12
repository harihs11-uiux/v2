function Cancel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative rounded shrink-0"
      data-name="Cancel"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function AcceptChanges() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative rounded shrink-0"
      data-name="Accept Changes"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">{`Save  Changes`}</p>
      </div>
    </div>
  );
}

function ActionButtonGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Button Group"
    >
      <Cancel />
      <AcceptChanges />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#ebeef7] relative size-full" data-name="Footer">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-6 py-2 relative size-full">
          <ActionButtonGroup />
        </div>
      </div>
    </div>
  );
}