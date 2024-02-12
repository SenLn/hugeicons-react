import * as React from "react";
import type { SVGProps } from "react";

interface City01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const City01Icon = (props: City01IconProps) => {
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
        <path d="M14 8H10C7.518 8 7 8.518 7 11V22H17V11C17 8.518 16.482 8 14 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 12L13 12M11 15H13M11 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 22V8.18564C21 6.95735 21 6.3432 20.7013 5.84966C20.4026 5.35612 19.8647 5.08147 18.7889 4.53216L14.4472 2.31536C13.2868 1.72284 13 1.93166 13 3.22873V7.7035" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 22V13C3 12.1727 3.17267 12 4 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default City01Icon;
