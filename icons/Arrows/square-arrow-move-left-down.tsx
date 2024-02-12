import * as React from "react";
import type { SVGProps } from "react";

interface SquareArrowMoveLeftDownIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SquareArrowMoveLeftDownIcon = (props: SquareArrowMoveLeftDownIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.4654 15.1066C13.2366 15.7672 14.3293 17.1022 14.7827 16.9661M14.7827 16.9661C15.3109 16.9661 16.3181 15.6567 17.0566 15.1067M14.7827 16.9661C14.629 14.5755 15.1018 11.4944 14.0942 10.2393C12.976 8.91811 9.79651 9.40013 6.98226 9.26768M6.98226 9.26768C6.92317 9.93439 8.22401 10.7952 8.89747 11.5531M6.98226 9.26768C6.85917 8.82483 8.25247 7.69228 8.89459 7.02832" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SquareArrowMoveLeftDownIcon;
