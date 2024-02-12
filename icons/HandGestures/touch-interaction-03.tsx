import * as React from "react";
import type { SVGProps } from "react";

interface TouchInteraction03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchInteraction03Icon = (props: TouchInteraction03IconProps) => {
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
        <path d="M12.5457 9.72218H13.485C14.5226 9.72218 15.3638 10.5679 15.3638 11.6111M15.3638 11.6111V12.5555M15.3638 11.6111C15.3638 11.0895 15.7843 10.6666 16.3031 10.6666C17.3407 10.6666 18.1819 11.5123 18.1819 12.5555M18.1819 12.5555V13.4999M18.1819 12.5555C18.1819 12.0611 18.6234 11.685 19.1085 11.7663L19.4301 11.8202C20.336 11.972 21 12.76 21 13.6834L20.9996 14.1297C20.9996 16.1823 20.9996 17.2086 20.6886 18.0257C20.5082 18.4996 20.0323 19.1041 19.6518 19.5409C19.3226 19.9187 19.1209 20.3979 19.1209 20.9001V22M12.5455 11.6111V6.41665C12.5455 5.63426 11.9146 5 11.1364 5C10.3582 5 9.72736 5.63426 9.72736 6.41665L9.72717 13.9367L8.2051 12.4016C7.53728 11.728 6.43723 11.7895 5.84724 12.5333C5.3958 13.1024 5.38333 13.9075 5.81692 14.4906L9.19837 18.8333C9.84533 19.6641 10.1969 20.9448 10.1969 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8H5.17647C3.67907 8 2.93037 8 2.46518 7.56066C2 7.12132 2 6.41421 2 5C2 3.58579 2 2.87868 2.46518 2.43934C2.93037 2 3.67907 2 5.17647 2H16.8235C18.3209 2 19.0696 2 19.5348 2.43934C20 2.87868 20 3.58579 20 5C20 6.41421 20 7.12132 19.5348 7.56066C19.0696 8 18.3209 8 16.8235 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TouchInteraction03Icon;
