import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinFilterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinFilterIcon = (props: BitcoinFilterIconProps) => {
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
        <path d="M6.23433 7C4.60404 7 3.7889 7 3.32795 7.49503C2.86701 7.99006 2.96811 8.7569 3.17033 10.2906C3.22938 10.7385 3.3276 10.9928 3.62734 11.3402C4.59564 12.4627 6.36901 14.4592 8.85746 16.2744C9.08486 16.4402 9.23409 16.7113 9.25927 17.0112C9.34268 18.0054 9.42401 18.9059 9.5007 19.71C9.62524 21.0158 9.68751 21.6687 10.1633 21.9159C10.639 22.163 11.2333 21.8467 12.4219 21.2141L13.4884 20.6465C13.9287 20.4122 14.1489 20.295 14.2852 20.0974C14.4216 19.8998 14.4494 19.6615 14.5051 19.1851C14.577 18.5699 14.6529 17.8503 14.7307 17.0112C14.7583 16.714 14.907 16.446 15.1326 16.2816C17.6261 14.4642 19.403 12.4641 20.3726 11.3402C20.6724 10.9928 20.7706 10.7385 20.8297 10.2906C21.0319 8.7569 21.133 7.99006 20.672 7.49503C20.2111 7 19.396 7 17.7657 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.625 9.5L9.625 3.5M11.5 3.5V2M11.5 11V9.5M9.625 6.5H13.375M13.375 6.5C13.9963 6.5 14.5 7.00368 14.5 7.625V8.375C14.5 8.99632 13.9963 9.5 13.375 9.5H8.5M13.375 6.5C13.9963 6.5 14.5 5.99632 14.5 5.375V4.625C14.5 4.00368 13.9963 3.5 13.375 3.5H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinFilterIcon;
