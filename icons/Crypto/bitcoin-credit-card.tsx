import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinCreditCardIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinCreditCardIcon = (props: BitcoinCreditCardIconProps) => {
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
        <path d="M22 11C22 7.46252 22 5.69377 20.9472 4.5129C20.7788 4.32403 20.5932 4.14935 20.3925 3.99087C19.1379 3 17.2586 3 13.5 3H10.5C6.74142 3 4.86213 3 3.60746 3.99087C3.40678 4.14935 3.22119 4.32403 3.0528 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.0528 17.4871C3.22119 17.676 3.40678 17.8506 3.60746 18.0091C4.86213 19 6.74142 19 10.5 19H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8H22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.125 19.5L16.125 13.5M18 13.5V12M18 21V19.5M16.125 16.5H19.875M19.875 16.5C20.4963 16.5 21 17.0037 21 17.625V18.375C21 18.9963 20.4963 19.5 19.875 19.5H15M19.875 16.5C20.4963 16.5 21 15.9963 21 15.375V14.625C21 14.0037 20.4963 13.5 19.875 13.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinCreditCardIcon;
