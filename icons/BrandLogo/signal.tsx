import * as React from "react";
import type { SVGProps } from "react";

interface SignalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SignalIcon = (props: SignalIconProps) => {
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
        <path d="M12.0357 21.9286C17.5388 21.9286 22 17.4674 22 11.9643C22 6.46117 17.5388 2 12.0357 2C6.53258 2 2.07141 6.46117 2.07141 11.9643C2.07141 13.7792 1.72192 15.4808 2.56974 16.9464L2.07141 21.9286L7.05356 21.4304C8.51918 22.2782 10.2208 21.9286 12.0357 21.9286Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
        <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.275 5.4044 14.4704 6 15.5L5 19L8.5 18C9.52961 18.5956 10.725 19 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SignalIcon;
