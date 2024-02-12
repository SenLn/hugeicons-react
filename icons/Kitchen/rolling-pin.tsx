import * as React from "react";
import type { SVGProps } from "react";

interface RollingPinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RollingPinIcon = (props: RollingPinIconProps) => {
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
        <path d="M18.4368 5.56324C17.7156 4.84207 16.9002 4.34309 16.1458 4.10787C15.8323 4.01011 15.6755 3.96123 15.3675 4.03713C15.0594 4.11302 14.8899 4.28249 14.551 4.62141L4.62141 14.551C4.28248 14.8899 4.11302 15.0594 4.03713 15.3675C3.96123 15.6755 4.01011 15.8323 4.10787 16.1458C4.34309 16.9002 4.84207 17.7156 5.56324 18.4368C6.28441 19.1579 7.0998 19.6569 7.85419 19.8921C8.16773 19.9899 8.3245 20.0388 8.63255 19.9629C8.94059 19.887 9.11005 19.7175 9.44898 19.3786L19.3786 9.44898C19.7175 9.11005 19.887 8.94059 19.9629 8.63255C20.0388 8.3245 19.9899 8.16773 19.8921 7.85419C19.6569 7.0998 19.1579 6.28441 18.4368 5.56324Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.2904 6C20.1754 5.65327 21.1891 4.98877 21.549 4.62887C22.1503 4.02748 22.1503 3.05243 21.549 2.45104C20.9476 1.84965 19.9725 1.84965 19.3711 2.45104C19.0112 2.81094 18.3467 3.82465 18 4.70962" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 19.2904C5.65327 20.1754 4.98877 21.1891 4.62887 21.549C4.02748 22.1503 3.05243 22.1503 2.45104 21.549C1.84965 20.9476 1.84965 19.9725 2.45104 19.3711C2.81094 19.0112 3.82465 18.3467 4.70962 18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default RollingPinIcon;
