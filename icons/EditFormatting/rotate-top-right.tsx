import * as React from "react";
import type { SVGProps } from "react";

interface RotateTopRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateTopRightIcon = (props: RotateTopRightIconProps) => {
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
        <path d="M7 15C7 18.2998 7 19.9497 8.02513 20.9749C9.05025 22 10.7002 22 14 22C17.2998 22 18.9497 22 19.9749 20.9749C21 19.9497 21 18.2998 21 15C21 11.7002 21 10.0503 19.9749 9.02513C18.9497 8 17.2998 8 14 8C10.7002 8 9.05025 8 8.02513 9.02513C7 10.0503 7 11.7002 7 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.57987 2L10.9256 3.11013C11.6419 3.70104 12 3.99649 12 4.36364L11 4.36364C7.22876 4.36364 5.34315 4.36364 4.17157 5.53521C3 6.70678 3 8.5924 3 12.3636V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateTopRightIcon;
