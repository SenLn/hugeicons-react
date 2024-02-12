import * as React from "react";
import type { SVGProps } from "react";

interface PoundSendIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PoundSendIcon = (props: PoundSendIconProps) => {
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
        <path d="M22 13H14.5M22 13C22 13.7002 20.0057 15.0085 19.5 15.5M22 13C22 12.2998 20.0057 10.9915 19.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.433 8.90854C12.433 6.22693 9.76214 2.33551 5.63149 4.76687C4.24262 5.6846 2.45068 8.7357 4.6139 11.9367C5.66599 13.4935 6.70504 13.7211 9.58852 13.7211H2M6.47402 14.0071C5.93571 15.5013 4.30627 18.8986 2.09506 19.9868H10.9808C11.3895 19.9868 12.6048 20.1989 14 18.9239" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PoundSendIcon;
