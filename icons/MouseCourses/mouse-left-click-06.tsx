import * as React from "react";
import type { SVGProps } from "react";

interface MouseLeftClick06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MouseLeftClick06Icon = (props: MouseLeftClick06IconProps) => {
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
        <path d="M13.5 5.5V2M13.5 12V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 22C19.5 22 21 17.49 21 12C21 6.50998 19.5 2 13.5 2C7.49993 2 6 6.50996 6 12C6 17.49 7.49993 22 13.5 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 7C15 6.53406 15 6.30109 14.9239 6.11732C14.8224 5.87229 14.6277 5.67761 14.3827 5.57612C14.1989 5.5 13.9659 5.5 13.5 5.5C13.0341 5.5 12.8011 5.5 12.6173 5.57612C12.3723 5.67761 12.1776 5.87229 12.0761 6.11732C12 6.30109 12 6.53406 12 7V7.5C12 7.96594 12 8.19891 12.0761 8.38268C12.1776 8.62771 12.3723 8.82239 12.6173 8.92388C12.8011 9 13.0341 9 13.5 9C13.9659 9 14.1989 9 14.3827 8.92388C14.6277 8.82239 14.8224 8.62771 14.9239 8.38268C15 8.19891 15 7.96594 15 7.5V7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 3.16746L4.61888 2M4.02867 5.56746L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MouseLeftClick06Icon;
