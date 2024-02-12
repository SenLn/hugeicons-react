import * as React from "react";
import type { SVGProps } from "react";

interface FirstAidKitIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FirstAidKitIcon = (props: FirstAidKitIconProps) => {
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
        <path d="M2 12.5625C2 9.46891 2 7.92211 3.02513 6.96106C4.05025 6 5.70017 6 9 6H15C18.2998 6 19.9497 6 20.9749 6.96106C22 7.92211 22 9.46891 22 12.5625V14.4375C22 17.5311 22 19.0779 20.9749 20.0389C19.9497 21 18.2998 21 15 21H9C5.70017 21 4.05025 21 3.02513 20.0389C2 19.0779 2 17.5311 2 14.4375V12.5625Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13.5H15M12 10.5L12 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 6C17 3.518 16.482 3 14 3H10C7.518 3 7 3.518 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FirstAidKitIcon;
