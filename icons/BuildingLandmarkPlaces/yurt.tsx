import * as React from "react";
import type { SVGProps } from "react";

interface YurtIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const YurtIcon = (props: YurtIconProps) => {
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
        <path d="M10.1568 2.45596C7.44599 3.52155 5.26606 5.13458 3.84323 6.46166C3.21936 7.04354 2.90742 7.33448 3.02414 7.66724C3.14086 8 3.575 8 4.44328 8H19.5567C20.425 8 20.8591 8 20.9759 7.66724C21.0926 7.33448 20.7806 7.04354 20.1568 6.46166C18.7339 5.13458 16.554 3.52155 13.8432 2.45596C13.0699 2.15199 12.6833 2 12 2C11.3167 2 10.9301 2.15199 10.1568 2.45596Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.49705 22C3.8036 21.3068 3.45902 20.5479 3.37922 19.5907C3.25304 18.077 3 15 3 15C3 15 3.25304 11.923 3.37922 10.4093C3.45902 9.45208 3.8036 8.69321 4.49705 8M19.5029 22C20.1964 21.3068 20.541 20.5479 20.6208 19.5907C20.747 18.077 21 15 21 15C21 15 20.747 11.923 20.6208 10.4093C20.541 9.45208 20.1964 8.69321 19.5029 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 15H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V14C9 12.3453 9.34533 12 11 12H13C14.6547 12 15 12.3453 15 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.009 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default YurtIcon;
