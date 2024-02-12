import * as React from "react";
import type { SVGProps } from "react";

interface HangingClockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HangingClockIcon = (props: HangingClockIconProps) => {
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
        <circle cx="17.5" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="15.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
        <path d="M17.5 6V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
        <path d="M2 6V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
        <path d="M2 20C2 13.3726 7.37258 8 14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel" />
        <path d="M18.5 16.5L17.5 16V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HangingClockIcon;
