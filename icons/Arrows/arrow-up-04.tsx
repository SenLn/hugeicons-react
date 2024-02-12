import * as React from "react";
import type { SVGProps } from "react";

interface ArrowUp04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowUp04Icon = (props: ArrowUp04IconProps) => {
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
        <path d="M12 10L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6026 5.41415L14.3639 6.38058C15.5974 7.94638 16.2141 8.72928 15.9328 9.36464C15.6515 10 14.6881 10 12.7613 10H11.2387C9.31191 10 8.34853 10 8.06721 9.36464C7.7859 8.72928 8.40264 7.94638 9.63612 6.38059L10.3974 5.41415C11.1401 4.47138 11.5115 4 12 4C12.4885 4 12.8599 4.47138 13.6026 5.41415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowUp04Icon;
