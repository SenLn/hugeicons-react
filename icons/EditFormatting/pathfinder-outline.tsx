import * as React from "react";
import type { SVGProps } from "react";

interface PathfinderOutlineIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PathfinderOutlineIcon = (props: PathfinderOutlineIconProps) => {
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
        <path d="M9.02599 12.996C9.08766 11.7402 9.26219 10.9321 9.75623 10.3126C9.91971 10.1076 10.1057 9.92166 10.3107 9.75819C10.9302 9.26415 11.7383 9.08961 12.9941 9.02795M16.9958 9C18.8475 9.02356 19.9094 9.14388 20.6797 9.75819C20.8847 9.92166 21.0706 10.1076 21.2341 10.3126C21.998 11.2706 21.998 12.6794 21.998 15.4971C21.998 18.3148 21.998 19.7237 21.2341 20.6816C21.0706 20.8866 20.8847 21.0726 20.6797 21.2361C19.7217 22 18.3129 22 15.4952 22C12.6775 22 11.2686 22 10.3107 21.2361C10.1057 21.0726 9.91971 20.8866 9.75623 20.6816C9.14193 19.9113 9.02161 18.8494 8.99805 16.9978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.9721 11.004C14.9104 12.2598 14.7359 13.0679 14.2418 13.6874C14.0783 13.8924 13.8924 14.0783 13.6874 14.2418C13.0679 14.7359 12.2598 14.9104 11.004 14.9721M7.00221 15C5.15059 14.9764 4.08869 14.8561 3.31837 14.2418C3.11338 14.0783 2.9274 13.8924 2.76393 13.6874C2 12.7294 2 11.3206 2 8.50287C2 5.68516 2 4.2763 2.76393 3.31837C2.9274 3.11338 3.11338 2.9274 3.31837 2.76393C4.2763 2 5.68516 2 8.50287 2C11.3206 2 12.7294 2 13.6874 2.76393C13.8924 2.9274 14.0783 3.11338 14.2418 3.31837C14.8561 4.08869 14.9764 5.15059 15 7.00221" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PathfinderOutlineIcon;
