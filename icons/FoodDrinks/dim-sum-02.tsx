import * as React from "react";
import type { SVGProps } from "react";

interface DimSum02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DimSum02Icon = (props: DimSum02IconProps) => {
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
        <path d="M7.5 11.5L7 12.5M10.5 11.5L11 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 6.5L17 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22C12.866 22 16 19.3137 16 16C16 14.5985 15.4394 13.1304 14.5 11.9028C12.5622 9.57474 12.0035 7.80237 12 7C11.9412 8.60728 9.9849 9.47735 9 8C8.0151 9.47735 6.05882 8.60728 6 7C5.99651 7.80237 5.43778 9.57474 3.5 11.9028C2.56057 13.1304 2 14.5985 2 16C2 19.3137 5.13401 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 5.01625C11.8344 3.62313 12.11 2.56899 12.1124 2C12.1706 3.61599 14.1049 4.49076 15.0787 3.00542C16.0525 4.49076 17.9868 3.61599 18.045 2C18.0484 2.80672 18.6009 4.58869 20.5169 6.9293C21.4457 8.16365 22 9.6397 22 11.0487C22 13.0987 20.8268 14.9099 19.0337 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DimSum02Icon;
