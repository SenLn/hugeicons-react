import * as React from "react";
import type { SVGProps } from "react";

interface MarketAnalysisIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MarketAnalysisIcon = (props: MarketAnalysisIconProps) => {
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
        <path d="M14 16V8C14 7.05719 14 6.58579 13.7071 6.29289C13.4142 6 12.9428 6 12 6C11.0572 6 10.5858 6 10.2929 6.29289C10 6.58579 10 7.05719 10 8V16C10 16.9428 10 17.4142 10.2929 17.7071C10.5858 18 11.0572 18 12 18C12.9428 18 13.4142 18 13.7071 17.7071C14 17.4142 14 16.9428 14 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 9V7C21 6.05719 21 5.58579 20.7071 5.29289C20.4142 5 19.9428 5 19 5C18.0572 5 17.5858 5 17.2929 5.29289C17 5.58579 17 6.05719 17 7V9C17 9.94281 17 10.4142 17.2929 10.7071C17.5858 11 18.0572 11 19 11C19.9428 11 20.4142 11 20.7071 10.7071C21 10.4142 21 9.94281 21 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14V12C7 11.0572 7 10.5858 6.70711 10.2929C6.41421 10 5.94281 10 5 10C4.05719 10 3.58579 10 3.29289 10.2929C3 10.5858 3 11.0572 3 12V14C3 14.9428 3 15.4142 3.29289 15.7071C3.58579 16 4.05719 16 5 16C5.94281 16 6.41421 16 6.70711 15.7071C7 15.4142 7 14.9428 7 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 13L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5L19 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 18L5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MarketAnalysisIcon;
