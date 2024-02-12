import * as React from "react";
import type { SVGProps } from "react";

interface SoilTemperatureGlobalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SoilTemperatureGlobalIcon = (props: SoilTemperatureGlobalIconProps) => {
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
        <path d="M12.832 18.0001C13.1442 17.2857 13.5374 16.6148 14 15.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.9984 8C15.6563 8 10.2992 12.217 8.57812 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.9993 4C13.4329 4 6.26423 9.98405 4.44531 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 22C20.6569 22 22 20.6569 22 19C22 18.3038 21.7629 17.663 21.365 17.154C20.861 16.5093 20.609 16.1869 20.5545 16.0286C20.5 15.8704 20.5 15.6628 20.5 15.2478V12.5C20.5 11.6716 19.8284 11 19 11C18.1716 11 17.5 11.6716 17.5 12.5V15.2478C17.5 15.6628 17.5 15.8704 17.4455 16.0286C17.391 16.1869 17.139 16.5093 16.635 17.154C16.2371 17.663 16 18.3038 16 19C16 20.6569 17.3431 22 19 22Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M2 10C2.87815 10 3.72986 10.1132 4.54134 10.3258" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 6C3.86605 6 5.64683 6.36509 7.27481 7.02772" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2C5.17533 2 8.15863 2.82221 10.7486 4.26534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SoilTemperatureGlobalIcon;
