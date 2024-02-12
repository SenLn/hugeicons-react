import * as React from "react";
import type { SVGProps } from "react";

interface CourtHouseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CourtHouseIcon = (props: CourtHouseIconProps) => {
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
        <path d="M5 9.08333C5 7.91667 6 7.5 6.5 7.5C7.49411 7.5 8 8.25383 8 9.08333C8 11.0163 6.65685 12 5 12C3.34315 12 2 10.433 2 8.5C2 6.567 3.34315 5 5 5H19C20.6569 5 22 6.567 22 8.5C22 10.433 20.6569 12 19 12C17.3431 12 16 11.0163 16 9.08333C16 8.25383 16.5059 7.5 17.5 7.5C18 7.5 19 7.91667 19 9.08333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 20C3 19.4477 3.44772 19 4 19H20C20.5523 19 21 19.4477 21 20V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 9H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 19L9.5 15M14.5 19L14.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 5C19 3.58579 19 2.87868 18.5607 2.43934C18.1213 2 17.4142 2 16 2H8C6.58579 2 5.87868 2 5.43934 2.43934C5 2.87868 5 3.58579 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 12V19H19V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CourtHouseIcon;
