import * as React from "react";
import type { SVGProps } from "react";

interface ChinaTempleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChinaTempleIcon = (props: ChinaTempleIconProps) => {
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
        <path d="M22 12C19.6 12 17.6667 10.6667 17 10H7C6.33333 10.6667 4.4 12 2 12L2.17082 12.3416C2.679 13.358 3.71779 14 4.8541 14H19.1459C20.2822 14 21.321 13.358 21.8292 12.3416L22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 4C17.547 4 16.265 3.51128 15.3316 2.97766C14.3479 2.41529 13.8561 2.13411 13.6037 2.06705C13.3513 2 13.0153 2 12.3431 2H11.6569C10.9847 2 10.6487 2 10.3963 2.06705C10.1439 2.13411 9.65207 2.41529 8.66839 2.97766C7.735 3.51128 6.45303 4 5 4L5.17082 4.34164C5.679 5.35799 6.71779 6 7.8541 6H16.1459C17.2822 6 18.321 5.35799 18.8292 4.34164L19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 10V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 10V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 22V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 22V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 22V19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ChinaTempleIcon;
