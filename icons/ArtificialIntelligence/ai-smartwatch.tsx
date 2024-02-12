import * as React from "react";
import type { SVGProps } from "react";

interface AiSmartwatchIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiSmartwatchIcon = (props: AiSmartwatchIconProps) => {
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
        <path d="M14.1213 17.1213C13.2426 18 11.8284 18 9 18C6.17157 18 4.75736 18 3.87868 17.1213C3 16.2426 3 14.8284 3 12C3 9.17157 3 7.75736 3.87868 6.87868C4.75736 6 6.17157 6 9 6C11.8284 6 13.2426 6 14.1213 6.87868" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.25 6.75L18 9L16 9M19.5 6.75C19.5 7.16421 19.8358 7.5 20.25 7.5C20.6642 7.5 21 7.16421 21 6.75C21 6.33579 20.6642 6 20.25 6C19.8358 6 19.5 6.33579 19.5 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.25 17.25L18 15L16 15M19.5 17.25C19.5 16.8358 19.8358 16.5 20.25 16.5C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18C19.8358 18 19.5 17.6642 19.5 17.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.25 12L12 12M19.5 12C19.5 12.4142 19.8358 12.75 20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25C19.8358 11.25 19.5 11.5858 19.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 6L12.7276 4.91043C12.3931 3.5724 12.2258 2.90339 11.7499 2.49004C11.6973 2.44433 11.6423 2.40141 11.5852 2.36145C11.0688 2 10.3792 2 9 2C7.6208 2 6.93119 2 6.41476 2.36145C6.35765 2.40141 6.30268 2.44433 6.25006 2.49004C5.77415 2.90339 5.6069 3.5724 5.27239 4.91043L5 6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 18L5.27239 19.0896C5.6069 20.4276 5.77415 21.0966 6.25006 21.51C6.30268 21.5557 6.35765 21.5986 6.41476 21.6386C6.93119 22 7.6208 22 9 22C10.3792 22 11.0688 22 11.5852 21.6386C11.6423 21.5986 11.6973 21.5557 11.7499 21.51C12.2258 21.0966 12.3931 20.4276 12.7276 19.0896L13 18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default AiSmartwatchIcon;
