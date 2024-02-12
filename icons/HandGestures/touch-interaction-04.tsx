import * as React from "react";
import type { SVGProps } from "react";

interface TouchInteraction04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchInteraction04Icon = (props: TouchInteraction04IconProps) => {
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
        <path d="M21 13.0526V13.2264M21 13.2264C21 12.3517 20.3574 11.6051 19.4807 11.4613L18.2727 11.2632V12.1579M21 13.2264V15.4386C21 17.3832 21 18.3555 20.699 19.1296C20.2388 20.3132 19.2915 21.2485 18.0926 21.7029C17.3086 22 16.3238 22 14.3542 22C13.3213 22 12.8048 22 12.3242 21.8957C11.5909 21.7366 10.9091 21.4 10.3402 20.9163C9.96726 20.5992 9.65737 20.1913 9.03761 19.3755L6.30671 15.7805C5.88709 15.2281 5.89916 14.4654 6.33605 13.9262C6.90702 13.2215 7.97161 13.1633 8.61791 13.8014L10 15.2557V6.5C10 5.67157 10.6716 5 11.5 5C12.3284 5 13 5.67157 13 6.5V9.4737M13 9.4737H13.7273C14.7314 9.4737 15.5455 10.2749 15.5455 11.2632M13 9.4737V12.1579M15.5455 11.2632V12.1579M15.5455 11.2632V10.3684H16.4545C17.4587 10.3684 18.2727 11.1696 18.2727 12.1579M18.2727 12.1579V13.0526" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8H6.17647C4.67907 8 3.93037 8 3.46518 7.56066C3 7.12132 3 6.41421 3 5C3 3.58579 3 2.87868 3.46518 2.43934C3.93037 2 4.67907 2 6.17647 2H17.8235C19.3209 2 20.0696 2 20.5348 2.43934C21 2.87868 21 3.58579 21 5C21 6.41421 21 7.12132 20.5348 7.56066C20.0696 8 19.3209 8 17.8235 8H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TouchInteraction04Icon;
