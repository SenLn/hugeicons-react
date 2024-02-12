import * as React from "react";
import type { SVGProps } from "react";

interface AiCloud01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiCloud01Icon = (props: AiCloud01IconProps) => {
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
        <path d="M17.4776 8.00005C17.485 8.00002 17.4925 8 17.5 8C19.9853 8 22 10.0147 22 12.5C22 14.0602 21.206 15.435 20 16.2422M17.4776 8.00005C17.4924 7.83536 17.5 7.66856 17.5 7.5C17.5 4.46243 15.0376 2 12 2C9.12324 2 6.76233 4.20862 6.52042 7.0227M17.4776 8.00005C17.4131 8.71494 17.2119 9.39038 16.9003 10M6.52042 7.0227C3.98398 7.26407 2 9.40034 2 12C2 13.7891 2.93963 15.3587 4.35232 16.2422M6.52042 7.0227C6.67826 7.00768 6.83823 7 7 7C8.12582 7 9.16474 7.37209 10.0005 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14H11C10.0572 14 9.58579 14 9.29289 14.2929C9 14.5858 9 15.0572 9 16V18C9 18.9428 9 19.4142 9.29289 19.7071C9.58579 20 10.0572 20 11 20H13C13.9428 20 14.4142 20 14.7071 19.7071C15 19.4142 15 18.9428 15 18V16C15 15.0572 15 14.5858 14.7071 14.2929C14.4142 14 13.9428 14 13 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 20V22M13.5 20V22M10.5 12V14M13.5 12V14M9 15.5H7M9 18.5H7M17 15.5H15M17 18.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AiCloud01Icon;
