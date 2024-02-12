import * as React from "react";
import type { SVGProps } from "react";

interface AiPhone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiPhone01Icon = (props: AiPhone01IconProps) => {
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
        <path d="M17 14.9996C17 18.2996 17 19.9496 16.0481 20.9748C15.0962 22 13.5641 22 10.5 22C7.43587 22 5.90381 22 4.9519 20.9748C4 19.9496 4 18.2996 4 14.9996V8.99919C4 5.69916 4 4.04914 4.9519 3.02395C5.80236 2.10801 7.11592 2.0104 9.57143 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 4H14C13.0572 4 12.5858 4 12.2929 4.29289C12 4.58579 12 5.05719 12 6V8C12 8.94281 12 9.41421 12.2929 9.70711C12.5858 10 13.0572 10 14 10H16C16.9428 10 17.4142 10 17.7071 9.70711C18 9.41421 18 8.94281 18 8V6C18 5.05719 18 4.58579 17.7071 4.29289C17.4142 4 16.9428 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 10V12M16.5 10V12M13.5 2V4M16.5 2V4M12 5.5H10M12 8.5H10M20 5.5H18M20 8.5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.49 19H10.499" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AiPhone01Icon;
