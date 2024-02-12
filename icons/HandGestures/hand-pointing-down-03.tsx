import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingDown03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingDown03Icon = (props: HandPointingDown03IconProps) => {
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
        <path d="M11.5004 16.0002H12.5004C13.605 16.0002 14.5004 15.1048 14.5004 14.0002M14.5004 14.0002V13.0002M14.5004 14.0002C14.5004 14.5525 14.9481 15.0002 15.5004 15.0002C16.605 15.0002 17.5004 14.1048 17.5004 13.0002M17.5004 13.0002V12.0002M17.5004 13.0002C17.5004 13.5237 17.9705 13.9219 18.4868 13.8358L18.8292 13.7788C19.7936 13.618 20.5004 12.7837 20.5004 11.806L20.5 10.3334C20.5 8.16008 20.5 7.07338 20.1689 6.20824C19.9769 5.70638 19.4703 5.06636 19.0652 4.60386C18.7148 4.20383 18.5 3.69642 18.5 3.16465V2.00008M11.5002 14.0002V20.5002C11.5002 21.3287 10.8286 22.0002 10.0002 22.0002C9.17178 22.0002 8.50021 21.3287 8.50021 20.5002L8.5 10.5378L6.8797 12.1632C6.16877 12.8764 4.99772 12.8113 4.36965 12.0237C3.88907 11.4211 3.8758 10.5687 4.33738 9.95133L7.93707 5.35312C8.62579 4.47336 9 3.11736 9 2.00008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingDown03Icon;
