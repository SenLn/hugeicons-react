import * as React from "react";
import type { SVGProps } from "react";

interface Scooter03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Scooter03Icon = (props: Scooter03IconProps) => {
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
        <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 4H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20C7.6725 19.9645 6.90036 19.8282 6.42177 19.3045C5.77472 18.5965 5.9693 17.5144 6.35847 15.35L6.96989 11.9497C7.21514 10.5857 7.33777 9.90371 7.69445 9.38625C8.0453 8.87725 8.55358 8.47814 9.15294 8.24104C9.76224 8 10.5082 8 12 8C13.4918 8 14.2378 8 14.8471 8.24104C15.4464 8.47814 15.9547 8.87725 16.3056 9.38625C16.6622 9.90371 16.7849 10.5857 17.0301 11.9497L17.6415 15.35C18.0307 17.5144 18.2253 18.5965 17.5782 19.3045C17.1018 19.8258 16.3345 19.9636 15.018 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Scooter03Icon;
