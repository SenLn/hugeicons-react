import * as React from "react";
import type { SVGProps } from "react";

interface KeyframeRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KeyframeRightIcon = (props: KeyframeRightIconProps) => {
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
        <path d="M5.00253 13.3091C4.33418 12.7049 4 12.4029 4 12C4 11.5971 4.33418 11.2951 5.00253 10.6909L6.64627 9.20515C7.53512 8.40172 7.97954 8 8.5 8C9.02046 8 9.46488 8.40172 10.3537 9.20515L11.9975 10.6909C12.6658 11.2951 13 11.5971 13 12C13 12.4029 12.6658 12.7049 11.9975 13.3091L10.3537 14.7948C9.46488 15.5983 9.02046 16 8.5 16C7.97954 16 7.53512 15.5983 6.64627 14.7948L5.00253 13.3091Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12H20M20 21L20 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KeyframeRightIcon;
