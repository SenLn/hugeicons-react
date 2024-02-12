import * as React from "react";
import type { SVGProps } from "react";

interface Honey02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Honey02Icon = (props: Honey02IconProps) => {
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
        <path d="M7.44828 3.5H6M20 3.5H11.5M11.5 2V5M7.44828 2V5M9.5 1V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.6 9L13.8963 9.36014C14.938 10.626 15.4588 11.259 15.7294 12.0089C16 12.7589 16 13.5695 16 15.1906V18.3333C16 20.5332 16 21.6332 15.2971 22.3166C14.5941 23 13.4627 23 11.2 23H8.8C6.53726 23 5.40589 23 4.70294 22.3166C4 21.6332 4 20.5332 4 18.3333V15.1906C4 13.5695 4 12.7589 4.27058 12.0089C4.54117 11.259 5.062 10.626 6.10366 9.36014L6.4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 15V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Honey02Icon;
