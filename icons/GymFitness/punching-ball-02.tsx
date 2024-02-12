import * as React from "react";
import type { SVGProps } from "react";

interface PunchingBall02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PunchingBall02Icon = (props: PunchingBall02IconProps) => {
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
        <path d="M14.6897 18.5H9.31035C8.63048 18.5 8.00273 18.8846 7.66542 19.5077L7.12621 20.5039C6.76535 21.1705 7.22133 22 7.94867 22H16.0513C16.7787 22 17.2347 21.1705 16.8738 20.5039L16.3346 19.5077C15.9973 18.8846 15.3695 18.5 14.6897 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C9.51472 2 7.5 3.17807 7.5 5.84619C7.5 8.18121 9.5105 8.74889 10.5152 10.9489C10.6595 11.2648 10.7316 11.4227 10.7782 11.4936C10.9831 11.8056 11.1795 11.9309 11.5517 11.9872C11.6363 12 11.7575 12 11.9999 12C12.2423 12 12.3636 12 12.4481 11.9873C12.8204 11.9311 13.0162 11.8063 13.2214 11.4945C13.268 11.4236 13.3404 11.2655 13.4853 10.9491C14.4901 8.75415 16.5 8.20205 16.5 5.84619C16.5 3.15386 14.4853 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default PunchingBall02Icon;
