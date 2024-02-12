import * as React from "react";
import type { SVGProps } from "react";

interface BookmarkOff01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BookmarkOff01Icon = (props: BookmarkOff01IconProps) => {
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
        <path d="M20 19.9429C19.9381 20.9761 19.7617 21.5725 19.259 21.8481C17.7592 22.6701 14.946 19.9276 13.61 19.1019C12.8352 18.623 12.4478 18.3836 12.0167 18.3836C11.5856 18.3836 11.1982 18.623 10.4234 19.1019C9.08741 19.9276 6.27421 22.6701 4.77446 21.8481C4 21.4236 4 20.2377 4 17.866V9.35632C4 7.18055 4 5.63815 4.23168 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 16V9.70753C20 6.07416 20 4.25748 18.8284 3.12874C17.6569 2 15.7712 2 12 2C9.39647 2 7.69163 2 6.5 2.37139" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 7L19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BookmarkOff01Icon;
