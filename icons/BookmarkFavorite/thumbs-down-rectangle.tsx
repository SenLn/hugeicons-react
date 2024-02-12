import * as React from "react";
import type { SVGProps } from "react";

interface ThumbsDownRectangleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThumbsDownRectangleIcon = (props: ThumbsDownRectangleIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12.6525 14.7136L12.475 14.1571C12.3295 13.701 12.2567 13.473 12.3127 13.293C12.3579 13.1473 12.4573 13.0217 12.5927 12.9391C12.76 12.8369 13.0131 12.8369 13.5194 12.8369H13.7887C15.5021 12.8369 16.3588 12.8369 16.7634 12.3447C16.8097 12.2884 16.8508 12.2286 16.8864 12.1659C17.1977 11.6168 16.8438 10.8773 16.136 9.39811C15.4865 8.04072 15.1617 7.36203 14.5587 6.96255C14.5003 6.92387 14.4403 6.8874 14.3789 6.8532C13.744 6.5 12.9574 6.5 11.3843 6.5H11.0431C9.13715 6.5 8.18419 6.5 7.59209 7.05681C7 7.61363 7 8.50981 7 10.3022V10.9321C7 11.8741 7 12.345 7.17223 12.7761C7.34445 13.2071 7.67424 13.5616 8.3338 14.2705L11.0614 17.202C11.1298 17.2755 11.164 17.3123 11.1942 17.3377C11.4757 17.5755 11.9102 17.5488 12.1563 17.2785C12.1826 17.2495 12.2115 17.2089 12.2691 17.1276C12.3592 17.0004 12.4043 16.9369 12.4436 16.8739C12.7952 16.31 12.9016 15.6401 12.7405 15.0042C12.7225 14.9332 12.6992 14.8599 12.6525 14.7136Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ThumbsDownRectangleIcon;
