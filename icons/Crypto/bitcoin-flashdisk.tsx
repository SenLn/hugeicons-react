import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinFlashdiskIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinFlashdiskIcon = (props: BitcoinFlashdiskIconProps) => {
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
        <path d="M10.5088 22C9.57782 22 9.11235 22 8.72528 21.9231C7.13574 21.6075 5.89317 20.3671 5.57699 18.7804C5.5 18.394 5.5 17.9293 5.5 17V11.5C5.5 9.61438 5.5 8.67157 6.08681 8.08579C6.67362 7.5 7.61808 7.5 9.507 7.5H11.5105C13.3994 7.5 14.3439 7.5 14.9307 8.08579C15.3355 8.48987 15.4611 9.06385 15.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.625 20.5L13.625 14.5M15.5 14.5V13M15.5 22V20.5M13.625 17.5H17.375M17.375 17.5C17.9963 17.5 18.5 18.0037 18.5 18.625V19.375C18.5 19.9963 17.9963 20.5 17.375 20.5H12.5M17.375 17.5C17.9963 17.5 18.5 16.9963 18.5 16.375V15.625C18.5 15.0037 17.9963 14.5 17.375 14.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7.5V5.5C14 4.09554 14 3.39331 13.6629 2.88886C13.517 2.67048 13.3295 2.48298 13.1111 2.33706C12.6067 2 11.9045 2 10.5 2C9.09554 2 8.39331 2 7.88886 2.33706C7.67048 2.48298 7.48298 2.67048 7.33706 2.88886C7 3.39331 7 4.09554 7 5.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinFlashdiskIcon;
