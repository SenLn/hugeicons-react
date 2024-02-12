import * as React from "react";
import type { SVGProps } from "react";

interface CameraMicrophone02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CameraMicrophone02Icon = (props: CameraMicrophone02IconProps) => {
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
        <path d="M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.4917 14.5151C8.81115 15.3978 9.82639 16.9334 11.9783 17.0123M11.9783 17.0123C12.6842 17.0123 14.5995 16.7532 15.5086 14.5151M11.9783 17.0123V18.497" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.2534 11.2413C10.2534 10.2812 11.0317 9.50293 11.9918 9.50293C12.9519 9.50293 13.7302 10.2812 13.7302 11.2413V13.2581C13.7302 14.2182 12.9519 14.9965 11.9918 14.9965C11.0317 14.9965 10.2534 14.2182 10.2534 13.2581V11.2413Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CameraMicrophone02Icon;
