import * as React from "react";
import type { SVGProps } from "react";

interface SunriseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunriseIcon = (props: SunriseIconProps) => {
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
        <path d="M9.5 6.5C9.99153 5.9943 11.2998 4 12 4M14.5 6.5C14.0085 5.9943 12.7002 4 12 4M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.3633 10.6357L16.9491 12.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 17H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.63657 10.6356L7.05078 12.0498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 20H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SunriseIcon;
