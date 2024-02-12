import * as React from "react";
import type { SVGProps } from "react";

interface HoldLocked02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HoldLocked02Icon = (props: HoldLocked02IconProps) => {
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
        <path d="M19.5 11.5L19.5011 7.5C19.5011 6.67157 18.8295 6 18.0011 6C17.1727 6 16.5011 6.67157 16.5011 7.5M10.5011 5.5C10.5011 4.67157 9.82952 4 9.0011 4C8.17267 4 7.5011 4.67157 7.5011 5.5V13.4634L5.8797 11.8369C5.16877 11.1237 3.99772 11.1888 3.36965 11.9763C2.88907 12.5789 2.8758 13.4314 3.33738 14.0487L6.34137 18.0667C7.02311 18.9785 7.36398 19.4344 7.77419 19.7888C8.40001 20.3294 9.14995 20.7056 9.95658 20.8834C10.455 20.9933 10.9885 20.9996 12 21M10.5011 5.5V3.5C10.5011 2.67157 11.1727 2 12.0011 2C12.8295 2 13.5011 2.67157 13.5011 3.5V5.5M10.5011 5.5V10M13.5011 5.5C13.5011 4.67157 14.1727 4 15.0011 4C15.8295 4 16.5011 4.67157 16.5011 5.5V7.5M13.5011 5.5V10M16.5011 7.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19.5C15 18.5654 15 18.0981 15.201 17.75C15.3326 17.522 15.522 17.3326 15.75 17.201C16.0981 17 16.5654 17 17.5 17H18.5C19.4346 17 19.9019 17 20.25 17.201C20.478 17.3326 20.6674 17.522 20.799 17.75C21 18.0981 21 18.5654 21 19.5C21 20.4346 21 20.9019 20.799 21.25C20.6674 21.478 20.478 21.6674 20.25 21.799C19.9019 22 19.4346 22 18.5 22H17.5C16.5654 22 16.0981 22 15.75 21.799C15.522 21.6674 15.3326 21.478 15.201 21.25C15 20.9019 15 20.4346 15 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.5 15.5C16.5 14.6716 17.1716 14 18 14C18.8284 14 19.5 14.6716 19.5 15.5V17H16.5V15.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default HoldLocked02Icon;
