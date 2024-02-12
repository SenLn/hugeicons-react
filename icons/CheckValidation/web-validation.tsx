import * as React from "react";
import type { SVGProps } from "react";

interface WebValidationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WebValidationIcon = (props: WebValidationIconProps) => {
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
        <path d="M20.9992 10C20.9907 6.41543 20.8861 4.52814 19.6088 3.31802C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.31802C2 4.63604 2 6.75736 2 11C2 15.2426 2 17.364 3.39124 18.682C4.61763 19.8438 6.50289 19.9815 10 19.9978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 8.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.49981 5.5H6.50879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4998 5.5H10.5088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WebValidationIcon;
