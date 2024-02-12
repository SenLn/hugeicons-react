import * as React from "react";
import type { SVGProps } from "react";

interface ThreeFinger03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThreeFinger03Icon = (props: ThreeFinger03IconProps) => {
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
        <path d="M11.5004 6C11.5004 5.17157 10.8289 4.5 10.0004 4.5C9.172 4.5 8.50042 5.17157 8.50042 6V13.9627L6.8797 12.3369C6.16877 11.6237 4.99772 11.6888 4.36965 12.4763C3.88907 13.0789 3.8758 13.9314 4.33738 14.5487L7.34137 18.5667C8.02311 19.4785 8.36398 19.9344 8.77419 20.2888C9.40001 20.8294 10.1499 21.2056 10.9566 21.3834C11.4853 21.5 12.0534 21.5 13.1896 21.5C15.3562 21.5 16.4395 21.5 17.3019 21.1679C18.6207 20.6601 19.6627 19.6148 20.1689 18.2918C20.5 17.4267 20.5 16.34 20.5 14.1667V11.5C20.5 10.3954 19.605 9.5 18.5004 9.5H17.5004M11.5004 6V4C11.5004 3.17157 12.172 2.5 13.0004 2.5C13.8289 2.5 14.5004 3.17157 14.5004 4V6M11.5004 6V10.5M14.5004 6V10.5M14.5004 6C14.5004 5.17157 15.172 4.5 16.0004 4.5C16.8289 4.5 17.5004 5.17157 17.5004 6V9.5M17.5004 9.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ThreeFinger03Icon;
