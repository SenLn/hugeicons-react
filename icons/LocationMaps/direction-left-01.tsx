import * as React from "react";
import type { SVGProps } from "react";

interface DirectionLeft01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DirectionLeft01Icon = (props: DirectionLeft01IconProps) => {
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
        <path d="M6.14839 5.67914C6.82645 4.85343 7.16547 4.44058 7.62894 4.22029C8.09241 4 8.62199 4 9.68114 4H15V11H9.68114C8.62199 11 8.09241 11 7.62894 10.7797C7.16547 10.5594 6.82645 10.1466 6.14839 9.32086L5.87979 8.99376C5.29326 8.27951 5 7.92239 5 7.5C5 7.07761 5.29326 6.72048 5.87979 6.00624L6.14839 5.67914Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 21L15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 21H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DirectionLeft01Icon;
