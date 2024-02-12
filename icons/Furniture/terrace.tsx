import * as React from "react";
import type { SVGProps } from "react";

interface TerraceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TerraceIcon = (props: TerraceIconProps) => {
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
        <path d="M3 14L4 19M4 19L3 22M4 19H6.65287C7.35734 19 7.52345 19.1407 7.63927 19.8356L8 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 14L20 19M20 19L21 22M20 19H17.3471C16.6427 19 16.4765 19.1407 16.3607 19.8356L16 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.60045 7.40727C6.67011 6.43818 8.75263 4.89851 10.2888 3.36403C11.1992 2.45468 11.6543 2 12 2C12.3457 2 12.8008 2.45468 13.7112 3.36403C15.2474 4.89851 17.3299 6.43818 19.3995 7.40727C20.1034 7.73682 20.5328 8.14335 20.873 8.9348C21.1333 9.54022 21.0165 10 20.3071 10H3.69295C2.98348 10 2.86672 9.54022 3.12697 8.9348C3.46718 8.14335 3.89663 7.73683 4.60045 7.40727Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 22H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TerraceIcon;
