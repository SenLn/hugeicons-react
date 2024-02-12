import * as React from "react";
import type { SVGProps } from "react";

interface HierarchySquare07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HierarchySquare07Icon = (props: HierarchySquare07IconProps) => {
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
        <path d="M2 19.5C2 18.3215 2 17.7322 2.43934 17.3661C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.3661C8 17.7322 8 18.3215 8 19.5C8 20.6785 8 21.2678 7.56066 21.6339C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.6339C2 21.2678 2 20.6785 2 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 19.5C16 18.3215 16 17.7322 16.4393 17.3661C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.5607 21.6339C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.6339C16 21.2678 16 20.6785 16 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 17C19 14.518 18.2562 14 14.6923 14H9.30769C5.74379 14 5 14.518 5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.89128 8.06671C9.34109 8.4458 7.89853 9.21985 8.77715 10.1885C9.20634 10.6616 9.68436 11 10.2853 11H13.7147C14.3156 11 14.7937 10.6616 15.2229 10.1885C16.1015 9.21985 14.6589 8.4458 14.1087 8.06671C12.8185 7.17776 11.1815 7.17776 9.89128 8.06671Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.75 3.8C13.75 4.79411 12.9665 5.6 12 5.6C11.0335 5.6 10.25 4.79411 10.25 3.8C10.25 2.80589 11.0335 2 12 2C12.9665 2 13.75 2.80589 13.75 3.8Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default HierarchySquare07Icon;
