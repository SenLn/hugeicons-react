import * as React from "react";
import type { SVGProps } from "react";

interface MayanPyramidIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MayanPyramidIcon = (props: MayanPyramidIconProps) => {
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
        <path d="M8.5 17H4C2.34533 17 2 17.3453 2 19V20C2 21.6547 2.34533 22 4 22H20C21.6547 22 22 21.6547 22 20V19C22 17.3453 21.6547 17 20 17H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12H6C4.34533 12 4 12.3453 4 14V17M15 12H18C19.6547 12 20 12.3453 20 14V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12V9C6 7.34533 6.34533 7 8 7H16C17.6547 7 18 7.34533 18 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 7V4C9 2.34533 9.34533 2 11 2H13C14.6547 2 15 2.34533 15 4V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 7L16 22M10.5 7L8 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MayanPyramidIcon;
