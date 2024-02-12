import * as React from "react";
import type { SVGProps } from "react";

interface SignalLow01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SignalLow01Icon = (props: SignalLow01IconProps) => {
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
        <path d="M6 10L6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.80844 9.28111C6.43534 9.76037 6.2488 10 6 10C5.7512 10 5.56466 9.76037 5.19156 9.28112L4.44578 8.32312C3.37255 6.94451 2.83594 6.25521 3.04429 5.68812C3.06552 5.63034 3.0916 5.57458 3.12224 5.52145C3.423 5 4.282 5 6 5C7.718 5 8.577 5 8.87776 5.52145C8.9084 5.57458 8.93448 5.63034 8.95571 5.68812C9.16406 6.25521 8.62745 6.94451 7.55422 8.32312L6.80844 9.28111Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 13V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 19L14 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 19L18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 19L22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SignalLow01Icon;
