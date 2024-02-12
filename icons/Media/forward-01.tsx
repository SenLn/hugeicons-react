import * as React from "react";
import type { SVGProps } from "react";

interface Forward01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Forward01Icon = (props: Forward01IconProps) => {
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
        <path d="M19.9351 12.6258C19.6807 13.8374 18.327 14.7077 15.6198 16.4481C12.6753 18.3411 11.203 19.2876 10.0105 18.9229C9.60662 18.7994 9.23463 18.5823 8.92227 18.2876C8 17.4178 8 15.6118 8 12C8 8.38816 8 6.58224 8.92227 5.71235C9.23463 5.41773 9.60662 5.20057 10.0105 5.07707C11.203 4.71243 12.6753 5.6589 15.6198 7.55186C18.327 9.29233 19.6807 10.1626 19.9351 11.3742C20.0216 11.7865 20.0216 12.2135 19.9351 12.6258Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 5L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Forward01Icon;
