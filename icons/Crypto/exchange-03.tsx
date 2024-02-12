import * as React from "react";
import type { SVGProps } from "react";

interface Exchange03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Exchange03Icon = (props: Exchange03IconProps) => {
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
        <path d="M16.125 20.5L16.125 14.5M18 14.5V13M18 22V20.5M16.125 17.5H19.875M19.875 17.5C20.4963 17.5 21 18.0037 21 18.625V19.375C21 19.9963 20.4963 20.5 19.875 20.5H15M19.875 17.5C20.4963 17.5 21 16.9963 21 16.375V15.625C21 15.0037 20.4963 14.5 19.875 14.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 5C13.8284 5 16.2426 5 17.1213 5.7988C18 6.5976 18 7.4287 18 10L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20C9.17157 20 6.75736 20 5.87868 19.2012C5 18.4024 5 17.5713 5 15L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 3.25C4.11929 3.25 3 4.08947 3 5.125C3 6.16053 4.11929 7 5.5 7C6.88071 7 8 7.83947 8 8.875C8 9.91053 6.88071 10.75 5.5 10.75M5.5 3.25C6.58852 3.25 7.51455 3.77175 7.85775 4.5M5.5 3.25V2M5.5 10.75C4.41148 10.75 3.48545 10.2282 3.14225 9.5M5.5 10.75V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Exchange03Icon;
