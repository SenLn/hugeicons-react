import * as React from "react";
import type { SVGProps } from "react";

interface TouchLocked03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchLocked03Icon = (props: TouchLocked03IconProps) => {
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
        <path d="M19.5 12C19.1629 11.2878 18.7648 10.7376 18.0652 10.3184C17.386 9.91152 16.4216 9.76687 14.493 9.47757L11.5051 9V3.75C11.5051 2.7835 10.7216 2 9.75514 2C8.78864 2 8.00514 2.7835 8.00514 3.75V13.5L5.87124 11.671C5.12437 11.0308 3.99565 11.1369 3.38114 11.905C2.86987 12.5441 2.87331 13.4531 3.38941 14.0883L6.74791 18.2219C7.78533 19.4987 8.30405 20.1371 9.00012 20.5151C9.12494 20.5829 9.25329 20.644 9.38462 20.6981C10.0246 20.9619 10.7335 20.9952 12 20.9994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19.5C15 18.5654 15 18.0981 15.201 17.75C15.3326 17.522 15.522 17.3326 15.75 17.201C16.0981 17 16.5654 17 17.5 17H18.5C19.4346 17 19.9019 17 20.25 17.201C20.478 17.3326 20.6674 17.522 20.799 17.75C21 18.0981 21 18.5654 21 19.5C21 20.4346 21 20.9019 20.799 21.25C20.6674 21.478 20.478 21.6674 20.25 21.799C19.9019 22 19.4346 22 18.5 22H17.5C16.5654 22 16.0981 22 15.75 21.799C15.522 21.6674 15.3326 21.478 15.201 21.25C15 20.9019 15 20.4346 15 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.5 15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17H16.5V15.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default TouchLocked03Icon;
