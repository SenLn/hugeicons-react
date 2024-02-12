import * as React from "react";
import type { SVGProps } from "react";

interface KurtaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KurtaIcon = (props: KurtaIconProps) => {
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
        <path d="M6.37726 16H5.08354C3.22665 16 2.84168 15.6255 3.05142 13.7791L3.41559 10.5731C3.75345 7.59878 4.43808 6.75874 7.23391 5.66482L8.93305 5V2C9.90622 2.31731 10.9677 2.83772 12 2.83772C13.0323 2.83772 14.0938 2.31731 15.067 2V5L16.7661 5.66482C19.5619 6.75874 20.2466 7.59878 20.5844 10.5731L20.9486 13.7791C21.1583 15.6255 20.7734 16 18.9165 16H17.6227" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 5L11.0513 5.68377C11.6671 5.88904 12.3329 5.88904 12.9487 5.68377L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.9642 10L6.50433 20.9584C6.4681 21.8215 6.64698 22 7.51062 22H16.4894C17.353 22 17.5319 21.8215 17.4957 20.9584L17.0358 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9H13M12 11.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default KurtaIcon;
