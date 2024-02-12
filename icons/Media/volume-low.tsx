import * as React from "react";
import type { SVGProps } from "react";

interface VolumeLowIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VolumeLowIcon = (props: VolumeLowIconProps) => {
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
        <path d="M19 9C19.6254 9.81968 20 10.8634 20 12C20 13.1366 19.6254 14.1803 19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 14.8135V9.18646C16 6.04126 16 4.46866 15.0747 4.0773C14.1494 3.68593 13.0603 4.79793 10.8823 7.02192C9.75439 8.17365 9.11085 8.42869 7.50604 8.42869C6.10257 8.42869 5.40084 8.42869 4.89675 8.77262C3.85035 9.48655 4.00852 10.882 4.00852 12C4.00852 13.118 3.85035 14.5134 4.89675 15.2274C5.40084 15.5713 6.10257 15.5713 7.50604 15.5713C9.11085 15.5713 9.75439 15.8264 10.8823 16.9781C13.0603 19.2021 14.1494 20.3141 15.0747 19.9227C16 19.5313 16 17.9587 16 14.8135Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VolumeLowIcon;
