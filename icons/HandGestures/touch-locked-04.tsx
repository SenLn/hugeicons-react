import * as React from "react";
import type { SVGProps } from "react";

interface TouchLocked04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchLocked04Icon = (props: TouchLocked04IconProps) => {
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
        <path d="M6.91601 13.4949V9.99645M6.91601 9.99645V3.74922C6.91601 2.78315 7.69951 2 8.66601 2C9.6325 2 10.416 2.78315 10.416 3.74922V8.99689L13.493 9.47425C15.4216 9.76342 16.386 9.908 17.0652 10.3147C17.7648 10.7337 18.1629 11.2837 18.5 11.9956M6.91601 9.99645L5.7297 11.3516C4.77678 12.4402 4.30031 12.9845 4.11571 13.6295C4.03246 13.9203 3.99373 14.2221 4.00083 14.5246C4.01657 15.1953 4.34015 15.8421 4.98731 17.1359C5.78536 18.7313 6.18438 19.529 6.82659 20.0642C7.11674 20.306 7.4397 20.5055 7.78584 20.6568C8.77695 21.0899 9.93973 20.9901 11 20.9901" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 19.5C14 18.5654 14 18.0981 14.201 17.75C14.3326 17.522 14.522 17.3326 14.75 17.201C15.0981 17 15.5654 17 16.5 17H17.5C18.4346 17 18.9019 17 19.25 17.201C19.478 17.3326 19.6674 17.522 19.799 17.75C20 18.0981 20 18.5654 20 19.5C20 20.4346 20 20.9019 19.799 21.25C19.6674 21.478 19.478 21.6674 19.25 21.799C18.9019 22 18.4346 22 17.5 22H16.5C15.5654 22 15.0981 22 14.75 21.799C14.522 21.6674 14.3326 21.478 14.201 21.25C14 20.9019 14 20.4346 14 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.5 15.5C15.5 14.6716 16.1716 14 17 14C17.8284 14 18.5 14.6716 18.5 15.5V17H15.5V15.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default TouchLocked04Icon;
