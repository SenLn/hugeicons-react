import * as React from "react";
import type { SVGProps } from "react";

interface DominoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DominoIcon = (props: DominoIconProps) => {
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
        <path d="M19 16C19 18.8284 19 20.2426 17.9749 21.1213C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 21.1213C5 20.2426 5 18.8284 5 16L5 8C5 5.17157 5 3.75736 6.02513 2.87868C7.05026 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 2.87868C19 3.75736 19 5.17157 19 8L19 16Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 18H14.491M9.50115 16L9.49219 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0078 7L11.9988 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 12L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DominoIcon;
