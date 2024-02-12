import * as React from "react";
import type { SVGProps } from "react";

interface DatabaseRestoreIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DatabaseRestoreIcon = (props: DatabaseRestoreIconProps) => {
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
        <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.842 13L20.4127 15.3449L19.4647 14.7618C18.7894 14.2569 17.9501 13.9576 17.0404 13.9576C14.809 13.9576 13 15.7579 13 17.9788C13 20.1996 14.809 22 17.0404 22C18.9951 22 20.6256 20.6185 21 18.783" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5V10M3 5V19C3 20.6569 6.58172 22 11 22C11.0849 22 11.1694 21.9995 11.2537 21.9985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 13.616 6.40729 14.9336 10.6748 14.9976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DatabaseRestoreIcon;
