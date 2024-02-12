import * as React from "react";
import type { SVGProps } from "react";

interface ImageNotFound02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ImageNotFound02Icon = (props: ImageNotFound02IconProps) => {
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
        <path d="M12.8984 13C10.0813 14.8881 8.10749 18.0404 5.89844 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.776 3.5C2.5 4.93424 2.5 7.23263 2.5 11.7454C2.5 16.3438 2.5 18.6429 3.85001 20.0715C5.20003 21.5 7.37284 21.5 11.7185 21.5C15.972 21.5 18.1439 21.3279 19.5 19.9883" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.5 12.0144C18.0399 11.9084 19.6963 12.3315 21.497 13.6201M21.497 13.6201C21.5 13.1151 21.5 12.5761 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C9.59086 2.5 7.82972 2.5 6.5 2.71659M21.497 13.6201C21.4876 15.2267 21.4482 16.4882 21.2834 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ImageNotFound02Icon;
