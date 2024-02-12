import * as React from "react";
import type { SVGProps } from "react";

interface LeftToRightBlockQuoteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LeftToRightBlockQuoteIcon = (props: LeftToRightBlockQuoteIconProps) => {
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
        <path d="M9 6L17 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 18L17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 3L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LeftToRightBlockQuoteIcon;
