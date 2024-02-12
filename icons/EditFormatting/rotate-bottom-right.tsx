import * as React from "react";
import type { SVGProps } from "react";

interface RotateBottomRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateBottomRightIcon = (props: RotateBottomRightIconProps) => {
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
        <path d="M15 17C18.2998 17 19.9497 17 20.9749 15.9749C22 14.9497 22 13.2998 22 10C22 6.70017 22 5.05025 20.9749 4.02513C19.9497 3 18.2998 3 15 3C11.7002 3 10.0503 3 9.02513 4.02513C8 5.05025 8 6.70017 8 10C8 13.2998 8 14.9497 9.02513 15.9749C10.0503 17 11.7002 17 15 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 14.4201L3.11013 13.0744C3.70104 12.3581 3.99649 12 4.36364 12L4.36364 13C4.36364 16.7712 4.36364 18.6569 5.53521 19.8284C6.70678 21 8.5924 21 12.3636 21L13 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateBottomRightIcon;
