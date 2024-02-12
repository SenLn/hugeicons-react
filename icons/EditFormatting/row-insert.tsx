import * as React from "react";
import type { SVGProps } from "react";

interface RowInsertIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RowInsertIcon = (props: RowInsertIconProps) => {
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
        <path d="M7 6.5C7 5.09554 7 4.39331 7.33706 3.88886C7.48298 3.67048 7.67048 3.48298 7.88886 3.33706C8.39331 3 9.09554 3 10.5 3H18.5C19.9045 3 20.6067 3 21.1111 3.33706C21.3295 3.48298 21.517 3.67048 21.6629 3.88886C22 4.39331 22 5.09554 22 6.5C22 7.90446 22 8.60669 21.6629 9.11114C21.517 9.32952 21.3295 9.51702 21.1111 9.66294C20.6067 10 19.9045 10 18.5 10H10.5C9.09554 10 8.39331 10 7.88886 9.66294C7.67048 9.51702 7.48298 9.32952 7.33706 9.11114C7 8.60669 7 7.90446 7 6.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 17.5C7 16.0955 7 15.3933 7.33706 14.8889C7.48298 14.6705 7.67048 14.483 7.88886 14.3371C8.39331 14 9.09554 14 10.5 14H18.5C19.9045 14 20.6067 14 21.1111 14.3371C21.3295 14.483 21.517 14.6705 21.6629 14.8889C22 15.3933 22 16.0955 22 17.5C22 18.9045 22 19.6067 21.6629 20.1111C21.517 20.3295 21.3295 20.517 21.1111 20.6629C20.6067 21 19.9045 21 18.5 21H10.5C9.09554 21 8.39331 21 7.88886 20.6629C7.67048 20.517 7.48298 20.3295 7.33706 20.1111C7 19.6067 7 18.9045 7 17.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 9L3.53318 10.5858C4.17772 11.2525 4.5 11.5858 4.5 12C4.5 12.4142 4.17773 12.7475 3.53318 13.4142L2 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RowInsertIcon;
