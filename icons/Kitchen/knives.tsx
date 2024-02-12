import * as React from "react";
import type { SVGProps } from "react";

interface KnivesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KnivesIcon = (props: KnivesIconProps) => {
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
        <path d="M15.5 10L18.1025 7.39117C18.8659 7.49623 19.6693 7.26445 20.2565 6.69585C21.2478 5.73599 21.2478 4.17975 20.2565 3.21989C19.2652 2.26004 17.658 2.26004 16.6667 3.21989L12 7.73864" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 12L18.4252 10.5448C19.2397 10.663 20.0968 10.4023 20.7233 9.76257C21.7376 8.72688 21.7345 7.0592 20.8538 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.6509 18.4629L15.6415 16.4928C16.8805 15.2666 17.5 14.6534 17.5 13.8916C17.5 13.1297 16.8805 12.5165 15.6415 11.2903L13.6703 9.33936C12.4313 8.11312 11.8118 7.5 11.042 7.5C10.2722 7.5 9.65267 8.11312 8.41368 9.33936L3.58868 14.1147C3.05152 14.6463 2.78294 14.9122 2.64147 15.2502C2.5 15.5882 2.5 15.9641 2.5 16.716V17.821C2.5 19.5552 2.5 20.4222 3.04434 20.961C3.58867 21.4997 4.4648 21.4997 6.21698 21.4997L12.6887 21.5C14.4565 21.5 15.3403 21.5 15.8895 20.9622C16.4387 20.4244 16.4387 19.5589 16.4387 17.8277V15.6928" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KnivesIcon;
