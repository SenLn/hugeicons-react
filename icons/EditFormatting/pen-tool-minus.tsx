import * as React from "react";
import type { SVGProps } from "react";

interface PenToolMinusIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PenToolMinusIcon = (props: PenToolMinusIconProps) => {
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
        <path d="M14.5995 18.9737L7.63427 20.2672C6.2983 20.5153 5.63031 20.6393 5.24549 20.2545C4.86067 19.8697 4.98471 19.2016 5.2328 17.8656L6.52621 10.9001C6.73362 9.78311 6.83732 9.22463 7.20549 8.88719C7.57365 8.54975 8.24697 8.48389 9.59359 8.35218C10.8915 8.22524 12.1197 7.78032 13.4 6.5L19 12.1005C17.7197 13.3808 17.2746 14.6083 17.1474 15.9062C17.0155 17.253 16.9495 17.9264 16.6121 18.2945C16.2747 18.6626 15.7163 18.7663 14.5995 18.9737Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 14.7105C12.4405 14.6197 11.9289 14.3763 11.5263 13.9737M11.5263 13.9737C11.1237 13.5711 10.8803 13.0595 10.7895 12.5M11.5263 13.9737L6 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 6.5C14.1332 5.56586 15.4907 3.66107 16.7613 3.50976C17.6287 3.40648 18.3472 4.12499 19.7842 5.56202L19.938 5.7158C21.375 7.15283 22.0935 7.87135 21.9902 8.73867C21.8389 10.0092 19.9341 11.3668 19 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 3.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PenToolMinusIcon;
