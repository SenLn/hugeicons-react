import * as React from "react";
import type { SVGProps } from "react";

interface LeftToRightListTriangleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LeftToRightListTriangleIcon = (props: LeftToRightListTriangleIconProps) => {
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
        <path d="M11 5.5L21 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.4 16.8926C6.46667 17.607 7 17.9642 7 18.5C7 19.0358 6.46667 19.393 5.4 20.1074C4.33333 20.8218 3.8 21.1789 3.4 20.9111C3 20.6432 3 19.9288 3 18.5C3 17.0712 3 16.3568 3.4 16.0889C3.8 15.8211 4.33333 16.1782 5.4 16.8926Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.4 3.89263C6.46667 4.60702 7 4.96421 7 5.5C7 6.03579 6.46667 6.39298 5.4 7.10737C4.33333 7.82176 3.8 8.17895 3.4 7.91105C3 7.64316 3 6.92877 3 5.5C3 4.07123 3 3.35684 3.4 3.08895C3.8 2.82105 4.33333 3.17824 5.4 3.89263Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 18.5L21 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LeftToRightListTriangleIcon;
