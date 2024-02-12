import * as React from "react";
import type { SVGProps } from "react";

interface Quran01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Quran01Icon = (props: Quran01IconProps) => {
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
        <path d="M19.6475 5.43668L18.9895 4.39419C18.6252 3.81704 18.443 3.52846 18.2044 3.50178C17.9657 3.4751 17.6993 3.74896 17.1664 4.29667C15.4443 6.06689 13.7221 5.80537 12 8.98839C10.2779 5.80537 8.55571 6.06689 6.83356 4.29667C6.30071 3.74896 6.03429 3.4751 5.79565 3.50178C5.557 3.52846 5.37485 3.81704 5.01054 4.39419L4.35251 5.43668C4.09827 5.83945 3.97115 6.04084 4.00553 6.2528C4.03991 6.46476 4.22324 6.60998 4.58991 6.90042L10.7724 11.7977C11.3634 12.2659 11.659 12.5 12 12.5C12.341 12.5 12.6366 12.2659 13.2276 11.7977L19.4101 6.90042C19.7768 6.60998 19.9601 6.46476 19.9945 6.2528C20.0288 6.04084 19.9017 5.83945 19.6475 5.43668Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 8.5L6 20.5V15.8043M2 8.5L18 20.5V15.8043" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Quran01Icon;
