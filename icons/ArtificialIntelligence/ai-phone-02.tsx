import * as React from "react";
import type { SVGProps } from "react";

interface AiPhone02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiPhone02Icon = (props: AiPhone02IconProps) => {
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
        <path d="M20.25 6.75L18 9L16 9M19.5 6.75C19.5 7.16421 19.8358 7.5 20.25 7.5C20.6642 7.5 21 7.16421 21 6.75C21 6.33579 20.6642 6 20.25 6C19.8358 6 19.5 6.33579 19.5 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.25 17.25L18 15L16 15M19.5 17.25C19.5 16.8358 19.8358 16.5 20.25 16.5C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18C19.8358 18 19.5 17.6642 19.5 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.25 12L12 12M19.5 12C19.5 12.4142 19.8358 12.75 20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25C19.8358 11.25 19.5 11.5858 19.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 19H9.50898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6C15.9194 4.58055 15.6981 3.67665 15.091 3.02513C14.1357 2 12.5981 2 9.52312 2C6.44809 2 4.91058 2 3.95529 3.02513C3 4.05025 3 5.70017 3 9V15C3 18.2998 3 19.9497 3.95529 20.9749C4.91058 22 6.44809 22 9.52312 22C12.5981 22 14.1357 22 15.091 20.9749C15.6981 20.3233 15.9194 19.4194 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AiPhone02Icon;
