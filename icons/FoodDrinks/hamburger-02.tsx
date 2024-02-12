import * as React from "react";
import type { SVGProps } from "react";

interface Hamburger02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Hamburger02Icon = (props: Hamburger02IconProps) => {
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
        <path d="M14.8543 4H9.14613C6.6505 4 4.52893 5.96401 3.75315 8.7004C3.49773 9.6013 3.37003 10.0517 3.69086 10.5259C4.01169 11 4.53398 11 5.57854 11H18.4219C19.4664 11 19.9887 11 20.3096 10.5259C20.6304 10.0517 20.5027 9.6013 20.2473 8.7004C19.4715 5.96401 17.3499 4 14.8543 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 15H5.57833C4.53377 15 4.01149 15 3.69065 15.3387C3.36982 15.6773 3.49753 15.9991 3.75294 16.6426C4.52873 18.5971 6.65029 20 9.14593 20H14.8541C17.3497 20 19.4713 18.5971 20.2471 16.6426C20.5025 15.9991 20.6302 15.6773 20.3093 15.3387C19.9885 15 19.4662 15 18.4217 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 15H20C21.1046 15 22 14.1046 22 13C22 11.8954 21.1046 11 20 11H12M5 15H4C2.89543 15 2 14.1046 2 13C2 11.8954 2.89543 11 4 11H6M6 11L7.48149 12.7284C8.18721 13.5517 8.54007 13.9634 9 13.9634C9.45993 13.9634 9.81279 13.5517 10.5185 12.7284L12 11M6 11H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.00781 8L8.99883 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Hamburger02Icon;
