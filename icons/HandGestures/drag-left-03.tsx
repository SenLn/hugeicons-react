import * as React from "react";
import type { SVGProps } from "react";

interface DragLeft03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragLeft03Icon = (props: DragLeft03IconProps) => {
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
        <path d="M13.0659 9.72218H14.0032C15.0386 9.72218 15.878 10.5679 15.878 11.6111M15.878 11.6111V12.5555M15.878 11.6111C15.878 11.0895 16.2976 10.6666 16.8153 10.6666C17.8507 10.6666 18.6902 11.5123 18.6902 12.5555M18.6902 12.5555V13.4999M18.6902 12.5555C18.6902 12.0611 19.1307 11.685 19.6148 11.7663L19.9357 11.8202C20.8397 11.972 21.5023 12.76 21.5023 13.6834L21.5019 14.1297C21.5019 16.1823 21.5019 17.2086 21.1915 18.0257C21.0115 18.4996 20.5366 19.1041 20.1569 19.5409C19.8284 19.9187 19.6272 20.3979 19.6272 20.9001V22M13.0657 11.6111V6.41665C13.0657 5.63426 12.4361 5 11.6596 5C10.883 5 10.2535 5.63426 10.2535 6.41665L10.2534 13.9367L8.73452 12.4016C8.06811 11.728 6.9704 11.7895 6.38166 12.5333C5.93118 13.1024 5.91873 13.9075 6.3514 14.4906L9.72568 18.8333C10.3713 19.6641 10.7221 20.9448 10.7221 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.4571 9.5C14.6842 8.81764 15.5148 7.50601 15.5148 6C15.5148 3.79086 13.7277 2 11.5233 2C9.3188 2 7.53174 3.79086 7.53174 6C7.53174 7.50601 8.36226 8.81764 9.58936 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.30387 6.02265H2.49756M2.49756 6.02265C2.49756 6.49277 3.01072 6.71697 3.33183 7.01135L4.50948 8.00993M2.49756 6.02265C2.49756 5.55252 3.01879 5.29858 3.33183 5.00137L4.50948 3.98999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragLeft03Icon;
