import * as React from "react";
import type { SVGProps } from "react";

interface ComputerDesk01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ComputerDesk01Icon = (props: ComputerDesk01IconProps) => {
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
        <path d="M22 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12V22M20 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 6V5C7 3.58579 7 2.87868 7.43934 2.43934C7.87868 2 8.58579 2 10 2H14C15.4142 2 16.1213 2 16.5607 2.43934C17 2.87868 17 3.58579 17 5V6C17 7.41421 17 8.12132 16.5607 8.56066C16.1213 9 15.4142 9 14 9H10C8.58579 9 7.87868 9 7.43934 8.56066C7 8.12132 7 7.41421 7 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 9L14 12M10.5 9L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ComputerDesk01Icon;
