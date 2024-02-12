import * as React from "react";
import type { SVGProps } from "react";

interface CableCarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CableCarIcon = (props: CableCarIconProps) => {
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
        <path d="M4.41268 11.6239C4.14236 12.8529 4 14.1289 4 15.4375C4 16.3375 4.06733 17.2219 4.1973 18.0863C4.44397 19.7269 4.56731 20.5471 5.41113 21.2736C6.25496 22 7.27731 22 9.322 22H14.678C16.7227 22 17.745 22 18.5889 21.2736C19.4327 20.5471 19.556 19.7269 19.8027 18.0863C19.9327 17.2219 20 16.3375 20 15.4375C20 14.1289 19.8576 12.8529 19.5873 11.6239C19.2501 10.0905 19.0814 9.32383 18.2581 8.66191C17.4348 8 16.4673 8 14.5325 8H9.46753C7.53265 8 6.56522 8 5.7419 8.66191C4.91858 9.32383 4.74994 10.0905 4.41268 11.6239Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 2H14M20 2H14M14 2L12 5.5M9 5.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 16H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CableCarIcon;
