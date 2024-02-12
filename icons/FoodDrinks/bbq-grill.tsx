import * as React from "react";
import type { SVGProps } from "react";

interface BbqGrillIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BbqGrillIcon = (props: BbqGrillIconProps) => {
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
        <path d="M9 15L6 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 15L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 15L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5556 6C16.1481 5.44772 16.1481 4.55228 15.5556 4C14.963 3.44772 14.963 2.55228 15.5556 2M12 6C12.5926 5.44772 12.5926 4.55228 12 4C11.4074 3.44772 11.4074 2.55228 12 2M8.44444 6C9.03704 5.44772 9.03704 4.55228 8.44444 4C7.85185 3.44772 7.85185 2.55228 8.44444 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 19H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 15C15.5371 15 18.4632 12.3908 18.9485 8.99703C19.0107 8.56215 19.0418 8.3447 18.8918 8.17235C18.7419 8 18.5001 8 18.0164 8H5.98359C5.49992 8 5.25809 8 5.10816 8.17235C4.95823 8.3447 4.98933 8.56215 5.05151 8.99703C5.53679 12.3908 8.46285 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 10H20M5 10H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BbqGrillIcon;
