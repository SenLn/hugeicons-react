import * as React from "react";
import type { SVGProps } from "react";

interface Plug02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Plug02Icon = (props: Plug02IconProps) => {
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
        <path d="M14 8V11M10 11V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.00297 12.0267C7.95812 11.4726 8.42638 11 9.02009 11H14.9799C15.5736 11 16.0419 11.4726 15.997 12.0267L15.8745 13.5403C15.7864 14.6285 15.4008 15.6771 14.7546 16.5856L14.3541 17.1487C13.9759 17.6805 13.3385 18 12.6558 18H11.3442C10.6615 18 10.0241 17.6805 9.64588 17.1487L9.24535 16.5856C8.59923 15.6771 8.2136 14.6285 8.12551 13.5403L8.00297 12.0267Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 21.2109C19.5318 19.6644 22 16.1323 22 12.0224C22 6.4872 17.5228 2 12 2C6.47715 2 2 6.4872 2 12.0224C2 17.2199 5.94741 21.4933 11.0014 21.9955C11.551 22.0501 12 21.5962 12 21.0426V18.0359" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Plug02Icon;
