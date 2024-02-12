import * as React from "react";
import type { SVGProps } from "react";

interface SolarPanel02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SolarPanel02Icon = (props: SolarPanel02IconProps) => {
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
        <path d="M16.29 2.5H8.01734C6.87343 2.5 6.30148 2.5 5.8759 2.79342C5.45032 3.08683 5.28212 3.59713 4.94571 4.61774L2.6384 11.6177C2.05288 13.3941 1.76012 14.2823 2.24184 14.8912C2.72356 15.5 3.71905 15.5 5.71004 15.5H13.9827C15.1266 15.5 15.6985 15.5 16.1241 15.2066C16.5497 14.9132 16.7179 14.4029 17.0543 13.3823L19.3616 6.38226C19.9471 4.60588 20.2399 3.71769 19.7582 3.10885C19.2764 2.5 18.2809 2.5 16.29 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6L18.9577 15.2128C18.5142 16.556 18.2924 17.2277 17.7313 17.6138C17.1701 18 16.416 18 14.9077 18H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 7H19M17.5 11H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 18.5V21.5M11 21.5H13M11 21.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 2.5H10.5L6.5 15.5H11.5L15.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SolarPanel02Icon;
