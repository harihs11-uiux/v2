import svgPaths from "./svg-1n680u8o78";
import { useState, useEffect } from "react";



function FilerHeader() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full"
      data-name="Filer Header"
    >
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-0 mt-[9px] not-italic relative text-[#ffffff] text-[14px] text-left translate-y-[-50%] w-[286px]">
        <p className="block leading-[18px]">Filter by Job Number</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="icon">
          <mask
            height="16"
            id="mask0_111_5305"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_111_5305)">
            <path
              d={svgPaths.p18195a80}
              fill="var(--fill-0, #9497A1)"
              id="search"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-4"
      data-name="search"
    >
      <Icon />
    </div>
  );
}

function IconRight() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Right"
    >
      <Search />
    </div>
  );
}

function SearchTextbox({ searchTerm, setSearchTerm }: { searchTerm: string, setSearchTerm: (value: string) => void }) {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#242c40] box-border content-stretch flex flex-row items-center justify-start ml-0 mt-0 p-[8px] relative rounded w-[286px]"
      data-name="Search Textbox"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by Job Number"
        className="basis-0 bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal grow min-h-px min-w-px not-italic text-[#9497a1] text-[14px] text-left placeholder:text-[#9497a1]"
      />
      <IconRight />
    </div>
  );
}

function Row1({ searchTerm, setSearchTerm }: { searchTerm: string, setSearchTerm: (value: string) => void }) {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full"
      data-name="Row 1"
    >
      <SearchTextbox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

function SearchParameters({ searchTerm, setSearchTerm }: { searchTerm: string, setSearchTerm: (value: string) => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Search Parameters"
    >
      <Row1 searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

function Search1({ searchTerm, setSearchTerm }: { searchTerm: string, setSearchTerm: (value: string) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Search">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-0 relative w-full">
          <FilerHeader />
          <SearchParameters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </div>
  );
}

function ResultPanel({ filteredJobs }: { filteredJobs: string[] }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Result Panel">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-2 py-0 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">{filteredJobs.length} results</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p208b5c80}
            fill="var(--fill-0, #626776)"
            id="indeterminate_check_box"
          />
        </g>
      </svg>
    </div>
  );
}

function SelectAll({ 
  isAllSelected, 
  isIndeterminate, 
  onSelectAll 
}: { 
  isAllSelected: boolean, 
  isIndeterminate: boolean, 
  onSelectAll: () => void 
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 cursor-pointer"
      data-name="Select All"
      onClick={onSelectAll}
    >
      <div className="relative shrink-0 size-4">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <g>
            <path
              d={isIndeterminate ? svgPaths.p208b5c80 : isAllSelected ? svgPaths.p6acadc0 : svgPaths.p37b9e500}
              fill={isIndeterminate ? "#626776" : isAllSelected ? "#3874FF" : "#626776"}
            />
          </g>
        </svg>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9497a1] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Select All</p>
      </div>
    </div>
  );
}

function BulkSelectDetails({ 
  selectedJobs, 
  filteredJobs, 
  onSelectAll 
}: { 
  selectedJobs: Set<string>, 
  filteredJobs: string[], 
  onSelectAll: () => void 
}) {
  const isAllSelected = filteredJobs.length > 0 && filteredJobs.every(job => selectedJobs.has(job));
  const isIndeterminate = selectedJobs.size > 0 && !isAllSelected;

  return (
    <div className="relative shrink-0 w-full" data-name="Bulk Select Details">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-2 py-0 relative w-full">
          <SelectAll 
            isAllSelected={isAllSelected} 
            isIndeterminate={isIndeterminate} 
            onSelectAll={onSelectAll}
          />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9497a1] text-[12px] text-nowrap text-right">
            <p className="block leading-[16px] whitespace-pre">
              {selectedJobs.size} items selected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p6acadc0}
            fill="var(--fill-0, #3874FF)"
            id="check_box"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxSpacing() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-0.5 relative shrink-0"
      data-name="Checkbox Spacing"
    >
      <Checkbox1 />
    </div>
  );
}

function ListItem({ 
  jobNumber, 
  isSelected, 
  onToggleSelection 
}: { 
  jobNumber: string, 
  isSelected: boolean, 
  onToggleSelection: (jobNumber: string) => void 
}) {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="List">
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div 
          className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full cursor-pointer"
          onClick={() => onToggleSelection(jobNumber)}
        >
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-0.5 relative shrink-0">
            <div className="relative shrink-0 size-4">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
              >
                <g>
                  <path
                    d={isSelected ? svgPaths.p6acadc0 : svgPaths.p37b9e500}
                    fill={isSelected ? "#3874FF" : "#626776"}
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">{jobNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p6acadc0}
            fill="var(--fill-0, #3874FF)"
            id="check_box"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxSpacing1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-0.5 relative shrink-0"
      data-name="Checkbox Spacing"
    >
      <Checkbox2 />
    </div>
  );
}

