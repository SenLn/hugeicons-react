import * as React from "react";
import type { SVGProps } from "react";

interface Orbit02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Orbit02Icon = (props: Orbit02IconProps) => {
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
        <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.96388 16.289C2.34585 14.9892 2 13.535 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.5778 22 9.22492 21.7031 8 21.1679M2.96388 16.289C2.38605 16.6396 2 17.2747 2 18C2 19.1046 2.89543 20 4 20C4.52223 20 4.99771 19.7998 5.35392 19.4721C5.75112 19.1065 6 18.5823 6 18C6 16.8954 5.10457 16 4 16C3.6207 16 3.26606 16.1056 2.96388 16.289Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.3283 14.5048C15.9751 14.1908 15.5098 14 15 14C13.8954 14 13 14.8954 13 16C13 16.3067 13.069 16.5972 13.1924 16.8569M16.3283 14.5048C16.7404 14.8711 17 15.4052 17 16C17 17.1046 16.1046 18 15 18C14.2021 18 13.5133 17.5328 13.1924 16.8569M16.3283 14.5048C16.7555 13.7683 17 12.9127 17 12C17 11.0893 16.7565 10.2354 16.3311 9.5M13.1924 16.8569C12.8103 16.9504 12.4109 17 12 17C9.23858 17 7 14.7614 7 12C7 11.0893 7.24349 10.2354 7.66891 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Orbit02Icon;
