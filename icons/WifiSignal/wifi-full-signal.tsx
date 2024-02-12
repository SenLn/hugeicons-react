import * as React from "react";
import type { SVGProps } from "react";

interface WifiFullSignalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WifiFullSignalIcon = (props: WifiFullSignalIconProps) => {
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
        <path d="M20.5126 10.7306L15.1758 18.009C13.7137 20.003 12.9827 21 12 21C11.0173 21 10.2863 20.003 8.82421 18.009L3.48742 10.7306C2.40801 9.25847 1.86831 8.52241 2.02741 7.57659C2.18651 6.63078 2.81754 6.2161 4.07962 5.38675C6.38289 3.87318 9.0958 3 12 3C14.9042 3 17.6171 3.87318 19.9204 5.38675C21.1825 6.2161 21.8135 6.63078 21.9726 7.57659C22.1317 8.52241 21.592 9.25847 20.5126 10.7306Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 14C14.6871 11.3333 9.31293 11.3333 5 14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 11C15.4548 7 8.54519 7 3 11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 17C13.465 15.6667 10.535 15.6667 8 17" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default WifiFullSignalIcon;
