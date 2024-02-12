import * as React from "react";
import type { SVGProps } from "react";

interface CheeseCake02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CheeseCake02Icon = (props: CheeseCake02IconProps) => {
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
        <path d="M16.5 7C17.4335 7.42441 18 7.9819 18 8.59247C18 9.92211 15.3137 11 12 11C8.68629 11 6 9.92211 6 8.59247C6 7.9819 6.56645 7.42441 7.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 13C6 14.1046 8.68629 15 12 15C15.3137 15 18 14.1046 18 13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 9V17C18 18.1046 15.3137 19 12 19C8.68629 19 6 18.1046 6 17V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 16C21.4509 16.6013 22 17.3109 22 18.0708C22 20.2409 17.5228 22 12 22C6.47715 22 2 20.2409 2 18.0708C2 17.3109 2.54913 16.6013 3.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CheeseCake02Icon;
