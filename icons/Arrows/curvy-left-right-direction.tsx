import * as React from "react";
import type { SVGProps } from "react";

interface CurvyLeftRightDirectionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CurvyLeftRightDirectionIcon = (props: CurvyLeftRightDirectionIconProps) => {
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
        <path d="M3.99803 12.9996C3.99803 12.9996 1.99805 11.5266 1.99805 10.9996C1.99805 10.4725 3.99805 8.99965 3.99805 8.99965M20.0039 15.0001C20.0039 15.0001 22.0029 13.5271 22.0029 13.0001C22.0029 12.473 20.0039 11.0001 20.0039 11.0001M21.7781 12.8675C20.3664 13.1574 17.7204 13.27 16.4099 10.8163C15.8666 9.95268 15.9684 8.50668 15.9684 6.86106C15.9346 6.19025 15.3632 4.96995 13.931 5.00057C12.4989 5.03118 12.0286 6.20733 11.9725 6.79158V16.9022C11.9871 17.7539 11.4934 18.9993 9.97701 18.9993C8.49653 18.9993 7.91702 17.6872 8.04471 16.7036C8.39056 14.0396 7.5823 11.2472 4.08206 11.003H1.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CurvyLeftRightDirectionIcon;
