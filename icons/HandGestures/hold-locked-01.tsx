import * as React from "react";
import type { SVGProps } from "react";

interface HoldLocked01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HoldLocked01Icon = (props: HoldLocked01IconProps) => {
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
        <path d="M13.5 5.5C13.5 4.67157 14.1716 4 15 4C15.8284 4 16.5 4.67157 16.5 5.5V11M13.5 5.5V3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5L10.5002 5M13.5 5.5V10M10.5002 5C10.4999 4.17187 9.82842 3.50064 9.00021 3.50064C8.17178 3.50064 7.50021 4.17221 7.50021 5.00064L7.5 13.4624L5.8797 11.837C5.16877 11.1239 3.99772 11.1889 3.36965 11.9765C2.88907 12.5791 2.8758 13.4315 3.33738 14.0489L6.93707 18.6471C7.62579 19.5269 8 20.8829 8 22.0002M10.5002 5V9M19.5 11V7.5C19.5 6.67157 18.8284 6 18 6C17.1716 6 16.5 6.67157 16.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19.5C15 18.5654 15 18.0981 15.201 17.75C15.3326 17.522 15.522 17.3326 15.75 17.201C16.0981 17 16.5654 17 17.5 17H18.5C19.4346 17 19.9019 17 20.25 17.201C20.478 17.3326 20.6674 17.522 20.799 17.75C21 18.0981 21 18.5654 21 19.5C21 20.4346 21 20.9019 20.799 21.25C20.6674 21.478 20.478 21.6674 20.25 21.799C19.9019 22 19.4346 22 18.5 22H17.5C16.5654 22 16.0981 22 15.75 21.799C15.522 21.6674 15.3326 21.478 15.201 21.25C15 20.9019 15 20.4346 15 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.5 15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17H16.5V15.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default HoldLocked01Icon;
