import * as React from "react";
import type { SVGProps } from "react";

interface TextVariableFrontIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TextVariableFrontIcon = (props: TextVariableFrontIconProps) => {
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
        <path d="M7.5 15H4.5M6 3V15M6 3C5.20721 3 4.18884 3.11448 3.37806 3.22723C3.03514 3.27492 2.86368 3.29877 2.71192 3.38287C2.39625 3.55779 2.1418 3.94131 2.04604 4.38652C2 4.60057 2 4.84482 2 5.33333M6 3C6.79279 3 7.81116 3.11448 8.62194 3.22723C8.96486 3.27492 9.13632 3.29877 9.28808 3.38287C9.60375 3.55779 9.8582 3.94131 9.95396 4.38652C10 4.60057 10 4.84482 10 5.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.5 15H16.5M18 3V15M18 3C17.2072 3 16.1888 3.11448 15.3781 3.22723C15.0351 3.27492 14.8637 3.29877 14.7119 3.38287C14.3963 3.55779 14.1418 3.94131 14.046 4.38652C14 4.60057 14 4.84482 14 5.33333M18 3C18.7928 3 19.8112 3.11448 20.6219 3.22723C20.9649 3.27492 21.1363 3.29877 21.2881 3.38287C21.6037 3.55779 21.8582 3.94131 21.954 4.38652C22 4.60057 22 4.84482 22 5.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 19H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 19L22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TextVariableFrontIcon;
