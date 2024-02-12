import * as React from "react";
import type { SVGProps } from "react";

interface Blockchain05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Blockchain05Icon = (props: Blockchain05IconProps) => {
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
        <path d="M12 17C12.2269 17 12.4378 16.894 12.8595 16.682L16.2497 14.978C17.7499 14.224 18.5 13.847 18.5 13.25V5.75M12 17C11.7731 17 11.5623 16.894 11.1405 16.682L7.75027 14.978C6.25009 14.224 5.5 13.847 5.5 13.25V5.75M12 17V9.5M18.5 5.75C18.5 5.15298 17.7499 4.77597 16.2497 4.02196L12.8595 2.31799C12.4377 2.106 12.2269 2 12 2C11.7731 2 11.5623 2.106 11.1405 2.31799L7.75027 4.02196C6.25009 4.77597 5.5 5.15298 5.5 5.75M18.5 5.75C18.5 6.34702 17.7499 6.72403 16.2497 7.47804L12.8595 9.18201C12.4377 9.394 12.2269 9.5 12 9.5M5.5 5.75C5.5 6.34702 6.25009 6.72403 7.75027 7.47804L11.1405 9.18201C11.5623 9.394 11.7731 9.5 12 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 20.75C10 20.0596 10.5596 19.5 11.25 19.5H12.75C13.4404 19.5 14 20.0596 14 20.75M10 20.75C10 21.4404 10.5596 22 11.25 22H12.75C13.4404 22 14 21.4404 14 20.75M10 20.75H5M14 20.75H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Blockchain05Icon;
