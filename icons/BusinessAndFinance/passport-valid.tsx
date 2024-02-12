import * as React from "react";
import type { SVGProps } from "react";

interface PassportValidIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PassportValidIcon = (props: PassportValidIconProps) => {
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
        <path d="M12 3.5C7.28595 3.5 4.92893 3.5 3.46447 4.81802C2 6.13604 2 8.25736 2 12.5C2 16.7426 2 18.864 3.46447 20.182C4.92893 21.5 7.28595 21.5 12 21.5C16.714 21.5 19.0711 21.5 20.5355 20.182C22 18.864 22 16.7426 22 12.5C22 11.3538 22 8.5 22 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 17C6.20831 14.4189 10.7122 14.2491 12 17M10.5 10C10.5 11.1046 9.60457 12 8.5 12C7.39543 12 6.5 11.1046 6.5 10C6.5 8.89543 7.39543 8 8.5 8C9.60457 8 10.5 8.89543 10.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 6.5C14 6.5 15 6.5 16 8.5C16 8.5 19.1765 3.5 22 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PassportValidIcon;
