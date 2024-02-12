import * as React from "react";
import type { SVGProps } from "react";

interface BowTieIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BowTieIcon = (props: BowTieIconProps) => {
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
        <path d="M10 9.5022C9 8.50179 6.02143 5.77926 4.66065 6.01432C1.11312 6.62711 1.11312 17.3771 4.66065 17.9899C6.02143 18.2249 9 15.5025 10 14.5021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9.5022C15 8.50179 17.9786 5.77926 19.3393 6.01432C22.8869 6.62711 22.8869 17.3771 19.3393 17.9899C17.9786 18.2249 15 15.5025 14 14.5022" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 12.002C9.5 9.90315 10.1219 9.00195 12 9.00195C13.749 9.00195 14.5 9.74822 14.5 12.002C14.5 14.1008 13.8781 15.002 12 15.002C10.1219 15.002 9.5 14.1008 9.5 12.002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12.002H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12.002H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BowTieIcon;
