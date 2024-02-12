import * as React from "react";
import type { SVGProps } from "react";

interface Knowledge01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Knowledge01Icon = (props: Knowledge01IconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M20.9998 16H4.89113C4.40355 16 4.0423 16.1723 3.75757 16.4515C3.28913 16.9108 3.12083 17.5901 3.04657 18.2429C2.96065 18.9982 2.99167 19.6886 3.20248 20.4377C3.43762 21.2734 4.02149 22 4.88667 22H20.9998M19.4061 22C17.8674 20.5885 17.2354 18.1421 19.4061 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.8176 6.5C11.8176 4 9.10929 3 9.10929 3M11.8176 6.92131C11.8176 6.92131 5.85938 3.85577 5.85938 8.90819C5.85938 13.9606 8.57044 16 9.65094 16C10.5128 16 11.0212 14.9913 11.8176 14.9913C12.6139 14.9913 12.9008 16 13.9841 16C15.0647 16 17.7757 13.9606 17.7757 8.90819C17.7757 3.85578 11.8176 6.92131 11.8176 6.92131ZM12.3593 6C12.3593 2.01035 14.3103 3 15.2858 2C16.2614 4.5 14.9556 5.00259 12.3593 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Knowledge01Icon;
