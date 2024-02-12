import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingLeft03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingLeft03Icon = (props: HandPointingLeft03IconProps) => {
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
        <path d="M8 11.5004L8 12.5004C8 13.605 8.89543 14.5004 10 14.5004M10 14.5004L11 14.5004M10 14.5004C9.44772 14.5004 9 14.9481 9 15.5004C9 16.605 9.89543 17.5004 11 17.5004M11 17.5004L12 17.5004M11 17.5004C10.4765 17.5004 10.0783 17.9705 10.1644 18.4868L10.2215 18.8292C10.3822 19.7936 11.2166 20.5004 12.1943 20.5004L13.6668 20.5C15.8402 20.5 16.9269 20.5 17.792 20.1689C18.2939 19.9769 18.9339 19.4703 19.3964 19.0652C19.7964 18.7148 20.3038 18.5 20.8356 18.5L22.0002 18.5M10 11.5002L3.5 11.5002C2.67157 11.5002 2 10.8286 2 10.0002C2 9.17178 2.67157 8.50021 3.5 8.50021L13.4624 8.5L11.837 6.8797C11.1239 6.16877 11.1889 4.99772 11.9765 4.36965C12.5791 3.88907 13.4315 3.8758 14.0489 4.33738L18.6471 7.93707C19.5269 8.62579 20.8829 9 22.0002 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingLeft03Icon;
