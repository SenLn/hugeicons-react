import * as React from "react";
import type { SVGProps } from "react";

interface HierarchySquare10IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HierarchySquare10Icon = (props: HierarchySquare10IconProps) => {
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
        <path d="M2 20C2 19.0572 2 18.5858 2.29289 18.2929C2.58579 18 3.05719 18 4 18H5C5.94281 18 6.41421 18 6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22H4C3.05719 22 2.58579 22 2.29289 21.7071C2 21.4142 2 20.9428 2 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 20C17 19.0572 17 18.5858 17.2929 18.2929C17.5858 18 18.0572 18 19 18H20C20.9428 18 21.4142 18 21.7071 18.2929C22 18.5858 22 19.0572 22 20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22H19C18.0572 22 17.5858 22 17.2929 21.7071C17 21.4142 17 20.9428 17 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.5 17.5C19.5 14.1907 18.8525 13.5 15.75 13.5H14.5M4.5 17.5C4.5 14.1907 5.1475 13.5 8.25 13.5H9.5M12 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default HierarchySquare10Icon;
