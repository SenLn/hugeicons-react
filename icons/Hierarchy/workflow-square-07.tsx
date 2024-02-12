import * as React from "react";
import type { SVGProps } from "react";

interface WorkflowSquare07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkflowSquare07Icon = (props: WorkflowSquare07IconProps) => {
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
        <path d="M3 5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2C7.41421 2 8.12132 2 8.56066 2.43934C9 2.87868 9 3.58579 9 5C9 6.41421 9 7.12132 8.56066 7.56066C8.12132 8 7.41421 8 6 8C4.58579 8 3.87868 8 3.43934 7.56066C3 7.12132 3 6.41421 3 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 19C3 17.5858 3 16.8787 3.43934 16.4393C3.87868 16 4.58579 16 6 16C7.41421 16 8.12132 16 8.56066 16.4393C9 16.8787 9 17.5858 9 19C9 20.4142 9 21.1213 8.56066 21.5607C8.12132 22 7.41421 22 6 22C4.58579 22 3.87868 22 3.43934 21.5607C3 21.1213 3 20.4142 3 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 7C15 5.58579 15 4.87868 15.4393 4.43934C15.8787 4 16.5858 4 18 4C19.4142 4 20.1213 4 20.5607 4.43934C21 4.87868 21 5.58579 21 7C21 8.41421 21 9.12132 20.5607 9.56066C20.1213 10 19.4142 10 18 10C16.5858 10 15.8787 10 15.4393 9.56066C15 9.12132 15 8.41421 15 7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 10C18 11.6569 16.6569 13 15 13H9C7.34315 13 6 14.3431 6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkflowSquare07Icon;
