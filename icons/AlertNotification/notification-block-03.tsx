import * as React from "react";
import type { SVGProps } from "react";

interface NotificationBlock03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NotificationBlock03Icon = (props: NotificationBlock03IconProps) => {
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
        <path d="M14 2.41138C13.2178 2.14494 12.3764 2 11.5 2C7.34413 2 3.97513 5.2591 3.97513 9.27941C3.97503 10.3197 3.91272 11.2975 3.28561 12.194C2.80684 12.8701 2.16061 13.5625 2.02992 14.394C1.81727 15.7471 2.768 16.6862 3.93205 17.1542C8.39481 18.9486 14.6052 18.9486 19.0679 17.1542C20.232 16.6862 21.1827 15.7471 20.9701 14.394C20.8904 13.8869 20.6189 13.4315 20.3106 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.05 5.05L19.95 9.95M21 7.5C21 5.567 19.433 4 17.5 4C15.567 4 14 5.567 14 7.5C14 9.433 15.567 11 17.5 11C19.433 11 21 9.433 21 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 21C9.29613 21.6219 10.3475 22 11.5 22C12.6525 22 13.7039 21.6219 14.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NotificationBlock03Icon;
