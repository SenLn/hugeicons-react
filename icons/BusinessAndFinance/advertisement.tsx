import * as React from "react";
import type { SVGProps } from "react";

interface AdvertisementIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AdvertisementIcon = (props: AdvertisementIconProps) => {
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
        <path d="M5.50586 15.9916L8.03146 9.02875C8.49073 8.06222 9.19305 7.26286 9.99777 9.17999C10.7406 10.9497 11.8489 14.1903 12.5031 15.9954M6.65339 13.002H11.3215" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.46447 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.46447 19.682C4.92893 21 7.28596 21 12 21C16.714 21 19.0711 21 20.5355 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.5355 4.31802C19.0711 3 16.714 3 12 3C7.28596 3 4.92893 3 3.46447 4.31802Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4843 8.98682V11.9815M18.4843 11.9815V15.9252M18.4843 11.9815H16.466C16.2263 11.9815 15.9885 12.0261 15.7645 12.113C14.0707 12.7702 14.0707 15.2124 15.7645 15.8696C15.9885 15.9565 16.2263 16.0011 16.466 16.0011H18.4843" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AdvertisementIcon;
