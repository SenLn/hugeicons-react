import * as React from "react";
import type { SVGProps } from "react";

interface Select02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Select02Icon = (props: Select02IconProps) => {
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
        <path d="M5 2V8M2 5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 18L20 7M7 20H18M18 5H12M5 12V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 5C18 4.05719 18 3.58579 18.2929 3.29289C18.5858 3 19.0572 3 20 3C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7C19.0572 7 18.5858 7 18.2929 6.70711C18 6.41421 18 5.94281 18 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 20C18 19.0572 18 18.5858 18.2929 18.2929C18.5858 18 19.0572 18 20 18C20.9428 18 21.4142 18 21.7071 18.2929C22 18.5858 22 19.0572 22 20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22C19.0572 22 18.5858 22 18.2929 21.7071C18 21.4142 18 20.9428 18 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 20C3 19.0572 3 18.5858 3.29289 18.2929C3.58579 18 4.05719 18 5 18C5.94281 18 6.41421 18 6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22C4.05719 22 3.58579 22 3.29289 21.7071C3 21.4142 3 20.9428 3 20Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Select02Icon;
