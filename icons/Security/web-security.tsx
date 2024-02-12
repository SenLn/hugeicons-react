import * as React from "react";
import type { SVGProps } from "react";

interface WebSecurityIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WebSecurityIcon = (props: WebSecurityIconProps) => {
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
        <path d="M19 20.5C19.4255 20.309 19.7894 20.0612 20.1088 19.7395C21.5 18.3379 21.5 16.0821 21.5 11.5705C21.5 7.05894 21.5 4.80314 20.1088 3.40157C18.7175 2 16.4783 2 12 2C7.52166 2 5.28249 2 3.89124 3.40157C2.5 4.80314 2.5 7.05894 2.5 11.5705C2.5 16.0821 2.5 18.3379 3.89124 19.7395C4.21056 20.0612 4.57453 20.309 5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.5 8.5H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 5.5H7.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 5.5H11.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.2596 16.378C9.1796 16.378 8.71714 17.1575 8.59714 17.6373C8.47714 18.117 8.47714 19.856 8.54914 20.5755C8.78914 21.475 9.38914 21.8468 9.97714 21.9667C10.5171 22.0147 12.7971 21.9967 13.4571 21.9967C14.4171 22.0147 15.1371 21.6549 15.4371 20.5755C15.4971 20.2157 15.5571 18.2369 15.4071 17.6373C15.0891 16.6778 14.36 16.378 13.76 16.378M10.2596 16.378H13.76M10.2596 16.378C10.2596 16.318 10.2582 15.5516 10.2596 15.1173C10.2609 14.7204 10.226 14.3378 10.4156 13.9876C11.126 12.5748 13.166 12.7187 13.67 14.1579C13.7573 14.3948 13.7626 14.7704 13.76 15.1173C13.7567 15.5605 13.76 16.378 13.76 16.378" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default WebSecurityIcon;
