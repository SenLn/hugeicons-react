import * as React from "react";
import type { SVGProps } from "react";

interface Structure04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Structure04Icon = (props: Structure04IconProps) => {
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
        <path d="M2 12C2 9.518 2.518 9 5 9H7C9.482 9 10 9.518 10 12C10 14.482 9.482 15 7 15H5C2.518 15 2 14.482 2 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 7C14 4.518 14.518 4 17 4H19C21.482 4 22 4.518 22 7C22 9.482 21.482 10 19 10H17C14.518 10 14 9.482 14 7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 17C14 14.518 14.518 14 17 14H19C21.482 14 22 14.518 22 17C22 19.482 21.482 20 19 20H17C14.518 20 14 19.482 14 17Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 7L11 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Structure04Icon;
