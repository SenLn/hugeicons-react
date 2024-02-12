import * as React from "react";
import type { SVGProps } from "react";

interface PentagonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PentagonIcon = (props: PentagonIconProps) => {
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
        <path d="M6.20832 5.4051C8.97801 3.13503 10.3629 2 12 2C13.6371 2 15.022 3.13503 17.7917 5.4051L18.0484 5.61553C20.334 7.48877 21.4767 8.42539 21.8628 9.74129C22.2488 11.0572 21.7895 12.4503 20.8709 15.2364L20.6883 15.7901C19.7073 18.7654 19.2169 20.2531 18.0264 21.1054C16.3758 22.2872 13.9003 21.9578 12 21.9578C8.82548 21.9578 7.16404 21.9578 5.97359 21.1054C4.78315 20.2531 4.29266 18.7654 3.31167 15.7901L3.12909 15.2364C2.21048 12.4503 1.75117 11.0572 2.13722 9.74129C2.52326 8.42539 3.66603 7.48877 5.95157 5.61553L6.20832 5.4051Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default PentagonIcon;
