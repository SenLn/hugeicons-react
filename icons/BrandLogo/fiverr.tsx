import * as React from "react";
import type { SVGProps } from "react";

interface FiverrIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FiverrIcon = (props: FiverrIconProps) => {
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
        <path d="M15.3517 3C15.3517 2.5286 15.3517 2.29289 15.2052 2.14645C15.0588 2 14.8231 2 14.3517 2H11.6173C8.89563 2 6.52177 4.50923 6.68066 8.5H5C4.5286 8.5 4.29289 8.5 4.14645 8.64645C4 8.79289 4 9.0286 4 9.5V11C4 11.4714 4 11.7071 4.14645 11.8536C4.29289 12 4.5286 12 5 12H7V21C7 21.4714 7 21.7071 7.14645 21.8536C7.29289 22 7.5286 22 8 22H10C10.4714 22 10.7071 22 10.8536 21.8536C11 21.7071 11 21.4714 11 21V12H15.5306V21C15.5306 21.4714 15.5306 21.7071 15.677 21.8536C15.8235 22 16.0592 22 16.5306 22H19C19.4714 22 19.7071 22 19.8536 21.8536C20 21.7071 20 21.4714 20 21V10.5C20 9.55719 20 9.08579 19.7071 8.79289C19.4142 8.5 18.9428 8.5 18 8.5H11V7.22923C11 6.5 11.5 5.5 12.797 5.5H14.3517C14.8231 5.5 15.0588 5.5 15.2052 5.35355C15.3517 5.20711 15.3517 4.9714 15.3517 4.5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FiverrIcon;
