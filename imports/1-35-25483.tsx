import svgPaths from "./svg-bb5l8dekl8";
import imgIllustration8 from "figma:asset/1b62ada9c624c20db7361d404db952a594676541.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
            fill="url(#paint0_linear_35_25487)"
            id="Logo_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_35_25487"
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

function Textfield({ value, onChange, placeholder }: { value?: string; onChange?: (value: string) => void; placeholder?: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-3 relative shrink-0 w-[209px] group"
      data-name="Textfield"
    >
      <div className="absolute border-[#eff0f1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none group-hover:border-b-blue-500 group-focus-within:border-b-blue-500 transition-colors duration-200" />
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder || "Enter organization code"}
        className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-left text-nowrap bg-transparent border-none outline-none placeholder:text-gray-400"
        style={{ lineHeight: "16px" }}
      />
    </div>
  );
}

function Textfield1({ value, onChange, placeholder }: { value?: string; onChange?: (value: string) => void; placeholder?: string }) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 group"
      data-name="Textfield"
    >
      <div className="absolute border-[#eff0f1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none group-hover:border-b-blue-500 group-focus-within:border-b-blue-500 transition-colors duration-200" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-3 relative w-full">
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder || "Enter Username"}
            className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-left text-nowrap bg-transparent border-none outline-none placeholder:text-gray-400"
            style={{ lineHeight: "16px" }}
          />
        </div>
      </div>
    </div>
  );
}

function OrganizationCodeAndUsername({ orgValue, onOrgChange, usernameValue, onUsernameChange }: { 
  orgValue?: string; 
  onOrgChange?: (value: string) => void;
  usernameValue?: string;
  onUsernameChange?: (value: string) => void;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-[444px]"
      data-name="Organization Code and Username"
    >
      <Textfield 
        value={orgValue}
        onChange={onOrgChange}
        placeholder="Organization Code"
      />
      <Textfield1 
        value={usernameValue}
        onChange={onUsernameChange}
        placeholder="Username"
      />
    </div>
  );
}

function Textfield2({ value, onChange, placeholder }: { value?: string; onChange?: (value: string) => void; placeholder?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-3 relative shrink-0 w-[444px] group"
      data-name="Textfield"
    >
      <div className="absolute border-[#eff0f1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none group-hover:border-b-blue-500 group-focus-within:border-b-blue-500 transition-colors duration-200" />
      <input
        type={showPassword ? "text" : "password"}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder || "Enter password"}
        className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[16px] text-left text-nowrap bg-transparent border-none outline-none placeholder:text-gray-400"
        style={{ lineHeight: "16px" }}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="flex items-center justify-center w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200 shrink-0"
      >
        {showPassword ? (
          <EyeOff size={16} />
        ) : (
          <Eye size={16} />
        )}
      </button>
    </div>
  );
}

function EnterPassword({ passwordValue, onPasswordChange }: { passwordValue?: string; onPasswordChange?: (value: string) => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-end justify-start p-0 relative shrink-0"
      data-name="Enter Password"
    >
      <Textfield2 
        value={passwordValue}
        onChange={onPasswordChange}
        placeholder="Enter password"
      />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Forgot Password ?</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-4 py-2 relative rounded shrink-0 w-[444px] cursor-pointer hover:bg-[#2563eb] transition-colors duration-200"
      data-name="Button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Sign In</p>
      </div>
    </button>
  );
}

function Fields({ 
  orgValue, 
  onOrgChange, 
  usernameValue, 
  onUsernameChange,
  passwordValue,
  onPasswordChange,
  onSignIn
}: { 
  orgValue?: string; 
  onOrgChange?: (value: string) => void;
  usernameValue?: string;
  onUsernameChange?: (value: string) => void;
  passwordValue?: string;
  onPasswordChange?: (value: string) => void;
  onSignIn?: () => void;
}) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-1/2 p-0 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Fields"
    >
      <H1Text1 />
      <OrganizationCodeAndUsername 
        orgValue={orgValue}
        onOrgChange={onOrgChange}
        usernameValue={usernameValue}
        onUsernameChange={onUsernameChange}
      />
      <EnterPassword 
        passwordValue={passwordValue}
        onPasswordChange={onPasswordChange}
      />
      <Button onClick={onSignIn} />
    </div>
  );
}

function FormPanel({ 
  orgValue, 
  onOrgChange, 
  usernameValue, 
  onUsernameChange,
  passwordValue,
  onPasswordChange,
  onSignIn
}: { 
  orgValue?: string; 
  onOrgChange?: (value: string) => void;
  usernameValue?: string;
  onUsernameChange?: (value: string) => void;
  passwordValue?: string;
  onPasswordChange?: (value: string) => void;
  onSignIn?: () => void;
}) {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Form Panel"
    >
      <Fields 
        orgValue={orgValue}
        onOrgChange={onOrgChange}
        usernameValue={usernameValue}
        onUsernameChange={onUsernameChange}
        passwordValue={passwordValue}
        onPasswordChange={onPasswordChange}
        onSignIn={onSignIn}
      />
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

function Body({ 
  orgValue, 
  onOrgChange, 
  usernameValue, 
  onUsernameChange,
  passwordValue,
  onPasswordChange,
  onSignIn
}: { 
  orgValue?: string; 
  onOrgChange?: (value: string) => void;
  usernameValue?: string;
  onUsernameChange?: (value: string) => void;
  passwordValue?: string;
  onPasswordChange?: (value: string) => void;
  onSignIn?: () => void;
}) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row inset-6 items-start justify-start p-0"
      data-name="Body"
    >
      <Frame41993 />
      <FormPanel 
        orgValue={orgValue}
        onOrgChange={onOrgChange}
        usernameValue={usernameValue}
        onUsernameChange={onUsernameChange}
        passwordValue={passwordValue}
        onPasswordChange={onPasswordChange}
        onSignIn={onSignIn}
      />
    </div>
  );
}

export default function Component1({ 
  orgValue, 
  onOrgChange, 
  usernameValue, 
  onUsernameChange,
  passwordValue,
  onPasswordChange,
  onSignIn
}: { 
  orgValue?: string; 
  onOrgChange?: (value: string) => void;
  usernameValue?: string;
  onUsernameChange?: (value: string) => void;
  passwordValue?: string;
  onPasswordChange?: (value: string) => void;
  onSignIn?: () => void;
}) {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="1">
      <div className="relative size-full">
        <Body 
          orgValue={orgValue}
          onOrgChange={onOrgChange}
          usernameValue={usernameValue}
          onUsernameChange={onUsernameChange}
          passwordValue={passwordValue}
          onPasswordChange={onPasswordChange}
          onSignIn={onSignIn}
        />
      </div>
      <div className="absolute border border-[#eff0f1] border-solid inset-0 pointer-events-none" />
    </div>
  );
}