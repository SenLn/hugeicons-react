import * as React from "react";
import type { SVGProps } from "react";

interface AlphabetThaiIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlphabetThaiIcon = (props: AlphabetThaiIconProps) => {
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
        <path d="M6 21V14C6 13.371 6.24724 12.8125 6.74172 12.248C7.22967 11.671 8.25411 11.2708 9 11.0472C9.04786 11.0329 9.05246 10.9458 9.00628 10.9257C8.3551 10.6418 7.06568 10.2569 6.5674 9.59877C6.55409 9.58118 6.54743 9.57239 6.54632 9.57095C6.54521 9.5695 6.50377 9.5164 6.4209 9.41019C6 8.87077 6 7.80847 6 7.80847C6 5.93718 7.27312 4.43992 8.75497 3.69556C9.65563 3.23185 10.7241 3 11.9603 3C13.0375 3 14.0353 3.20161 14.9536 3.60484C16.9456 4.43574 18 6.43605 18 8.71573V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlphabetThaiIcon;
