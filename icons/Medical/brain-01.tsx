import * as React from "react";
import type { SVGProps } from "react";

interface Brain01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Brain01Icon = (props: Brain01IconProps) => {
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
        <path d="M15.1449 5.20762C14.5031 4.46785 13.5562 4 12.5 4C11.0033 4 9.72595 4.93951 9.22564 6.26097C8.85144 6.09327 8.43661 6 8 6C6.34315 6 5 7.34315 5 9C5 9.01673 5.00014 9.03343 5.00041 9.05009M15.1449 5.20762C15.5725 5.07274 16.0278 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.1296 20.8707 10.729 20.6372 11.273M15.1449 5.20762C13.7981 5.63239 12.7249 6.67345 12.2561 8C12.1435 8.31841 12.0658 8.65327 12.0275 9M9.05001 14C9.28164 15.1411 10.2905 16 11.5 16C11.7548 16 11.8823 16 11.9998 16.014C12.5855 16.0835 13.1107 16.4081 13.4348 16.9009C13.4999 16.9997 13.5569 17.1137 13.6708 17.3416L15 20M9.05001 14C9.01722 13.8384 9 13.6712 9 13.5C9 12.6822 9.39267 11.9561 9.99976 11.5M9.05001 14H4.5C3.11929 14 2 12.8807 2 11.5C2 10.1193 3.11929 9 4.5 9C4.67138 9 4.83873 9.01724 5.00041 9.05009M20.6372 11.273C20.2961 11.0985 19.9095 11 19.5 11C18.2905 11 17.2816 11.8589 17.05 13M20.6372 11.273C21.4462 11.687 22 12.5288 22 13.5C22 14.8807 20.8807 16 19.5 16C18.2904 16 17.4531 17.2082 17.8778 18.3408L18.5 20M5.00041 9.05009C5.01267 9.7988 5.2992 10.4808 5.76389 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Brain01Icon;
