import * as React from "react";
import type { SVGProps } from "react";

interface AudioBook02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AudioBook02Icon = (props: AudioBook02IconProps) => {
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
        <path d="M6.99805 4.94629H15.498C16.3264 4.94629 16.998 5.61786 16.998 6.44629V7.94629" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.998 19.4928C17.998 20.8771 16.8787 21.9994 15.498 21.9994C14.1173 21.9994 12.998 20.8771 12.998 19.4928C12.998 18.1084 14.1173 16.9862 15.498 16.9862C16.8787 16.9862 17.998 18.1084 17.998 19.4928ZM17.998 19.4928V12.9756C18.3313 13.4769 18.598 15.5825 20.998 15.9835" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.0069 2.00098L5.80952 2.001C5.31223 2.001 4.8036 2.07359 4.40163 2.36713C3.12706 3.29785 2.14483 5.3736 4.12838 7.24764C4.68532 7.77384 5.4638 7.96459 6.22905 7.96459H17.7932C18.5873 7.96459 20.0112 8.07764 20.0112 10.4895M3.0061 5.15298L3.03962 17.9993C3.1663 20.3598 4.77003 21.9101 6.97508 21.9101H10.5065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AudioBook02Icon;
