import * as React from "react";
import type { SVGProps } from "react";

interface SolarPanel01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SolarPanel01Icon = (props: SolarPanel01IconProps) => {
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
        <path d="M15.6745 4H8.32553C6.86148 4 6.12945 4 5.56252 4.41264C4.99559 4.82528 4.72372 5.55596 4.17998 7.01733L3.287 9.41732C2.1773 12.3998 1.62245 13.891 2.28654 14.9455C2.95062 16 4.4446 16 7.43256 16H16.5674C19.5554 16 21.0494 16 21.7135 14.9455C22.3775 13.891 21.8227 12.3998 20.713 9.41732L19.82 7.01732C19.2763 5.55596 19.0044 4.82528 18.4375 4.41264C17.8706 4 17.1385 4 15.6745 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16V20M12 20H15M12 20H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 10H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SolarPanel01Icon;
