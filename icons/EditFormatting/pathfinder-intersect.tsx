import * as React from "react";
import type { SVGProps } from "react";

interface PathfinderIntersectIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PathfinderIntersectIcon = (props: PathfinderIntersectIconProps) => {
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
        <path d="M9.76082 10.3157C9.92442 10.1105 10.1105 9.92442 10.3157 9.76082C11.0862 9.14637 12.1482 9.02577 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9743 11.8517 14.8538 12.9135 14.2393 13.684C14.0757 13.8892 13.8896 14.0753 13.6845 14.2389C12.914 14.8534 11.8519 14.9742 10.0006 14.9979C9.52793 15.004 9.29161 15.007 9.14232 14.8577C8.99303 14.7084 8.99606 14.4721 9.0021 13.9994C9.02577 12.1482 9.14637 11.0862 9.76082 10.3157Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 14.5V16.5M16.5 22H14.5M22 12C21.9345 11.1196 21.7782 10.5249 21.4047 10.0579C21.2673 9.88599 21.1109 9.73003 20.9385 9.59294C20.4718 9.22181 19.8778 9.06568 19 9H18.5M22 19C21.9343 19.8778 21.7782 20.4718 21.4071 20.9385C21.27 21.1109 21.114 21.2673 20.9421 21.4047C20.4751 21.7782 19.8804 21.9345 19 22M12 22C11.1222 21.9343 10.5282 21.7782 10.0615 21.4071C9.88914 21.27 9.73274 21.114 9.59527 20.9421C9.22182 20.4751 9.06547 19.8804 9 19L9 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12C2.06547 12.8804 2.22182 13.4751 2.59527 13.9421C2.73274 14.114 2.88914 14.27 3.06153 14.4071C3.52821 14.7782 4.12216 14.9343 5 15H5.5M2 5C2.06568 4.12216 2.22181 3.52821 2.59294 3.06153C2.73003 2.88914 2.88599 2.73274 3.0579 2.59527C3.52488 2.22182 4.11965 2.06547 5 2M12 2C12.8778 2.06568 13.4718 2.22181 13.9385 2.59294C14.1109 2.73003 14.2673 2.88599 14.4047 3.0579C14.7782 3.52488 14.9345 4.11965 15 5V5.5M2 7.5L2 9.5M9.5 2L7.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PathfinderIntersectIcon;
