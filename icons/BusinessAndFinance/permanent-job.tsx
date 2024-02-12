import * as React from "react";
import type { SVGProps } from "react";

interface PermanentJobIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PermanentJobIcon = (props: PermanentJobIconProps) => {
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
        <path d="M6.5 9H5.5M10.5 9H9.5M6.5 6H5.5M10.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 15H17.5M18.5 11H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 8V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8H14ZM14 8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.02485 13.9545C8.02485 15.0583 7.12945 15.953 6.02491 15.953C4.92038 15.953 4.02497 15.0583 4.02497 13.9545C4.02497 12.8508 4.92038 11.9561 6.02491 11.9561C7.12945 11.9561 8.02485 12.8508 8.02485 13.9545Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.06982 20.2101C3.12817 18.582 4.80886 17.9718 6.02491 17.973C7.24097 17.9743 8.8724 18.582 9.93075 20.2101C9.99917 20.3154 10.018 20.445 9.95628 20.5544C9.70877 20.993 8.94028 21.8633 8.38522 21.9223C7.74746 21.9901 6.07914 21.9996 6.0262 21.9999C5.97322 21.9996 4.2534 21.9901 3.61535 21.9223C3.06029 21.8633 2.2918 20.993 2.04429 20.5544C1.98254 20.445 2.00139 20.3154 2.06982 20.2101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PermanentJobIcon;
