import svgPaths from "./svg-f5ihzzsm3t";
import imgEllipse2899Stroke from "figma:asset/9df4c21221efbbf7110355917e18e7dceb8e275e.png";
import { imgPersonAdd } from "./svg-ajy0y";

function PersonAdd() {
  return (
    <div
      className="absolute left-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px] mask-size-[18px_18px] size-2.5 top-1"
      data-name="person_add"
      style={{ maskImage: `url('${imgPersonAdd}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g id="person_add">
          <mask
            height="10"
            id="mask0_966_135"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="10"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="10"
              id="Bounding box"
              width="10"
            />
          </mask>
          <g mask="url(#mask0_966_135)">
            <path
              d={svgPaths.p7a53d00}
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
        className="absolute left-0 size-[18px] top-0"
        data-name="Ellipse 2899 (Stroke)"
      >
        <img
          className="block max-w-none size-full"
          height="18"
          src={imgEllipse2899Stroke}
          width="18"
        />
      </div>
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 items-center justify-start left-0 p-0 top-0"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <AssignedTo />
    </div>
  );
}

export default function IconLeft() {
  return (
    <div className="relative size-full" data-name="Icon Left">
      <NoOfIcons112Px18Px />
    </div>
  );
}