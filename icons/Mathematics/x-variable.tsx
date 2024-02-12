import * as React from "react";
import type { SVGProps } from "react";

interface XVariableIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const XVariableIcon = (props: XVariableIconProps) => {
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
        <path d="M20 3.5C13.6327 3.5 10.3673 20.5 4 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 20.5C17.3824 20.5 16.5736 20.5 15.8917 20.1583C15.5045 19.9641 15.1519 19.6927 14.8512 19.3572C14.3219 18.7666 14.0315 17.9204 13.4508 16.2281L10.5492 7.77185C9.96847 6.07955 9.67813 5.2334 9.14881 4.64277C8.84813 4.30728 8.49555 4.03585 8.10825 3.84174C7.42642 3.5 6.61762 3.5 5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default XVariableIcon;
