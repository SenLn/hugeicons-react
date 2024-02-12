import * as React from "react";
import type { SVGProps } from "react";

interface DomeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DomeIcon = (props: DomeIconProps) => {
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
        <path d="M6.85635 22C6.31271 20.0139 6 17.6873 6 15.2C6 7.90984 8.68629 2 12 2C15.3137 2 18 7.90984 18 15.2C18 17.6873 17.6873 20.0139 17.1436 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5516 5C14.6016 9.20545 9.11987 7.73398 6.74686 11.1962C6.41711 11.6774 6.41568 12.3243 6.75482 12.7985C9.23576 16.2675 15.599 14.7924 17.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.44841 5C9.39844 9.20545 14.8801 7.73398 17.2531 11.1962C17.5829 11.6774 17.5843 12.3243 17.2452 12.7985C14.7642 16.2675 8.40101 14.7924 6.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DomeIcon;
