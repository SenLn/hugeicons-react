import * as React from "react";
import type { SVGProps } from "react";

interface AirdropIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AirdropIcon = (props: AirdropIconProps) => {
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
        <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 17.001C2.74418 15.3295 2 13.2516 2 11C2 5.47715 6.47715 1 12 1C17.5228 1 22 5.47715 22 11C22 13.2516 21.2558 15.3295 20 17.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.52779 15C6.57771 13.9385 6 12.5367 6 11C6 7.68629 8.68629 5 12 5C15.3137 5 18 7.68629 18 11C18 12.5367 17.4223 13.9385 16.4722 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.95154 17.8759C10.7222 16.758 11.1076 16.199 11.6078 16.0553C11.8644 15.9816 12.1356 15.9816 12.3922 16.0553C12.8924 16.199 13.2778 16.758 14.0485 17.8759C15.074 19.3633 15.5867 20.1071 15.488 20.727C15.4379 21.0414 15.2938 21.3315 15.076 21.5565C14.6465 22 13.7643 22 12 22C10.2357 22 9.35352 22 8.92399 21.5565C8.70617 21.3315 8.56205 21.0414 8.512 20.727C8.4133 20.1071 8.92605 19.3633 9.95154 17.8759Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AirdropIcon;