function List1() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="List">
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <CheckboxSpacing1 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left">
            <p className="block leading-[16px] text-[14px]">ICB/12345/2023-24</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #626776)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxSpacing2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-0.5 relative shrink-0"
      data-name="Checkbox Spacing"
    >
      <Checkbox3 />
    </div>
  );
}

function List2() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="List">
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <CheckboxSpacing2 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">ICB/12345/2023-24</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Checkbox">
          <path
            d={svgPaths.p37b9e500}
            fill="var(--fill-0, #626776)"
            id="check_box_outline_blank"
          />
        </g>
      </svg>
    </div>
  );
}

function CheckboxSpacing9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-0.5 relative shrink-0"
      data-name="Checkbox Spacing"
    >
      <Checkbox10 />
    </div>
  );
}

function List9() {
  return (
    <div className="bg-[#050e25] relative shrink-0 w-full" data-name="List">
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <CheckboxSpacing9 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left">
            <p className="block leading-[16px]">99384492349</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollBar() {
  return (
    <div
      className="absolute h-[52px] right-0 top-0 w-1.5"
      data-name="Scroll Bar"
    >
      <div
        className="absolute bg-[#32394c] inset-0 rounded-[22px]"
        data-name="Vertical Bar"
      />
    </div>
  );
}

function Lists({ 
  filteredJobs, 
  selectedJobs, 
  onToggleSelection 
}: { 
  filteredJobs: string[], 
  selectedJobs: Set<string>, 
  onToggleSelection: (jobNumber: string) => void 
}) {
  return (
    <div
      className="bg-[#242c40] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative shrink-0 w-full max-h-[300px] overflow-y-auto"
      data-name="Lists"
    >
      {filteredJobs.map((jobNumber) => (
        <ListItem 
          key={jobNumber}
          jobNumber={jobNumber}
          isSelected={selectedJobs.has(jobNumber)}
          onToggleSelection={onToggleSelection}
        />
      ))}
      <ScrollBar />
    </div>
  );
}

function Content({ 
  filteredJobs, 
  selectedJobs, 
  onToggleSelection,
  onSelectAll 
}: { 
  filteredJobs: string[], 
  selectedJobs: Set<string>, 
  onToggleSelection: (jobNumber: string) => void,
  onSelectAll: () => void 
}) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <BulkSelectDetails 
        selectedJobs={selectedJobs} 
        filteredJobs={filteredJobs} 
        onSelectAll={onSelectAll}
      />
      <Lists 
        filteredJobs={filteredJobs} 
        selectedJobs={selectedJobs} 
        onToggleSelection={onToggleSelection}
      />
    </div>
  );
}

function FilterResults({ 
  filteredJobs, 
  selectedJobs, 
  onToggleSelection,
  onSelectAll 
}: { 
  filteredJobs: string[], 
  selectedJobs: Set<string>, 
  onToggleSelection: (jobNumber: string) => void,
  onSelectAll: () => void 
}) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Filter Results"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start px-2 py-0 relative size-full">
          <ResultPanel filteredJobs={filteredJobs} />
          <Content 
            filteredJobs={filteredJobs} 
            selectedJobs={selectedJobs} 
            onToggleSelection={onToggleSelection}
            onSelectAll={onSelectAll}
          />
        </div>
      </div>
    </div>
  );
}

function FilterBy({ 
  searchTerm, 
  setSearchTerm,
  filteredJobs, 
  selectedJobs, 
  onToggleSelection,
  onSelectAll 
}: { 
  searchTerm: string, 
  setSearchTerm: (value: string) => void,
  filteredJobs: string[], 
  selectedJobs: Set<string>, 
  onToggleSelection: (jobNumber: string) => void,
  onSelectAll: () => void 
}) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Filter by"
    >
      <Search1 searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterResults 
        filteredJobs={filteredJobs} 
        selectedJobs={selectedJobs} 
        onToggleSelection={onToggleSelection}
        onSelectAll={onSelectAll}
      />
    </div>
  );
}

