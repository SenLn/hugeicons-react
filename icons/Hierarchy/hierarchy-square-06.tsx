import * as React from "react";
import type { SVGProps } from "react";

interface HierarchySquare06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HierarchySquare06Icon = (props: HierarchySquare06IconProps) => {
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
        <path d="M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 19.5C2 18.3215 2 17.7322 2.36612 17.3661C2.73223 17 3.32149 17 4.5 17C5.67851 17 6.26777 17 6.63388 17.3661C7 17.7322 7 18.3215 7 19.5C7 20.6785 7 21.2678 6.63388 21.6339C6.26777 22 5.67851 22 4.5 22C3.32149 22 2.73223 22 2.36612 21.6339C2 21.2678 2 20.6785 2 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 19.5C17 18.3215 17 17.7322 17.3661 17.3661C17.7322 17 18.3215 17 19.5 17C20.6785 17 21.2678 17 21.6339 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.6339 21.6339C21.2678 22 20.6785 22 19.5 22C18.3215 22 17.7322 22 17.3661 21.6339C17 21.2678 17 20.6785 17 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 12.5C14.5 13.8807 13.3807 15 12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7V10M9.5 13L4.5 17M14.5 13L19.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HierarchySquare06Icon;
