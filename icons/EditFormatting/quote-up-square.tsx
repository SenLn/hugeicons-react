import * as React from "react";
import type { SVGProps } from "react";

interface QuoteUpSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const QuoteUpSquareIcon = (props: QuoteUpSquareIconProps) => {
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
        <path d="M13.2544 14C13.2544 14.9428 13.2544 15.4142 13.5653 15.7071C13.8761 16 14.3765 16 15.3772 16C16.3779 16 16.8782 16 17.1891 15.7071C17.5 15.4142 17.5 14.9428 17.5 14C17.5 13.0572 17.5 12.5858 17.1891 12.2929C16.8782 12 16.3779 12 15.3772 12C14.3765 12 13.8761 12 13.5653 12.2929C13.2544 12.5858 13.2544 13.0572 13.2544 14ZM13.2544 14V11.9313C13.2544 10.0978 14.5895 8.54292 16.4386 8M6.5 14C6.5 14.9428 6.5 15.4142 6.81088 15.7071C7.12176 16 7.62211 16 8.62281 16C9.62351 16 10.1239 16 10.4347 15.7071C10.7456 15.4142 10.7456 14.9428 10.7456 14C10.7456 13.0572 10.7456 12.5858 10.4347 12.2929C10.1239 12 9.62351 12 8.62281 12C7.62211 12 7.12176 12 6.81088 12.2929C6.5 12.5858 6.5 13.0572 6.5 14ZM6.5 14V11.9313C6.5 10.0978 7.83509 8.54292 9.68421 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default QuoteUpSquareIcon;
