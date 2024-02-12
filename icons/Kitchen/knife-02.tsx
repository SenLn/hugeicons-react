import * as React from "react";
import type { SVGProps } from "react";

interface Knife02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Knife02Icon = (props: Knife02IconProps) => {
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
        <path d="M13.6468 17.7161C14.0276 17.6191 14.3277 17.2686 14.9279 16.5674L20.1144 10.5083C22.0236 8.27791 22.7538 5.16032 21.0179 2.53909C20.4426 1.67029 19.4814 1.97862 18.8802 2.57285L2.57422 18.6916C1.80859 19.4484 1.80859 20.6755 2.57422 21.4323C3.44222 22.2903 4.88535 22.1577 5.57852 21.1563C6.52528 19.7884 8.00705 16.2711 9.65825 15.6456C11.371 14.9968 11.9676 18.1437 13.6468 17.7161Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Knife02Icon;
