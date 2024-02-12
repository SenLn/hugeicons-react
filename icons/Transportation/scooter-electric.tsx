import * as React from "react";
import type { SVGProps } from "react";

interface ScooterElectricIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ScooterElectricIcon = (props: ScooterElectricIconProps) => {
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
        <circle cx="4" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.51383 18H13.2887C14.0213 18 14.3876 18 14.6328 17.8445C14.878 17.689 15.0854 17.2491 15.5002 16.3693C15.735 15.8712 16.0361 15.411 16.3921 15M16.3921 15L4 16M16.3921 15C17.0623 14.2264 17.9273 13.6269 18.913 13.2759C19.4501 13.0846 19.7186 12.9889 19.8093 12.8143C19.8999 12.6397 19.8331 12.3991 19.6995 11.918L18.1691 6.4088C17.9184 5.50632 17.7931 5.05508 17.5225 4.72715C17.3256 4.4885 17.076 4.29879 16.7934 4.17293C16.405 4 15.9366 4 15 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.4626 7L10.0686 8.81238C9.91919 9.0066 10.0263 9.28605 10.2699 9.33776L11.7301 9.64772C11.9899 9.70285 12.0889 10.0122 11.9073 10.2011L10.1777 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ScooterElectricIcon;
