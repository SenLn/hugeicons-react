import * as React from "react";
import type { SVGProps } from "react";

interface PoolIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PoolIcon = (props: PoolIconProps) => {
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
        <path d="M22 21H21C19.5486 21 18.278 20.1411 18 19C17.722 20.1411 16.4514 21 15 21C13.5486 21 12.278 20.1411 12 19C11.722 20.1411 10.4514 21 9 21C7.54863 21 6.27796 20.1411 6 19C5.72204 20.1411 4.45137 21 3 21H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 3L18.7351 3.0883C17.4151 3.52832 16.755 3.74832 16.3775 4.2721C16 4.79587 16 5.49159 16 6.88304L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 3L10.7351 3.0883C9.41505 3.52832 8.75503 3.74832 8.37752 4.2721C8 4.79587 8 5.49159 8 6.88304L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7H16M8 11H16M8 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PoolIcon;
