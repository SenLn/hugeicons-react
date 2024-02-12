import * as React from "react";
import type { SVGProps } from "react";

interface ComputerDesk03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ComputerDesk03Icon = (props: ComputerDesk03IconProps) => {
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
        <path d="M19.7646 12L20.3746 10.3263C20.835 9.0632 21.0652 8.43163 20.9839 7.86936C20.9248 7.45999 20.7548 7.07962 20.4961 6.77767C20.1407 6.36296 19.5448 6.17609 18.3529 5.80235M18.3529 5.80235C18.3529 6.12316 18.3529 6.28357 18.3152 6.42528C18.2601 6.63271 18.1471 6.81594 17.9921 6.94917C17.8862 7.04019 17.7505 7.09976 17.4791 7.21891L17.2275 7.32933C16.7023 7.55994 16.4396 7.67524 16.2451 7.55871C16.2188 7.54295 16.1939 7.52447 16.1708 7.50351C16 7.34859 16 7.03812 16 6.41719V5.1875C16 4.56657 16 4.2561 16.1708 4.10118C16.1939 4.08023 16.2188 4.06174 16.2451 4.04598C16.4396 3.92945 16.7023 4.04476 17.2275 4.27536L17.4791 4.38578C17.7505 4.50493 17.8862 4.5645 17.9921 4.65552C18.1471 4.78876 18.2601 4.97198 18.3152 5.17941C18.3529 5.32112 18.3529 5.48153 18.3529 5.80235Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12V22M20 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6V5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2H10C11.4142 2 12.1213 2 12.5607 2.43934C13 2.87868 13 3.58579 13 5V6C13 7.41421 13 8.12132 12.5607 8.56066C12.1213 9 11.4142 9 10 9H6C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 9L10 12M6.5 9L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ComputerDesk03Icon;
