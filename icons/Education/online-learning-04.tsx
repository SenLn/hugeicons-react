import * as React from "react";
import type { SVGProps } from "react";

interface OnlineLearning04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OnlineLearning04Icon = (props: OnlineLearning04IconProps) => {
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
        <path d="M14.998 14.9688V16.3751C14.998 19.0267 14.998 20.3525 14.1193 21.1763C13.2406 22 11.8264 22 8.99805 22C6.16962 22 4.75541 22 3.87673 21.1763C2.99805 20.3525 2.99805 19.0267 2.99805 16.3751V11.5537C2.99805 8.90201 2.99805 7.57619 3.87673 6.75243C4.45861 6.20693 5.22501 6.05631 5.99805 6.01514" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.99805 19H9.00703" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9981 3.5C12.8911 2.31797 11.6226 2.09056 9.99814 2C9.35128 2.11723 9.1465 2.35124 8.99814 3V9C8.99308 9.91423 9.19599 10.2559 9.99814 10.5C12.1754 10.8479 13.2178 11.1632 14.875 11.9418C14.9531 11.9785 15.0442 11.9801 15.1236 11.9461C16.7228 11.2602 17.756 10.8761 18.9425 10.6532C19.6385 10.5224 20.5045 10.5127 20.8504 9.89477C20.9717 9.67807 21.0133 9.39717 20.9981 9V3C20.7944 2.35605 20.5752 2.13875 19.9981 2C18.2425 2.09672 17.1801 2.34506 14.9981 3.5ZM14.9981 3.5L14.998 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default OnlineLearning04Icon;
