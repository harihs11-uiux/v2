import React from 'react';
import svgPaths from "./svg-k7ngnc034v";
import imgEllipse2899Stroke from "figma:asset/f829b75328f4e4027c5a0d82a38713fd5603c8b2.png";
import { imgPersonAdd } from "./svg-tll2h";

interface DropdownListProps {
  onAction?: (action: string) => void;
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="edit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="edit">
          <mask
            height="18"
            id="mask0_198_508"
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
          <g mask="url(#mask0_198_508)">
            <path
              d={svgPaths.p21f4e080}
              fill="var(--fill-0, #9497A1)"
              id="edit_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option1({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div 
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer" 
      data-name="Option 1"
      onClick={() => onAction?.('edit')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <Edit />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewHistory() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="View History">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="View History">
          <mask
            height="18"
            id="mask0_198_504"
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
          <g mask="url(#mask0_198_504)">
            <path
              d={svgPaths.p1c96b400}
              fill="var(--fill-0, #9497A1)"
              id="contract"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option2({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div 
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer" 
      data-name="Option 2"
      onClick={() => onAction?.('view-checklist')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <ViewHistory />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">View Checklist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventList() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="event_list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="event_list">
          <mask
            height="18"
            id="mask0_198_473"
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
          <g mask="url(#mask0_198_473)">
            <path
              d={svgPaths.p1892d000}
              fill="var(--fill-0, #9497A1)"
              id="event_list_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option3({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div 
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer" 
      data-name="Option 3"
      onClick={() => onAction?.('view-status')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <EventList />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">View Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="add_circle">
          <mask
            height="18"
            id="mask0_198_477"
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
          <g mask="url(#mask0_198_477)">
            <path
              d={svgPaths.p3865e500}
              fill="var(--fill-0, white)"
              id="add_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option34({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div
      className="bg-[#3874ff] relative shrink-0 w-full hover:bg-[#2563eb] transition-colors cursor-pointer"
      data-name="Option 34"
      onClick={() => onAction?.('add-status')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <Add />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">Add Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalShipping() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="local_shipping">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="local_shipping">
          <mask
            height="18"
            id="mask0_198_464"
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
          <g mask="url(#mask0_198_464)">
            <path
              d={svgPaths.p18031600}
              fill="var(--fill-0, #9497A1)"
              id="local_shipping_2"
            />
            <path
              d={svgPaths.p3776db00}
              fill="var(--fill-0, #9497A1)"
              id="bolt"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option35({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer"
      data-name="Option 35"
      onClick={() => onAction?.('fetch-igm')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <LocalShipping />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">Fetch IGM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadToESanchit() {
  return (
    <div className="relative shrink-0 size-4" data-name="upload to e-sanchit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="upload to e-sanchit">
          <g id="icon">
            <mask
              height="16"
              id="mask0_198_487"
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
            <g mask="url(#mask0_198_487)">
              <path
                d={svgPaths.p390f2700}
                fill="var(--fill-0, #9497A1)"
                id="upload_file"
              />
              <path
                d={svgPaths.p1876f900}
                fill="var(--fill-0, #9497A1)"
                id="e"
              />
            </g>
          </g>
          <path d={svgPaths.p9648600} fill="var(--fill-0, #9497A1)" id="bolt" />
        </g>
      </svg>
    </div>
  );
}

function Option36({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer"
      data-name="Option 36"
      onClick={() => onAction?.('fetch-irn')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <UploadToESanchit />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">Fetch IRN</p>
          </div>
        </div>
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
            id="mask0_198_469"
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
          <g mask="url(#mask0_198_469)">
            <path
              d={svgPaths.p1d998b00}
              fill="var(--fill-0, #9497A1)"
              id="person_add_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="icon">
      <PersonAdd />
    </div>
  );
}

function AssignedTo() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Assigned to">
      <Icon1 />
      <div
        className="absolute left-0.5 size-3.5 top-0.5"
        data-name="Ellipse 2899 (Stroke)"
      >
        <img
          className="block max-w-none size-full"
          height="14"
          src={imgEllipse2899Stroke}
          width="14"
        />
      </div>
    </div>
  );
}

function Option37({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer"
      data-name="Option 37"
      onClick={() => onAction?.('assigned-to')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <AssignedTo />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">Assigned To</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="info">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="info">
          <mask
            height="18"
            id="mask0_198_483"
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
          <g mask="url(#mask0_198_483)">
            <path
              d={svgPaths.p8b4de80}
              fill="var(--fill-0, #9497A1)"
              id="info_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option38({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer"
      data-name="Option 38"
      onClick={() => onAction?.('view-job-info')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <Info />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">View Job Info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Duplicate() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="duplicate">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="duplicate">
          <mask
            height="18"
            id="mask0_198_496"
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
          <g mask="url(#mask0_198_496)">
            <path
              d={svgPaths.p19afbe00}
              fill="var(--fill-0, #9497A1)"
              id="control_point_duplicate"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option4({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div 
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer" 
      data-name="Option 4"
      onClick={() => onAction?.('duplicate')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <Duplicate />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
            <p className="block leading-[18px]">Duplicate Job</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cancel() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="cancel">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 18 18"
      >
        <g id="cancel">
          <mask
            height="18"
            id="mask0_198_500"
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
          <g mask="url(#mask0_198_500)">
            <path
              d={svgPaths.p2bb39d70}
              fill="var(--fill-0, #CF3B3B)"
              id="cancel_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Option5({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div 
      className="bg-[#050e25] relative shrink-0 w-full hover:bg-[#3874ff] transition-colors cursor-pointer" 
      data-name="Option 5"
      onClick={() => onAction?.('cancel')}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[8px] relative w-full">
          <Cancel />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#cf3b3b] text-[14px] text-left">
            <p className="block leading-[18px]">Cancel Job</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List({ onAction }: { onAction?: (action: string) => void }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="List"
    >
      <Option1 onAction={onAction} />
      <Option2 onAction={onAction} />
      <Option3 onAction={onAction} />
      <Option34 onAction={onAction} />
      <Option35 onAction={onAction} />
      <Option36 onAction={onAction} />
      <Option37 onAction={onAction} />
      <Option38 onAction={onAction} />
      <Option4 onAction={onAction} />
      <Option5 onAction={onAction} />
    </div>
  );
}

export default function DropdownList({ onAction }: DropdownListProps) {
  return (
    <div
      className="bg-[#050e25] box-border content-stretch flex flex-row items-start justify-start px-0 py-2 relative rounded shadow-[0px_0px_11px_0px_rgba(52,60,79,0.46)] size-full"
      data-name="Dropdown List"
    >
      <List onAction={onAction} />
    </div>
  );
}