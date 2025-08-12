import svgPaths from "./svg-weaydteed9";
import imgIllustration8 from "figma:asset/1b62ada9c624c20db7361d404db952a594676541.png";

function H1Text() {
  return (
    <div
      className="absolute contents leading-[0] left-1/2 text-center translate-x-[-50%] translate-y-[-50%]"
      data-name="H1 text"
      style={{ top: "calc(50% + 190px)" }}
    >
      <div
        className="absolute font-['Manrope:Bold',_sans-serif] font-bold leading-[58px] left-1/2 text-[#222a3f] text-[42px] translate-x-[-50%] w-[608px]"
        style={{ top: "calc(50% + 82px)" }}
      >
        <p className="block mb-0">At the forefront</p>
        <p className="block">of Innovation in logistics</p>
      </div>
      <div
        className="absolute font-['Manrope:Medium',_sans-serif] font-medium left-1/2 text-[#5f6368] text-[16px] translate-x-[-50%] w-[582px]"
        style={{ top: "calc(50% + 214px)" }}
      >
        <p className="block leading-[28px]">{` We are a 15 year old Technology company based in Chennai with a vision for Supply chain and Logistics and at the forefront of the next disruption in the Customs Brokerage Industry. `}</p>
      </div>
    </div>
  );
}

function Frame41993() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="absolute bg-gradient-to-b from-[#fcfdff] from-[21.011%] inset-0 rounded-2xl to-[#dde3f266]" />
      <H1Text />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[350px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[538px]"
        data-name="Illustration 8"
        style={{
          top: "calc(50% - 123px)",
          backgroundImage: `url('${imgIllustration8}')`,
        }}
      />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[46px] relative shrink-0 w-[123px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 123 46"
      >
        <g id="Logo">
          <path
            d={svgPaths.p295a3680}
            fill="url(#paint0_linear_2_325)"
            id="Logo_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_325"
            x1="7.49286e-08"
            x2="123.041"
            y1="25.8866"
            y2="23.7336"
          >
            <stop stopColor="#005575" />
            <stop offset="1" stopColor="#01314A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function H1Text1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="H1 Text"
    >
      <Logo />
      <div className="font-['Manrope:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#626776] text-[20px] text-left text-nowrap">
        <p className="block leading-[32px] whitespace-pre">
          Sign in to your account
        </p>
      </div>
    </div>
  );
}

function Textfield() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-3 relative shrink-0 w-[209px]"
      data-name="Textfield"
    >
      <div className="absolute border-[#eff0f1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          UNI
        </p>
      </div>
    </div>
  );
}

function Textfield1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Textfield"
    >
      <div className="absolute border-[#eff0f1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-3 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
              1097
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganizationCodeAndUsername() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-[444px]"
      data-name="Organization Code and Username"
    >
      <Textfield />
      <Textfield1 />
    </div>
  );
}

function Textfield2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-3 relative shrink-0 w-[444px]"
      data-name="Textfield"
    >
      <div className="absolute border-[#eff0f1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          ************
        </p>
      </div>
    </div>
  );
}

function EnterPassword() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-end justify-start p-0 relative shrink-0"
      data-name="Enter Password"
    >
      <Textfield2 />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Forgot Password ?</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-4 py-2 relative rounded shrink-0 w-[444px]"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function Fields() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Fields"
    >
      <H1Text1 />
      <OrganizationCodeAndUsername />
      <EnterPassword />
      <Button />
    </div>
  );
}

function FormPanel() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Form Panel"
    >
      <Fields />
      <div className="absolute bottom-[19px] font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-4 not-italic text-[#626776] text-[12px] text-left text-nowrap translate-y-[100%]">
        <p className="block leading-[18px] whitespace-pre">{`© 2025 Unifo Pvt Ltd `}</p>
      </div>
      <div className="absolute bottom-[18px] font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic right-[200px] text-[#3874ff] text-[12px] text-left text-nowrap translate-x-[100%] translate-y-[100%]">
        <p className="block leading-[18px] whitespace-pre">{`Terms & Conditions`}</p>
      </div>
      <div className="absolute bottom-[18px] font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic right-20 text-[#3874ff] text-[12px] text-left text-nowrap translate-x-[100%] translate-y-[100%]">
        <p className="block leading-[18px] whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row inset-6 items-start justify-start p-0"
      data-name="Body"
    >
      <Frame41993 />
      <FormPanel />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="1">
      <div className="relative size-full">
        <Body />
      </div>
      <div className="absolute border border-[#eff0f1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}