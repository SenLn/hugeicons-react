import * as React from "react";
import type { SVGProps } from "react";

interface Radio01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Radio01Icon = (props: Radio01IconProps) => {
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
        <path d="M14 5C17.7712 5 19.6569 5 20.8284 6.2448C22 7.48959 22 9.49306 22 13.5C22 17.5069 22 19.5104 20.8284 20.7552C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7552C2 19.5104 2 17.5069 2 13.5C2 9.49306 2 7.48959 3.17157 6.2448C4.34315 5 6.22876 5 10 5L14 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.3965 11.2504C18.6389 13.4023 17.9016 16.154 15.7496 17.3965C13.5977 18.6389 10.846 17.9016 9.60354 15.7496M17.3965 11.2504C16.154 9.09842 13.4023 8.3611 11.2504 9.60354C9.09842 10.846 8.3611 13.5977 9.60354 15.7496M17.3965 11.2504L9.60354 15.7496" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 2L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 9H6.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Radio01Icon;
