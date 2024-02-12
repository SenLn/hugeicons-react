import * as React from "react";
import type { SVGProps } from "react";

interface KissingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KissingIcon = (props: KissingIconProps) => {
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
        <path d="M15.5 21.3704C14.4107 21.7775 13.2313 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.6451 2 22.2649 6.87148 21.9877 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.00897 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14C10.7418 14 12.2153 14.2837 12.8323 14.7957C13.3942 15.2619 11.9234 15.654 11.9234 16C11.9234 16.346 13.5081 16.6436 12.8323 17.2043C12.2153 17.7163 10.7418 18 10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.3509 14.9103C20.2063 14.4336 21.2674 14.7714 21.7545 15.6998C22.2413 16.6283 21.981 17.8011 21.1782 18.3788L19.6234 19.366C18.8699 19.8445 18.4932 20.0837 18.1206 19.9735C17.748 19.8633 17.5301 19.4483 17.0945 18.6182L16.1958 16.906C15.7624 15.9627 16.0692 14.8017 16.9109 14.2679C17.7538 13.7338 18.8242 14.0239 19.3509 14.9103Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KissingIcon;
