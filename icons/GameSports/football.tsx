import * as React from "react";
import type { SVGProps } from "react";

interface FootballIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FootballIcon = (props: FootballIconProps) => {
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
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.7077 9.34893C11.882 9.21702 12.118 9.21702 12.2923 9.34893L14.545 11.054C14.7193 11.1859 14.7922 11.4197 14.7256 11.6332L13.8652 14.3921C13.7986 14.6055 13.6077 14.75 13.3923 14.75H10.6077C10.3923 14.75 10.2014 14.6055 10.1348 14.3921L9.27437 11.6332C9.20781 11.4197 9.28073 11.1859 9.45499 11.054L11.7077 9.34893Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9V5M15 11L19 9.5M14 15L16 18M10 14.5L8 17M9 11.5L5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 2.5L12.0165 4.62241L15 2.5M2 12.7998L5.19655 10.4388L3.55548 6.72045M19.4703 18.8531L15.6158 18.1555L14.2655 22M20.0298 6.19586L18.8035 9.38978L22 11.7507M8.00992 21.4059L8.05142 17.1665L4.00331 17.21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FootballIcon;
