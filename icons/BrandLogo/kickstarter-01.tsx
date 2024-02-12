import * as React from "react";
import type { SVGProps } from "react";

interface Kickstarter01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Kickstarter01Icon = (props: Kickstarter01IconProps) => {
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
        <path d="M4 5.7V18.3C4 19.7912 5.3432 21 7.00012 21C8.65705 21 10.0002 19.7912 10.0002 18.3L10.0008 14.0117L14.5421 19.8484C15.4924 21.0699 17.3631 21.3668 18.7204 20.5115C20.0777 19.6562 20.4075 17.9726 19.4572 16.7511L15.7606 12L19.4572 7.24889C20.4075 6.02739 20.0777 4.34382 18.7204 3.48852C17.3631 2.63322 15.4924 2.93008 14.5421 4.15157L10.0008 9.98832L10.0002 5.7C10.0002 4.20883 8.65705 3 7.00012 3C5.3432 3 4 4.20883 4 5.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Kickstarter01Icon;
