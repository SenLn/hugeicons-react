import * as React from "react";
import type { SVGProps } from "react";

interface SquareArrowShrink01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SquareArrowShrink01Icon = (props: SquareArrowShrink01IconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.0167 11.0167C11.5915 10.4419 11.4959 8 11.4959 8M11.0167 11.0167C10.4419 11.5915 8 11.4958 8 11.4958M11.0167 11.0167L7 7M12.9869 12.9868C13.5617 12.412 16.0036 12.5077 16.0036 12.5077M12.9869 12.9868C12.4121 13.5616 12.5078 16.0035 12.5078 16.0035M12.9869 12.9868L17 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SquareArrowShrink01Icon;
