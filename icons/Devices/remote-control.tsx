import * as React from "react";
import type { SVGProps } from "react";

interface RemoteControlIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RemoteControlIcon = (props: RemoteControlIconProps) => {
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
        <path d="M12.5 2C15.7998 2 17.4497 2 18.4749 3.02513C19.5 4.05025 19.5 5.70017 19.5 9V15C19.5 18.2998 19.5 19.9497 18.4749 20.9749C17.4497 22 15.7998 22 12.5 22H11.5C8.20017 22 6.55025 22 5.52513 20.9749C4.5 19.9497 4.5 18.2998 4.5 15L4.5 9C4.5 5.70017 4.5 4.05025 5.52513 3.02513C6.55025 2 8.20017 2 11.5 2L12.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 15H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 18H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default RemoteControlIcon;
