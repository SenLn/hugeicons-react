import * as React from "react";
import type { SVGProps } from "react";

interface Link06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Link06Icon = (props: Link06IconProps) => {
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
        <path d="M13.5 13V11.5C13.5 10.0955 13.5 9.39331 13.1629 8.88886C13.017 8.67048 12.8295 8.48298 12.6111 8.33706C12.1705 8.04261 11.5789 8.00539 10.5 8.00068C10.3439 8 10.1775 8 10 8C8.59554 8 7.89331 8 7.38886 8.33706C7.17048 8.48298 6.98298 8.67048 6.83706 8.88886C6.5 9.39331 6.5 10.0955 6.5 11.5V17.5C6.5 18.9045 6.5 19.6067 6.83706 20.1111C6.98298 20.3295 7.17048 20.517 7.38886 20.6629C7.89331 21 8.59554 21 10 21C11.4045 21 12.1067 21 12.6111 20.6629C12.8295 20.517 13.017 20.3295 13.1629 20.1111C13.3503 19.8307 13.4335 19.4892 13.4705 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.5 11V12.5C10.5 13.9045 10.5 14.6067 10.8371 15.1111C10.983 15.3295 11.1705 15.517 11.3889 15.6629C11.8295 15.9574 12.4211 15.9946 13.5 15.9993C13.6561 16 13.8225 16 14 16C15.4045 16 16.1067 16 16.6111 15.6629C16.8295 15.517 17.017 15.3295 17.1629 15.1111C17.5 14.6067 17.5 13.9045 17.5 12.5V6.5C17.5 5.09554 17.5 4.39331 17.1629 3.88886C17.017 3.67048 16.8295 3.48298 16.6111 3.33706C16.1067 3 15.4045 3 14 3C12.5955 3 11.8933 3 11.3889 3.33706C11.1705 3.48298 10.983 3.67048 10.8371 3.88886C10.6497 4.16925 10.5665 4.51076 10.5295 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Link06Icon;
