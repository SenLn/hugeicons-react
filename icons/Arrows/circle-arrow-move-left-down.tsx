import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowMoveLeftDownIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowMoveLeftDownIcon = (props: CircleArrowMoveLeftDownIconProps) => {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.51204 11.638C8.98182 11.0262 7.91022 10.1593 8.01948 9.79956M8.01948 9.79956C8.01948 9.38054 9.07053 8.58147 9.51204 7.99561M8.01948 9.79956C9.93839 9.92155 12.4115 9.54648 13.419 10.3459C14.4795 11.233 14.0925 13.7555 14.1988 15.9882M14.1988 15.9882C13.6637 16.035 12.9727 15.003 12.3644 14.4687M14.1988 15.9882C14.5543 16.0858 15.4634 14.9805 15.9963 14.471" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowMoveLeftDownIcon;
