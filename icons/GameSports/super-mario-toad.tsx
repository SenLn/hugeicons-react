import * as React from "react";
import type { SVGProps } from "react";

interface SuperMarioToadIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SuperMarioToadIcon = (props: SuperMarioToadIconProps) => {
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
        <path d="M5.00779 16.7056C4.97141 16.3269 5.05697 16.1715 5.38146 15.9558C9.30933 13.3451 15.6755 13.3481 18.7181 15.9646C18.9566 16.1696 19.0195 16.3169 18.9951 16.6236C18.8758 18.1215 18.471 19.8517 17.2149 20.8332C15.2211 22.3912 8.76892 22.3867 6.78076 20.8332C5.53838 19.8624 5.14963 18.182 5.00779 16.7056Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.00896 18H9M15 18H14.991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 18C3 17 2 14.2512 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21 17 19 18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.36963 7C4.66856 7.31423 5.32655 8.8999 4.83928 10.5417C4.40097 12.0185 3.18529 13.0377 2 12.9989" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.6315 7C19.3317 7.31423 18.6732 8.8999 19.1608 10.5417C19.5992 12.0177 20.8145 13.0366 22 12.999" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default SuperMarioToadIcon;
