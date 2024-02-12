import * as React from "react";
import type { SVGProps } from "react";

interface SalahIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SalahIcon = (props: SalahIconProps) => {
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
        <path d="M17.5 18C17.2128 17.2408 16.9563 16.1375 16 15.5C14.5 14.5 13 14 13 12.5C13 11 12.5 8 12.5 8L13.1955 7.26803C14.8935 8.02463 16.5 5.88071 16.5 4.5C16.5 3.11929 15.3807 2 14 2C12.6193 2 11.5 3.11929 11.5 4.5C11.5 5.5 10.7 6.1 9.5 6.5C8 7 6 8 6 13C6 17 7.83333 18.3333 8.5 19C5.3 19 4.5 21 4.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20C19.5 18.8954 18.6046 18 17.5 18ZM17.5 18C9.7719 18 9.05992 13.3333 9.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SalahIcon;
