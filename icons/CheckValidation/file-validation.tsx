import * as React from "react";
import type { SVGProps } from "react";

interface FileValidationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileValidationIcon = (props: FileValidationIconProps) => {
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
        <path d="M9.72727 2C6.46607 2 4.83546 2 3.70307 2.79784C3.37862 3.02643 3.09058 3.29752 2.8477 3.60289C2 4.66867 2 6.20336 2 9.27273V11.8182C2 14.7814 2 16.2629 2.46894 17.4462C3.22281 19.3486 4.81714 20.8491 6.83836 21.5586C8.09563 22 9.66981 22 12.8182 22C14.6173 22 15.5168 22 16.2352 21.7478C17.3902 21.3424 18.3012 20.4849 18.732 19.3979C19 18.7217 19 17.8751 19 16.1818V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12C2 13.8409 3.49238 15.3333 5.33333 15.3333C5.99912 15.3333 6.78404 15.2167 7.43137 15.3901C8.00652 15.5442 8.45576 15.9935 8.60988 16.5686C8.78333 17.216 8.66667 18.0009 8.66667 18.6667C8.66667 20.5076 10.1591 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileValidationIcon;
