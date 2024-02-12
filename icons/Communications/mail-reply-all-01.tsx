import * as React from "react";
import type { SVGProps } from "react";

interface MailReplyAll01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailReplyAll01Icon = (props: MailReplyAll01IconProps) => {
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
        <path d="M21.9999 11.026C21.9999 10.5331 21.9946 10.0403 21.9841 9.54591C21.9188 6.47099 21.8861 4.93353 20.755 3.79462C19.6238 2.65571 18.0496 2.61603 14.9011 2.53668C12.9606 2.48778 11.0392 2.48777 9.0987 2.53667C5.95021 2.61602 4.37596 2.65569 3.24483 3.7946C2.1137 4.93351 2.08102 6.47097 2.01564 9.5459C1.99462 10.5346 1.99463 11.5175 2.01565 12.5062C2.08102 15.5811 2.11371 17.1186 3.24484 18.2575C4.30186 19.3218 5.74585 19.4261 8.49988 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.99988 5L8.9129 8.92462C11.4386 10.3585 12.5612 10.3585 15.0869 8.92462L21.9999 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.4999 18.5C12.9942 18.0085 10.9999 16.7002 10.9999 16C10.9999 15.2998 12.9942 13.9915 13.4999 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.0001 21.5003C21.884 18.9758 21.9869 18.0573 20.3438 16.8793C19.5362 16.3003 17.9115 15.9188 15.7177 16.1248M17.4519 13.5928L15.1552 15.7464C14.9611 15.9406 14.9597 16.2561 15.1519 16.4521L17.4519 18.6401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailReplyAll01Icon;
