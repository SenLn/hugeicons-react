import * as React from "react";
import type { SVGProps } from "react";

interface BombIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BombIcon = (props: BombIconProps) => {
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
        <path d="M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8.5L11.4685 7.17126C11.3094 6.77352 11.2299 6.57465 11.1227 6.40981C10.8287 5.95761 10.3645 5.64333 9.83543 5.53829C9.64256 5.5 9.42838 5.5 9 5.5C8.57162 5.5 8.35744 5.5 8.16457 5.53829C7.63553 5.64333 7.17133 5.95761 6.87732 6.40981C6.77014 6.57465 6.69059 6.77352 6.5315 7.17126L6 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 7.5L20.5 6M20.5 6L19 4.5M20.5 6L19 7.5M20.5 6L22 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 5.99993C14 5.99993 14.4095 3.43983 11.8598 2.26722C9.61977 1.23706 8.77077 3.40757 9.05199 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BombIcon;
