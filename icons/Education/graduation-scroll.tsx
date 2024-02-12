import * as React from "react";
import type { SVGProps } from "react";

interface GraduationScrollIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GraduationScrollIcon = (props: GraduationScrollIconProps) => {
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
        <path d="M21.1609 9.92846C22.1928 9.54155 22.2858 7.69292 21.3685 5.79943C20.4512 3.90594 18.8711 2.68462 17.8391 3.07154M21.1609 9.92846C20.1289 10.3154 18.5488 9.09406 17.6315 7.20057C16.7142 5.30708 16.8072 3.45845 17.8391 3.07154M21.1609 9.92846L6.16089 18.9285C5.12895 19.3154 3.54878 18.0941 2.6315 16.2006C1.71421 14.3071 1.80716 12.4584 2.83911 12.0715L17.8391 3.07154" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 13.6067C13.6383 13.0337 10.9233 10.9504 10.9574 7.20068M11.5 15.7007C10.3333 15.144 7.9 13.0782 7.5 9.26917" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.43 14C16.0276 15.1302 16.639 18.1124 14.5498 21L13.5632 19.584L11 20.8103C11 20.8103 12.8249 18.8868 11.9528 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GraduationScrollIcon;
