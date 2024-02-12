import * as React from "react";
import type { SVGProps } from "react";

interface NotificationBlock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NotificationBlock01Icon = (props: NotificationBlock01IconProps) => {
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
        <path d="M13.5 5.29686C12.8666 5.10373 12.1949 5 11.5 5C7.85617 5 4.84988 7.85222 4.65837 11.491C4.58489 12.887 4.66936 14.373 3.42213 15.3084C2.84164 15.7438 2.5 16.427 2.5 17.1527C2.5 18.1508 3.2818 19 4.3 19H18.7C19.7182 19 20.5 18.1508 20.5 17.1527C20.5 16.427 20.1584 15.7438 19.5779 15.3084C19.5513 15.2885 19.5254 15.2683 19.5 15.2479" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3.125C10 3.95343 10.6716 5 11.5 5C12.3284 5 13 3.95343 13 3.125C13 2.29657 12.3284 2 11.5 2C10.6716 2 10 2.29657 10 3.125Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 19C14.5 20.6569 13.1569 22 11.5 22C9.84315 22 8.5 20.6569 8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.55 7.05L20.45 11.95M21.5 9.5C21.5 7.567 19.933 6 18 6C16.067 6 14.5 7.567 14.5 9.5C14.5 11.433 16.067 13 18 13C19.933 13 21.5 11.433 21.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default NotificationBlock01Icon;
