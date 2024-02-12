import * as React from "react";
import type { SVGProps } from "react";

interface CircleLockRemove01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleLockRemove01Icon = (props: CircleLockRemove01IconProps) => {
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
        <path d="M10.5 22C6.55227 22 3.5 18.866 3.5 15C3.5 11.134 6.70027 8 10.648 8C13.4128 8 15.811 9.53725 17 11.7866" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 9V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 22L17 18.5M17 18.5L20.5 15M17 18.5L13.5 15M17 18.5L20.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CircleLockRemove01Icon;
