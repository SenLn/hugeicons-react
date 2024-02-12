import * as React from "react";
import type { SVGProps } from "react";

interface PenTool02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PenTool02Icon = (props: PenTool02IconProps) => {
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
        <path d="M16.4215 7C16.6828 5.81796 17.5116 3.8044 16.5398 2.73202C15.8765 2 14.6288 2 12.1335 2L11.8665 2C9.37118 2 8.12353 2 7.46018 2.73202C6.4884 3.80441 7.31722 5.81796 7.57854 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.0068 14.6526L13.7868 20.3584C12.9774 21.4528 12.5726 22 12 22C11.4274 22 11.0227 21.4528 10.2132 20.3584L5.99325 14.6526C5.31656 13.7377 4.97821 13.2802 5.00109 12.7927C5.02396 12.3052 5.47593 11.7946 6.37986 10.7732C7.25108 9.78884 7.57854 8.76948 7.57854 7.00045L16.4215 7C16.4215 8.76902 16.7493 9.78857 17.6203 10.7731C18.5242 11.7947 18.9761 12.3054 18.9989 12.7929C19.0217 13.2803 18.6834 13.7377 18.0068 14.6526Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 14C13.0587 14.318 12.5464 14.5 12 14.5M12 14.5C11.4536 14.5 10.9413 14.318 10.5 14M12 14.5L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PenTool02Icon;
