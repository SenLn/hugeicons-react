import * as React from "react";
import type { SVGProps } from "react";

interface Notebook01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Notebook01Icon = (props: Notebook01IconProps) => {
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
        <path d="M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.7857 10H15.2143C16.2918 10 16.8305 10 17.1653 9.70711C17.5 9.41421 17.5 8.94281 17.5 8C17.5 7.05719 17.5 6.58579 17.1653 6.29289C16.8305 6 16.2918 6 15.2143 6H11.7857C10.7082 6 10.1695 6 9.83474 6.29289C9.5 6.58579 9.5 7.05719 9.5 8C9.5 8.94281 9.5 9.41421 9.83474 9.70711C10.1695 10 10.7082 10 11.7857 10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 6L2 6M5 12H2M5 18H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Notebook01Icon;
