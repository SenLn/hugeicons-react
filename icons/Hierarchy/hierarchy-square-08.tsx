import * as React from "react";
import type { SVGProps } from "react";

interface HierarchySquare08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HierarchySquare08Icon = (props: HierarchySquare08IconProps) => {
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
        <path d="M6.19868 9.6H4.80132C2.79237 9.6 1.43791 11.7484 2.22927 13.6796C2.33951 13.9486 2.59243 14.1231 2.87228 14.1231H3.36437C3.53023 14.1231 3.67481 14.2411 3.71504 14.4094L4.34854 17.0597C4.48063 17.6123 4.95537 18 5.5 18C6.04463 18 6.51937 17.6123 6.65146 17.0597L7.28496 14.4094C7.32519 14.2411 7.46977 14.1231 7.63563 14.1231H8.12772C8.40757 14.1231 8.66049 13.9486 8.77073 13.6796C9.56209 11.7484 8.20763 9.6 6.19868 9.6Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.25 7.8C7.25 8.79411 6.4665 9.6 5.5 9.6C4.5335 9.6 3.75 8.79411 3.75 7.8C3.75 6.80589 4.5335 6 5.5 6C6.4665 6 7.25 6.80589 7.25 7.8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 5C16 3.58579 16 2.87868 16.4393 2.43934C16.8787 2 17.5858 2 19 2C20.4142 2 21.1213 2 21.5607 2.43934C22 2.87868 22 3.58579 22 5C22 6.41421 22 7.12132 21.5607 7.56066C21.1213 8 20.4142 8 19 8C17.5858 8 16.8787 8 16.4393 7.56066C16 7.12132 16 6.41421 16 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 5H15C12.547 5.1828 12 6.20315 12 9.65278L12 14.3472C12 17.7969 12.547 18.8172 15 19H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HierarchySquare08Icon;
