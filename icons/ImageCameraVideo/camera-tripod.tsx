import * as React from "react";
import type { SVGProps } from "react";

interface CameraTripodIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CameraTripodIcon = (props: CameraTripodIconProps) => {
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
        <path d="M2 10C2 6.49335 2 4.74003 2.90796 3.55992C3.07418 3.34388 3.25989 3.14579 3.46243 2.96849C4.56878 2 6.21252 2 9.5 2H14.5C17.7875 2 19.4312 2 20.5376 2.96849C20.7401 3.14579 20.9258 3.34388 21.092 3.55992C22 4.74003 22 6.49335 22 10C22 13.5066 22 15.26 21.092 16.4401C20.9258 16.6561 20.7401 16.8542 20.5376 17.0315C19.4312 18 17.7875 18 14.5 18H9.5C6.21252 18 4.56878 18 3.46243 17.0315C3.25989 16.8542 3.07418 16.6561 2.90796 16.4401C2 15.26 2 13.5066 2 10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 22L12.8333 18M7 22L11.1667 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18L12 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CameraTripodIcon;
