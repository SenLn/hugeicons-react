import * as React from "react";
import type { SVGProps } from "react";

interface Estimate01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Estimate01Icon = (props: Estimate01IconProps) => {
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
        <path d="M18 8.75556V6.8C18 4.53726 18 3.40589 17.2247 2.70294C16.4494 2 15.2016 2 12.7059 2H8.29412C5.79845 2 4.55061 2 3.77531 2.70294C3 3.40589 3 4.53726 3 6.8V13.2C3 15.4627 3 16.5941 3.77531 17.2971C4.55061 18 5.79845 18 8.29412 18H12.7059" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 14H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.7057 15.0043C20.4315 14.3089 19.7265 13.4939 18.1202 13.4939C16.2537 13.4939 15.4684 14.349 15.309 14.8061C15.0604 15.4174 15.0369 16.7356 17.2978 16.8114C19.9979 16.9019 21.1279 17.2682 20.9886 18.7482C20.8492 20.2282 19.293 20.4336 18.1201 20.5136C16.9153 20.4794 15.4252 20.2274 15 18.9491M17.9938 12V13.4364M18.0025 20.5089V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Estimate01Icon;
