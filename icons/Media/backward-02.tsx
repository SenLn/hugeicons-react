import * as React from "react";
import type { SVGProps } from "react";

interface Backward02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Backward02Icon = (props: Backward02IconProps) => {
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
        <path d="M2.16293 12.9178C2.4453 13.6884 3.29859 14.3047 5.00518 15.5372C7.33231 17.218 8.49587 18.0583 9.4688 17.9969C10.2118 17.9499 10.9024 17.6007 11.3777 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 11.3777 6.96846C10.9024 6.39933 10.2118 6.0501 9.4688 6.00315C8.49587 5.94167 7.33231 6.78203 5.00518 8.46275C3.29859 9.6953 2.4453 10.3116 2.16293 11.0822C1.94569 11.675 1.94569 12.325 2.16293 12.9178Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12.1629 12.9178C12.4453 13.6884 13.2986 14.3047 15.0052 15.5372C17.3323 17.218 18.4959 18.0583 19.4688 17.9969C20.2118 17.9499 20.9024 17.6007 21.3777 17.0315C22 16.2863 22 14.8575 22 12C22 9.14246 22 7.71369 21.3777 6.96846C20.9024 6.39933 20.2118 6.0501 19.4688 6.00315C18.4959 5.94167 17.3323 6.78203 15.0052 8.46275C13.2986 9.6953 12.4453 10.3116 12.1629 11.0822C11.9457 11.675 11.9457 12.325 12.1629 12.9178Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Backward02Icon;
