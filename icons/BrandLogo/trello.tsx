import * as React from "react";
import type { SVGProps } from "react";

interface TrelloIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TrelloIcon = (props: TrelloIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 8C6 7.05719 6 6.58579 6.29289 6.29289C6.58579 6 7.05719 6 8 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V15C10.5 15.9428 10.5 16.4142 10.2071 16.7071C9.91421 17 9.44281 17 8.5 17H8C7.05719 17 6.58579 17 6.29289 16.7071C6 16.4142 6 15.9428 6 15V8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.5 8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H16C16.9428 6 17.4142 6 17.7071 6.29289C18 6.58579 18 7.05719 18 8V10C18 10.9428 18 11.4142 17.7071 11.7071C17.4142 12 16.9428 12 16 12H15.5C14.5572 12 14.0858 12 13.7929 11.7071C13.5 11.4142 13.5 10.9428 13.5 10V8Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default TrelloIcon;
