import * as React from "react";
import type { SVGProps } from "react";

interface Wrench01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Wrench01Icon = (props: Wrench01IconProps) => {
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
        <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.50896 18.5H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Wrench01Icon;
