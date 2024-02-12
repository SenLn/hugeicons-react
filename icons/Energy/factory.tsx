import * as React from "react";
import type { SVGProps } from "react";

interface FactoryIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FactoryIcon = (props: FactoryIconProps) => {
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
        <path d="M9 13.5V9C9 8.05719 9 7.58579 8.70711 7.29289C8.41421 7 7.94281 7 7 7H5C4.05719 7 3.58579 7 3.29289 7.29289C3 7.58579 3 8.05719 3 9V18C3 19.8856 3 20.8284 3.58579 21.4142C4.17157 22 5.11438 22 7 22H9M9 13.5L12.3167 11.8416C13.4174 11.2913 13.9678 11.0161 14.3942 11.199C14.4853 11.2381 14.57 11.2905 14.6457 11.3545C15 11.6541 15 12.2694 15 13.5L18.1056 11.9472C19.4028 11.2986 20.0515 10.9743 20.5257 11.2674C21 11.5605 21 12.2857 21 13.7361V18C21 19.8856 21 20.8284 20.4142 21.4142C19.8284 22 18.8856 22 17 22H9M9 13.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 10H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 2H8C7.05719 2 6.58579 2 6.29289 2.29289C6 2.58579 6 3.05719 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 5L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FactoryIcon;
