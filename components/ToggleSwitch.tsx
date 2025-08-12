import React from 'react';

interface ToggleSwitchProps {
  value: string;
  onValueChange: (value: string) => void;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  switchRef?: (el: HTMLButtonElement | null) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ToggleSwitch({
  value,
  onValueChange,
  tabIndex,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  switchRef,
  className = "",
  style = {}
}: ToggleSwitchProps) {
  const isYes = value === 'Yes';
  
  const handleToggle = () => {
    onValueChange(isYes ? 'No' : 'Yes');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`} style={style}>
      <button
        ref={switchRef}
        type="button"
        className="h-[12px] relative shrink-0 w-[25px] focus:outline-none focus:ring-1 focus:ring-[#3874FF] transition-all duration-200"
        style={{ 
          borderRadius: '10px',
          backgroundColor: 'white'
        }}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        aria-checked={isYes}
        role="switch"
        aria-label={`Toggle ${value}`}
      >
        <div className="absolute inset-0">
          <svg
            className="block w-full h-full transition-all duration-200"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 12"
          >
            <g>
              <rect
                fill={isYes ? "#00B196" : "#CF3B3B"}
                height="12"
                rx="6"
                width="25"
                x="0"
                y="0"
                className="transition-colors duration-200"
              />
              <g filter="url(#filter0_d_toggle)">
                <circle 
                  cx={isYes ? "19" : "6"} 
                  cy="6" 
                  fill="white" 
                  r="3"
                  className="transition-all duration-200"
                />
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="12"
                id="filter0_d_toggle"
                width="12"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_toggle"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_toggle"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </button>
      <div className="font-['Inter'] font-normal text-[#050e25] text-[14px] text-left whitespace-nowrap">
        {value || 'No'}
      </div>
    </div>
  );
}