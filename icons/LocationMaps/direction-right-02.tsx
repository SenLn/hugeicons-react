import * as React from "react";
import type { SVGProps } from "react";

interface DirectionRight02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DirectionRight02Icon = (props: DirectionRight02IconProps) => {
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
        <path d="M16.8516 5.67914C16.1736 4.85343 15.8345 4.44058 15.3711 4.22029C14.9076 4 14.378 4 13.3189 4H8C7.05719 4 6.58579 4 6.29289 4.29289C6 4.58579 6 5.05719 6 6V9C6 9.94281 6 10.4142 6.29289 10.7071C6.58579 11 7.05719 11 8 11H13.3189C14.378 11 14.9076 11 15.3711 10.7797C15.8345 10.5594 16.1736 10.1466 16.8516 9.32086L17.1202 8.99376C17.7067 8.27951 18 7.92239 18 7.5C18 7.07761 17.7067 6.72048 17.1202 6.00624L16.8516 5.67914Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 11L10 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DirectionRight02Icon;
