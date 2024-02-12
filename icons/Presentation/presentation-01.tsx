import * as React from "react";
import type { SVGProps } from "react";

interface Presentation01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Presentation01Icon = (props: Presentation01IconProps) => {
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
        <path d="M2.5 11C2.5 13.8284 2.5 15.2426 3.37868 16.1213C4.25736 17 5.67157 17 8.5 17H15.5C18.3284 17 19.7426 17 20.6213 16.1213C21.5 15.2426 21.5 13.8284 21.5 11V8C21.5 5.17157 21.5 3.75736 20.6213 2.87868C19.7426 2 18.3284 2 15.5 2H8.5C5.67157 2 4.25736 2 3.37868 2.87868C2.5 3.75736 2.5 5.17157 2.5 8V11Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 22L12.0001 19L17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Presentation01Icon;
