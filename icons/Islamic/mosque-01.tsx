import * as React from "react";
import type { SVGProps } from "react";

interface Mosque01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mosque01Icon = (props: Mosque01IconProps) => {
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
        <path d="M8.65309 9C5.18214 5.5 10.5125 3.75 12 2C13.4875 3.75 18.8179 5.5 15.3469 9H8.65309Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 12V11C18 10.0572 18 9.58579 17.7071 9.29289C17.4142 9 16.9428 9 16 9H8C7.05719 9 6.58579 9 6.29289 9.29289C6 9.58579 6 10.0572 6 11V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 12H7C5.58579 12 4.87868 12 4.43934 12.4393C4 12.8787 4 13.5858 4 15V19C4 20.4142 4 21.1213 4.43934 21.5607C4.87868 22 5.58579 22 7 22H17C18.4142 22 19.1213 22 19.5607 21.5607C20 21.1213 20 20.4142 20 19V15C20 13.5858 20 12.8787 19.5607 12.4393C19.1213 12 18.4142 12 17 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.50009 22V19C9.48279 16 12 15 12 15C12 15 14.5172 16 14.4999 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mosque01Icon;
