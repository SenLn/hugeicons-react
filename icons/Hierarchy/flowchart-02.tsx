import * as React from "react";
import type { SVGProps } from "react";

interface Flowchart02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Flowchart02Icon = (props: Flowchart02IconProps) => {
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
        <path d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 6V10M10 12H8C6.11438 12 5.17157 12 4.58579 12.5858C4 13.1716 4 14.1144 4 16V18M6 20H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4C10 2.34533 10.3453 2 12 2H16C17.6547 2 18 2.34533 18 4C18 5.65467 17.6547 6 16 6H12C10.3453 6 10 5.65467 10 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12C10 10.3453 10.3453 10 12 10H16C17.6547 10 18 10.3453 18 12C18 13.6547 17.6547 14 16 14H12C10.3453 14 10 13.6547 10 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 20C10 18.3453 10.3453 18 12 18H16C17.6547 18 18 18.3453 18 20C18 21.6547 17.6547 22 16 22H12C10.3453 22 10 21.6547 10 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 12C19.8856 12 20.8284 12 21.4142 11.4142C22 10.8284 22 9.88562 22 8C22 6.11438 22 5.17157 21.4142 4.58579C20.8284 4 19.8856 4 18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Flowchart02Icon;
