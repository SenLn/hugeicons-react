import * as React from "react";
import type { SVGProps } from "react";

interface DigestionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DigestionIcon = (props: DigestionIconProps) => {
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
        <path d="M9.48457 2C9.72845 3.49019 10.4411 4.57432 12.475 3.87202C16.6773 2.42099 19.9986 6.8491 19.9986 10.8C19.9986 14.7765 17.353 18 14.0895 18H13.0247C10.492 18 8.27593 19.6321 7.45312 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.0058 2V2.77557C6.0058 6.57844 11.4279 9.38737 9.63736 13.1999C8.92581 14.715 4.89483 17.2931 4 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7C14.9576 7.29708 15.711 8.04937 16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DigestionIcon;
