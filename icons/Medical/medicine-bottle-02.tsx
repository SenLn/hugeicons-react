import * as React from "react";
import type { SVGProps } from "react";

interface MedicineBottle02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MedicineBottle02Icon = (props: MedicineBottle02IconProps) => {
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
        <path d="M10 22C7.11661 22 5.79151 22 4.89576 21.1213C4 20.2426 4 18.8284 4 16L4 14.0915C4 13.3414 4 12.9664 4.06806 12.6055C4.13682 12.241 4.25689 11.8877 4.42484 11.5556C4.59109 11.2269 4.8205 10.9269 5.27932 10.3268L5.69059 9.78885C5.91617 9.49381 6.02897 9.34628 6.11714 9.19848C6.57719 8.42732 6.66287 7.49515 6.35088 6.6557C6.29108 6.49481 6.20701 6.32987 6.03887 6M14.1943 6C14.0262 6.32986 13.9421 6.49481 13.8823 6.6557C13.5703 7.49515 13.656 8.42732 14.1161 9.19848C14.2042 9.34628 14.317 9.49381 14.5426 9.78885C14.987 10.37 15.6538 10.8691 16 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.06845 2H12.9316C13.8529 2 14.3135 2 14.5997 2.29289C15.1334 2.83907 15.1334 5.16093 14.5997 5.70711C14.3135 6 13.8529 6 12.9316 6H7.06845C6.14715 6 5.6865 6 5.40029 5.70711C4.86657 5.16093 4.86657 2.83907 5.40029 2.29289C5.6865 2 6.14715 2 7.06845 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.5367 14.9058C20.2456 16.3057 20.4961 18.8259 19.0962 20.5348C17.6963 22.2436 15.1761 22.4941 13.4672 21.0942M18.5367 14.9058C16.8278 13.5059 14.3077 13.7564 12.9078 15.4652C11.5078 17.1741 11.7583 19.6943 13.4672 21.0942M18.5367 14.9058L13.4672 21.0942" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MedicineBottle02Icon;
