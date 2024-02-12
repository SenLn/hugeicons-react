import * as React from "react";
import type { SVGProps } from "react";

interface InsertPiIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InsertPiIcon = (props: InsertPiIconProps) => {
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
        <path d="M3 8.8C3 7 5.06126 5.2 7.68468 5.2L16.9574 5.2C19.2 5.2 21 3.85 21 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 5.5L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 5.5C9.86667 8.5625 9.6 14.25 9.2 16C8.8 17.75 8 19.5 6 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 16.1667V17.5M17 17.5V18.8333M17 17.5H18.3333M17 17.5H15.6667M21 17.5C21 19.7091 19.2091 21.5 17 21.5C14.7909 21.5 13 19.7091 13 17.5C13 15.2909 14.7909 13.5 17 13.5C19.2091 13.5 21 15.2909 21 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default InsertPiIcon;
