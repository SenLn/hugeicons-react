import * as React from "react";
import type { SVGProps } from "react";

interface TetrisIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TetrisIcon = (props: TetrisIconProps) => {
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
        <path d="M7 5C7 4.05719 7 3.58579 7.29289 3.29289C7.58579 3 8.05719 3 9 3C9.94281 3 10.4142 3 10.7071 3.29289C11 3.58579 11 4.05719 11 5V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11C8.05719 11 7.58579 11 7.29289 10.7071C7 10.4142 7 9.94281 7 9V5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13C15.9428 13 16.4142 13 16.7071 13.2929C17 13.5858 17 14.0572 17 15C17 15.9428 17 16.4142 16.7071 16.7071C16.4142 17 15.9428 17 15 17C14.0572 17 13.5858 17 13.2929 16.7071C13 16.4142 13 15.9428 13 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 19C9 18.0572 9 17.5858 9.29289 17.2929C9.58579 17 10.0572 17 11 17H19C19.9428 17 20.4142 17 20.7071 17.2929C21 17.5858 21 18.0572 21 19C21 19.9428 21 20.4142 20.7071 20.7071C20.4142 21 19.9428 21 19 21H11C10.0572 21 9.58579 21 9.29289 20.7071C9 20.4142 9 19.9428 9 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9C3 8.05719 3 7.58579 3.29289 7.29289C3.58579 7 4.05719 7 5 7C5.94281 7 6.41421 7 6.70711 7.29289C7 7.58579 7 8.05719 7 9V13C7 13.9428 7 14.4142 6.70711 14.7071C6.41421 15 5.94281 15 5 15C4.05719 15 3.58579 15 3.29289 14.7071C3 14.4142 3 13.9428 3 13V9Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default TetrisIcon;
