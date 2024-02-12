import * as React from "react";
import type { SVGProps } from "react";

interface JupiterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const JupiterIcon = (props: JupiterIconProps) => {
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
        <path d="M8 16.5C9.10457 16.5 10 15.8284 10 15C10 14.1716 9.10457 13.5 8 13.5C6.89543 13.5 6 14.1716 6 15C6 15.8284 6.89543 16.5 8 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.2722 15.7522C17.6645 15.7468 14.7094 16.3604 11.5 18.5C9.91701 19.5553 8.40491 20.2626 7.10825 20.7239M21.2722 15.7522C21.7415 14.5935 22 13.3269 22 12C22 11.7639 21.9918 11.5298 21.9757 11.2978M21.2722 15.7522C19.7882 19.4158 16.1959 22 12 22C10.2231 22 8.55439 21.5365 7.10825 20.7239M21.9757 11.2978C16.9028 14.2476 14.3349 13.112 9 10C6.5627 8.57824 4.2801 8.55737 2.42713 9.09949M21.9757 11.2978C21.9128 10.39 21.7286 9.51555 21.4394 8.69054M21.4394 8.69054C20.0734 4.7941 16.363 2 12 2C9.46517 2 7.15062 2.94313 5.38812 4.49763M21.4394 8.69054C17.3788 8.69054 17.5 4.77488 12 6C8.4 6.8019 6.25875 5.16588 5.38812 4.49763M5.38812 4.49763C4.01187 5.71147 2.97222 7.29807 2.42713 9.09949M2.42713 9.09949C2.14934 10.0175 2 10.9913 2 12C2 15.7459 4.05965 19.0108 7.10825 20.7239" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default JupiterIcon;
