import * as React from "react";
import type { SVGProps } from "react";

interface InternetAntenna04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InternetAntenna04Icon = (props: InternetAntenna04IconProps) => {
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
        <path d="M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.9588 5C17.6186 5.86961 18 6.89801 18 8C18 9.10199 17.6186 10.1304 16.9588 11M7.04117 5C6.38143 5.86961 6 6.89801 6 8C6 9.10199 6.38143 10.1304 7.04117 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.3159 3C21.3796 4.43008 22 6.14984 22 8C22 9.85016 21.3796 11.5699 20.3159 13M3.68409 3C2.62036 4.43008 2 6.14984 2 8C2 9.85016 2.62036 11.5699 3.68409 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 10L7 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 21L13 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 17H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default InternetAntenna04Icon;
