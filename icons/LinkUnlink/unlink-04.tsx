import * as React from "react";
import type { SVGProps } from "react";

interface Unlink04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Unlink04Icon = (props: Unlink04IconProps) => {
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
        <path d="M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 16H18.9211M16 21L16 18.9211" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8H5.07889M8 3L8 5.07889" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Unlink04Icon;
