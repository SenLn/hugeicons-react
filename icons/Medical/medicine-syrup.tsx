import * as React from "react";
import type { SVGProps } from "react";

interface MedicineSyrupIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MedicineSyrupIcon = (props: MedicineSyrupIconProps) => {
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
        <path d="M9.5 15.75C9.5 17.4069 10.75 18 12 18C13.25 18 14.5 17.4069 14.5 15.75C14.5 14.0931 12 12 12 12C12 12 9.5 14.0931 9.5 15.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.06845 2H14.9316C15.8529 2 16.3135 2 16.5997 2.29289C17.1334 2.83907 17.1334 5.16093 16.5997 5.70711C16.3135 6 15.8529 6 14.9316 6H9.06845C8.14715 6 7.6865 6 7.40029 5.70711C6.86657 5.16093 6.86657 2.83907 7.40029 2.29289C7.6865 2 8.14715 2 9.06845 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 6C8.16493 6.32986 8.24741 6.49481 8.30606 6.6557C8.61211 7.49515 8.52805 8.42732 8.07678 9.19848C7.99029 9.34628 7.87965 9.49381 7.65836 9.78885L7.25493 10.3268C6.80486 10.9269 6.57983 11.2269 6.41674 11.5556C6.252 11.8877 6.13421 12.241 6.06677 12.6055C6 12.9664 6 13.3414 6 14.0915V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22C14.8284 22 16.2426 22 17.1213 21.1213C18 20.2426 18 18.8284 18 16V14.0915C18 13.3414 18 12.9664 17.9332 12.6055C17.8658 12.241 17.748 11.8877 17.5833 11.5556C17.4202 11.2269 17.1951 10.9269 16.7451 10.3268L16.3416 9.78885C16.1204 9.49381 16.0097 9.34628 15.9232 9.19848C15.4719 8.42732 15.3879 7.49515 15.6939 6.6557C15.7526 6.49481 15.8351 6.32987 16 6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MedicineSyrupIcon;
