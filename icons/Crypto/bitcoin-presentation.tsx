import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinPresentationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinPresentationIcon = (props: BitcoinPresentationIconProps) => {
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
        <path d="M12 19L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V4C2 4.4714 2 4.70711 2.14645 4.85355C2.29289 5 2.5286 5 3 5H21C21.4714 5 21.7071 5 21.8536 4.85355C22 4.70711 22 4.4714 22 4V3C22 2.5286 22 2.29289 21.8536 2.14645C21.7071 2 21.4714 2 21 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 5V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10H16M14 14L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.9375 14.6667L6.9375 9.33333M8.5 9.33333V8M8.5 16V14.6667M6.9375 12H10.0625M10.0625 12C10.5803 12 11 12.4477 11 13V13.6667C11 14.219 10.5803 14.6667 10.0625 14.6667H6M10.0625 12C10.5803 12 11 11.5523 11 11V10.3333C11 9.78105 10.5803 9.33333 10.0625 9.33333H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinPresentationIcon;
