import * as React from "react";
import type { SVGProps } from "react";

interface BookBookmark02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BookBookmark02Icon = (props: BookBookmark02IconProps) => {
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
        <path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 3L8 6.69003C8 7.43013 8 7.80019 8.23811 7.94371C8.24836 7.94989 8.25884 7.95571 8.26951 7.96115C8.51756 8.08746 8.84124 7.89707 9.4886 7.51629C9.97254 7.23164 10.2145 7.08931 10.4815 7.08447C10.4938 7.08425 10.5062 7.08425 10.5185 7.08447C10.7855 7.08931 11.0275 7.23164 11.5114 7.51629C12.1588 7.89707 12.4824 8.08747 12.7305 7.96115C12.7412 7.95571 12.7516 7.94989 12.7619 7.94372C13 7.80019 13 7.43013 13 6.69003V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BookBookmark02Icon;
