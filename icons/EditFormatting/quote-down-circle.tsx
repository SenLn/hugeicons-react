import * as React from "react";
import type { SVGProps } from "react";

interface QuoteDownCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const QuoteDownCircleIcon = (props: QuoteDownCircleIconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.7456 10C10.7456 9.05719 10.7456 8.58579 10.4347 8.29289C10.1239 8 9.62351 8 8.62281 8C7.62211 8 7.12176 8 6.81088 8.29289C6.5 8.58579 6.5 9.05719 6.5 10C6.5 10.9428 6.5 11.4142 6.81088 11.7071C7.12176 12 7.62211 12 8.62281 12C9.62351 12 10.1239 12 10.4347 11.7071C10.7456 11.4142 10.7456 10.9428 10.7456 10ZM10.7456 10L10.7456 12.0687C10.7456 13.9022 9.41052 15.4571 7.5614 16M17.5 10C17.5 9.05719 17.5 8.58579 17.1891 8.29289C16.8782 8 16.3779 8 15.3772 8C14.3765 8 13.8761 8 13.5653 8.29289C13.2544 8.58579 13.2544 9.05719 13.2544 10C13.2544 10.9428 13.2544 11.4142 13.5653 11.7071C13.8761 12 14.3765 12 15.3772 12C16.3779 12 16.8782 12 17.1891 11.7071C17.5 11.4142 17.5 10.9428 17.5 10ZM17.5 10V12.0687C17.5 13.9022 16.1649 15.4571 14.3158 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default QuoteDownCircleIcon;