function Body({ 
  searchTerm, 
  setSearchTerm,
  filteredJobs, 
  selectedJobs, 
  onToggleSelection,
  onSelectAll 
}: { 
  searchTerm: string, 
  setSearchTerm: (value: string) => void,
  filteredJobs: string[], 
  selectedJobs: Set<string>, 
  onToggleSelection: (jobNumber: string) => void,
  onSelectAll: () => void 
}) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Body"
    >
      <FilterBy 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filteredJobs={filteredJobs} 
        selectedJobs={selectedJobs} 
        onToggleSelection={onToggleSelection}
        onSelectAll={onSelectAll}
      />
    </div>
  );
}

function FilterSort({ 
  searchTerm, 
  setSearchTerm,
  filteredJobs, 
  selectedJobs, 
  onToggleSelection,
  onSelectAll 
}: { 
  searchTerm: string, 
  setSearchTerm: (value: string) => void,
  filteredJobs: string[], 
  selectedJobs: Set<string>, 
  onToggleSelection: (jobNumber: string) => void,
  onSelectAll: () => void 
}) {
  return (
    <div
      className="basis-0 bg-[#050e25] box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px overflow-clip px-0 py-4 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Filter & Sort"
    >
      <Body 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filteredJobs={filteredJobs} 
        selectedJobs={selectedJobs} 
        onToggleSelection={onToggleSelection}
        onSelectAll={onSelectAll}
      />
    </div>
  );
}

function TertiaryButton({ onCancel }: { onCancel: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[#1a1e2e]"
      data-name="Tertiary Button"
      onClick={onCancel}
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button({ onApply }: { onApply: () => void }) {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[#2d5dd1]"
      data-name="Button"
      onClick={onApply}
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Apply</p>
      </div>
    </div>
  );
}

function PrimarySecondaryButton({ onApply }: { onApply: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Primary & Secondary Button"
    >
      <Button onApply={onApply} />
    </div>
  );
}

function Footer({ onCancel, onApply }: { onCancel: () => void, onApply: () => void }) {
  return (
    <div
      className="bg-[#050e25] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
      data-name="Footer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-2 pr-4 py-4 relative w-full">
          <TertiaryButton onCancel={onCancel} />
          <PrimarySecondaryButton onApply={onApply} />
        </div>
      </div>
    </div>
  );
}

export default function FiltersSort({ onApplyFilter }: { onApplyFilter?: (selectedJobs: string[]) => void }) {
  // Sample job numbers - in real implementation, these would come from props or API
  const allJobs = [
    "ICB/12345/2023-24",
    "ICB/12346/2023-24",
    "ICB/12347/2023-24",
    "ICB/12348/2023-24",
    "ICB/12349/2023-24",
    "ICB/12350/2023-24",
    "ICB/12351/2023-24",
    "ICB/12352/2023-24",
    "ICB/12353/2023-24",
    "ICB/12354/2023-24",
    "99384492349",
    "99384492350",
    "99384492351"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobs, setSelectedJobs] = useState<Set<string>>(new Set());

  // Filter jobs based on search term
  const filteredJobs = allJobs.filter(job => 
    job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle individual job selection
  const handleToggleSelection = (jobNumber: string) => {
    const newSelected = new Set(selectedJobs);
    if (newSelected.has(jobNumber)) {
      newSelected.delete(jobNumber);
    } else {
      newSelected.add(jobNumber);
    }
    setSelectedJobs(newSelected);
  };

  // Handle select all functionality
  const handleSelectAll = () => {
    const isAllSelected = filteredJobs.every(job => selectedJobs.has(job));
    const newSelected = new Set(selectedJobs);
    
    if (isAllSelected) {
      // Deselect all filtered jobs
      filteredJobs.forEach(job => newSelected.delete(job));
    } else {
      // Select all filtered jobs
      filteredJobs.forEach(job => newSelected.add(job));
    }
    
    setSelectedJobs(newSelected);
  };

  // Handle cancel
  const handleCancel = () => {
    setSearchTerm("");
    setSelectedJobs(new Set());
  };

  // Handle apply filter
  const handleApply = () => {
    if (onApplyFilter) {
      onApplyFilter(Array.from(selectedJobs));
    }
  };

  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Filters & Sort"
    >
      <FilterSort 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredJobs={filteredJobs}
        selectedJobs={selectedJobs}
        onToggleSelection={handleToggleSelection}
        onSelectAll={handleSelectAll}
      />
      <Footer 
        onCancel={handleCancel}
        onApply={handleApply}
      />
    </div>
  );
}