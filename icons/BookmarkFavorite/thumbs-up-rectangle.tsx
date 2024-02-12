import * as React from "react";
import type { SVGProps } from "react";

interface ThumbsUpRectangleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThumbsUpRectangleIcon = (props: ThumbsUpRectangleIconProps) => {
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
        <path d="M12.6525 9.2864L12.475 9.84293C12.3295 10.299 12.2567 10.527 12.3127 10.707C12.3579 10.8527 12.4573 10.9783 12.5927 11.0609C12.76 11.1631 13.0131 11.1631 13.5194 11.1631H13.7887C15.5021 11.1631 16.3588 11.1631 16.7634 11.6553C16.8097 11.7116 16.8508 11.7714 16.8864 11.8341C17.1977 12.3832 16.8438 13.1227 16.136 14.6019C15.4865 15.9593 15.1617 16.638 14.5587 17.0375C14.5003 17.0761 14.4403 17.1126 14.3789 17.1468C13.744 17.5 12.9574 17.5 11.3843 17.5H11.0431C9.13715 17.5 8.18419 17.5 7.59209 16.9432C7 16.3864 7 15.4902 7 13.6978V13.0679C7 12.1259 7 11.655 7.17223 11.2239C7.34445 10.7929 7.67424 10.4384 8.3338 9.72954L11.0614 6.79801C11.1298 6.72449 11.164 6.68772 11.1942 6.66225C11.4757 6.42448 11.9102 6.45124 12.1563 6.72152C12.1826 6.75047 12.2115 6.79112 12.2691 6.87241C12.3592 6.99956 12.4043 7.06314 12.4436 7.12613C12.7952 7.69003 12.9016 8.35988 12.7405 8.9958C12.7225 9.06683 12.6992 9.14006 12.6525 9.2864Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ThumbsUpRectangleIcon;
