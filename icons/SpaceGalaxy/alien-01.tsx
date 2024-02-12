import * as React from "react";
import type { SVGProps } from "react";

interface Alien01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Alien01Icon = (props: Alien01IconProps) => {
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
        <path d="M7.33333 10H6.5C6.22386 10 6 10.2239 6 10.5V11.3333C6 12.8061 7.19391 14 8.66667 14H9.5C9.77614 14 10 13.7761 10 13.5V12.6667C10 11.1939 8.80609 10 7.33333 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.6667 10H17C17.4714 10 17.7071 10 17.8536 10.1464C18 10.2929 18 10.5286 18 11V11.3333C18 12.8061 16.8061 14 15.3333 14H15C14.5286 14 14.2929 14 14.1464 13.8536C14 13.7071 14 13.4714 14 13V12.6667C14 11.1939 15.1939 10 16.6667 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 11C21 16.5228 15 22 12 22C9 22 3 16.5228 3 11C3 5.47715 7.02944 2 12 2C16.9706 2 21 5.47715 21 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Alien01Icon;
