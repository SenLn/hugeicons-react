import * as React from "react";
import type { SVGProps } from "react";

interface Motion02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Motion02Icon = (props: Motion02IconProps) => {
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
        <path d="M11 16.5C11 14.4438 11 13.4158 11.4421 12.65C11.7318 12.1483 12.1483 11.7318 12.65 11.4421C13.4158 11 14.4438 11 16.5 11C18.5562 11 19.5842 11 20.35 11.4421C20.8517 11.7318 21.2682 12.1483 21.5579 12.65C22 13.4158 22 14.4438 22 16.5C22 18.5562 22 19.5842 21.5579 20.35C21.2682 20.8517 20.8517 21.2682 20.35 21.5579C19.5842 22 18.5562 22 16.5 22C14.4438 22 13.4158 22 12.65 21.5579C12.1483 21.2682 11.7318 20.8517 11.4421 20.35C11 19.5842 11 18.5562 11 16.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.51338 15C8.02667 14.9537 7.66602 14.8628 7.35723 14.6845C6.94458 14.4463 6.60191 14.1036 6.36367 13.6909C6 13.0611 6 12.2154 6 10.5241C6 8.83277 6 7.98712 6.36367 7.35723C6.60191 6.94458 6.94458 6.60191 7.35723 6.36367C7.98712 6 8.83277 6 10.5241 6C12.2154 6 13.0611 6 13.6909 6.36367C14.1036 6.60191 14.4463 6.94458 14.6845 7.35723C14.8628 7.66602 14.9537 8.02667 15 8.51338" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.41611 9C2.93863 8.85544 2.53522 8.4968 2.28817 8.07057C2 7.57339 2 6.9059 2 5.57093C2 4.23595 2 3.56846 2.28817 3.07128C2.47696 2.74557 2.7485 2.4751 3.07548 2.28705C3.57462 2 4.24473 2 5.58495 2C6.92516 2 7.59527 2 8.09441 2.28705C8.49574 2.51785 8.84255 2.88838 9 3.32758" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Motion02Icon;
