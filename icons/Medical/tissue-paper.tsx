import * as React from "react";
import type { SVGProps } from "react";

interface TissuePaperIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TissuePaperIcon = (props: TissuePaperIconProps) => {
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
        <path d="M10 9.5C10 12.5376 8.20914 15 6 15C3.79086 15 2 12.5376 2 9.5C2 6.46243 3.79086 4 6 4C8.20914 4 10 6.46243 10 9.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.8127 10.6943C21.9339 10.1652 22 9.59475 22 9C22 6.23858 20.5755 4 18.8182 4L6 4C9.15512 4 10.5704 7.955 10.0225 10.5666C9.45596 13.2674 7.17947 16.369 7.38872 19.1311C7.42593 19.6223 7.79914 20 8.24715 20H18.3605C18.8516 20 19.2378 19.5383 19.197 19C18.9931 16.3084 21.2125 13.3133 21.8127 10.6943Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.00801 9.5L5.99902 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TissuePaperIcon;
