import * as React from "react";
import type { SVGProps } from "react";

interface StrokeCenterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StrokeCenterIcon = (props: StrokeCenterIconProps) => {
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
        <path d="M8 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13L15 13C13.1144 13 12.1716 13 11.5858 12.4142C11 11.8284 11 10.8856 11 9V6C11 4.11438 11 3.17157 10.4142 2.58579C9.82843 2 8.88562 2 7 2L6 2C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6L2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16.5C10 17.8807 8.88071 19 7.5 19C6.11929 19 5 17.8807 5 16.5C5 15.1193 6.11929 14 7.5 14C8.88071 14 10 15.1193 10 16.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.5 10V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 17.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default StrokeCenterIcon;
