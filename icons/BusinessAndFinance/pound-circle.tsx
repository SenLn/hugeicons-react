import * as React from "react";
import type { SVGProps } from "react";

interface PoundCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PoundCircleIcon = (props: PoundCircleIconProps) => {
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
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.0691 10.2343C15.0288 9.65438 14.7219 8.24931 13.5421 7.73018C12.0674 7.08127 10.1256 7.89786 9.94389 10.0012C9.85864 10.9881 10.3367 12.0229 11.0314 12.5341C11.6697 13.0039 12.6382 12.9801 13.5421 12.9801H8.52637M11.5563 12.9801C11.3863 13.6696 10.4532 15.6515 8.96629 16.4786H14.3772C14.5866 16.4786 15.1772 16.5332 16.0135 15.9332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PoundCircleIcon;
