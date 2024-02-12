import * as React from "react";
import type { SVGProps } from "react";

interface OvenIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OvenIcon = (props: OvenIconProps) => {
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
        <path d="M6 5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 5.00895V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 22V5C3 2.518 3.518 2 6 2H18C20.482 2 21 2.518 21 5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 17V13C6 12.0572 6 11.5858 6.29289 11.2929C6.58579 11 7.05719 11 8 11H16C16.9428 11 17.4142 11 17.7071 11.2929C18 11.5858 18 12.0572 18 13V17C18 17.9428 18 18.4142 17.7071 18.7071C17.4142 19 16.9428 19 16 19H8C7.05719 19 6.58579 19 6.29289 18.7071C6 18.4142 6 17.9428 6 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default OvenIcon;
