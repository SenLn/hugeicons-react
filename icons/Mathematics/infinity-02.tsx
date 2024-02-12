import * as React from "react";
import type { SVGProps } from "react";

interface Infinity02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Infinity02Icon = (props: Infinity02IconProps) => {
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
        <path d="M12 12C12 12 10.3569 15 8.7 15C7.04315 15 6 13.6569 6 12C6 10.3431 7.04315 9 8.7 9C10.3569 9 12 12 12 12ZM12 12C12 12 13.6431 15 15.3 15C16.9569 15 18 13.6569 18 12C18 10.3431 16.9569 9 15.3 9C13.6431 9 12 12 12 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Infinity02Icon;
