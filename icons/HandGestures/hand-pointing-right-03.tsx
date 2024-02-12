import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingRight03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingRight03Icon = (props: HandPointingRight03IconProps) => {
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
        <path d="M16 11.5004L16 12.5004C16 13.605 15.1046 14.5004 14 14.5004M14 14.5004L13 14.5004M14 14.5004C14.5523 14.5004 15 14.9481 15 15.5004C15 16.605 14.1046 17.5004 13 17.5004M13 17.5004L12 17.5004M13 17.5004C13.5235 17.5004 13.9217 17.9705 13.8356 18.4868L13.7785 18.8292C13.6178 19.7936 12.7834 20.5004 11.8057 20.5004L10.3332 20.5C8.15984 20.5 7.07313 20.5 6.20799 20.1689C5.70614 19.9769 5.06612 19.4703 4.60361 19.0652C4.20359 18.7148 3.69618 18.5 3.1644 18.5L1.99983 18.5M14 11.5002L20.5 11.5002C21.3284 11.5002 22 10.8286 22 10.0002C22 9.17178 21.3284 8.50021 20.5 8.50021L10.5376 8.5L12.163 6.8797C12.8761 6.16877 12.8111 4.99772 12.0235 4.36965C11.4209 3.88907 10.5685 3.8758 9.95109 4.33738L5.35288 7.93707C4.47312 8.62579 3.11711 9 1.99983 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingRight03Icon;
