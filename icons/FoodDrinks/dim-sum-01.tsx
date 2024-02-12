import * as React from "react";
import type { SVGProps } from "react";

interface DimSum01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DimSum01Icon = (props: DimSum01IconProps) => {
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
        <path d="M13.5 8.5L22 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17L22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5525 12.6975C15.2987 12.0688 14.9493 11.4609 14.5214 10.9028C12.5803 8.57474 12.0206 6.80237 12.0171 6C11.9582 7.60728 9.99859 8.47735 9.012 7C8.02541 8.47735 6.06578 7.60728 6.00686 6C6.00336 6.80237 5.44368 8.57474 3.50257 10.9028C2.56153 12.1304 2 13.5985 2 15C2 18.3137 5.13938 21 9.012 21C12.6878 21 15.7031 18.5798 16 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 10.5L7 11.5M10.5 10.5L11 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DimSum01Icon;
