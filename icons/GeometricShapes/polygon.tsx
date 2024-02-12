import * as React from "react";
import type { SVGProps } from "react";

interface PolygonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PolygonIcon = (props: PolygonIconProps) => {
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
        <path d="M2 14.0147V9.98528C2 8.75903 2 8.1459 2.22836 7.59459C2.45672 7.04328 2.89027 6.60973 3.75736 5.74264L5.74264 3.75736C6.60973 2.89027 7.04328 2.45672 7.59459 2.22836C8.1459 2 8.75903 2 9.98528 2H14.0147C15.241 2 15.8541 2 16.4054 2.22836C16.9567 2.45672 17.3903 2.89027 18.2574 3.75736L20.2426 5.74264C21.1097 6.60973 21.5433 7.04328 21.7716 7.59459C22 8.1459 22 8.75903 22 9.98528V14.0147C22 15.241 22 15.8541 21.7716 16.4054C21.5433 16.9567 21.1097 17.3903 20.2426 18.2574L18.2574 20.2426C17.3903 21.1097 16.9567 21.5433 16.4054 21.7716C15.8541 22 15.241 22 14.0147 22H9.98528C8.75903 22 8.1459 22 7.59459 21.7716C7.04328 21.5433 6.60973 21.1097 5.74264 20.2426L3.75736 18.2574C2.89027 17.3903 2.45672 16.9567 2.22836 16.4054C2 15.8541 2 15.241 2 14.0147Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PolygonIcon;
