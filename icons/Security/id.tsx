import * as React from "react";
import type { SVGProps } from "react";

interface IdIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IdIcon = (props: IdIconProps) => {
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
        <path d="M8.5 18C10.3135 16.0463 13.667 15.9543 15.5 18M13.9406 12C13.9406 13.1046 13.0688 14 11.9934 14C10.918 14 10.0462 13.1046 10.0462 12C10.0462 10.8954 10.918 10 11.9934 10C13.0688 10 13.9406 10.8954 13.9406 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 4.00195C6.85561 4.01181 5.44101 4.10427 4.52513 4.97195C3.5 5.94312 3.5 7.5062 3.5 10.6324V15.3692C3.5 18.4954 3.5 20.0584 4.52513 21.0296C5.55025 22.0008 7.20017 22.0008 10.5 22.0008H13.5C16.7998 22.0008 18.4497 22.0008 19.4749 21.0296C20.5 20.0584 20.5 18.4954 20.5 15.3692V10.6324C20.5 7.5062 20.5 5.94312 19.4749 4.97195C18.559 4.10427 17.1444 4.01181 14.5 4.00195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.77216 3.63163C9.8681 3.21682 9.91608 3.00942 10.0082 2.84004C10.2229 2.44546 10.6188 2.15548 11.0914 2.0467C11.2943 2 11.5296 2 12 2C12.4704 2 12.7057 2 12.9086 2.0467C13.3812 2.15548 13.7771 2.44545 13.9918 2.84004C14.0839 3.00942 14.1319 3.21682 14.2278 3.63163L14.3111 3.99176C14.4813 4.72744 14.5664 5.09528 14.438 5.37824C14.3549 5.5615 14.2132 5.71842 14.031 5.82911C13.7496 6 13.3324 6 12.4981 6H11.5019C10.6676 6 10.2504 6 9.96901 5.82911C9.78677 5.71842 9.6451 5.5615 9.56197 5.37824C9.43361 5.09528 9.51869 4.72744 9.68886 3.99176L9.77216 3.63163Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default IdIcon;
