import * as React from "react";
import type { SVGProps } from "react";

interface VineSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VineSquareIcon = (props: VineSquareIconProps) => {
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
        <path d="M7 7.93975C7 10.1342 7.92291 15.0225 10.3867 17.576C10.9226 18.1314 11.766 18.1417 12.3182 17.6037C13.3919 16.5577 14.5354 14.8878 15.3132 13.1625M15.3132 13.1625C12.1329 12.3092 12.0286 9.88868 12.5 8.5545C13.6579 5.78927 16.2632 7.10006 16.2632 9.47648C16.2632 9.9135 16.2046 10.3816 16.0982 10.8667M15.3132 13.1625C16.0388 13.3571 16.9245 13.4702 18 13.4702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VineSquareIcon;
