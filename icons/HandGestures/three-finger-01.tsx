import * as React from "react";
import type { SVGProps } from "react";

interface ThreeFinger01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThreeFinger01Icon = (props: ThreeFinger01IconProps) => {
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
        <path d="M14.1816 5.49997C14.1816 4.67155 14.8328 3.99998 15.6361 3.99998C16.4394 3.99998 17.0906 4.67155 17.0906 5.49997L17.091 10.9999M14.1816 10.9999V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998M17.0906 11.9999L17.091 10.9999M17.091 10.9999C17.091 10.4765 17.5468 10.0783 18.0475 10.1643L18.3795 10.2214C19.3146 10.3821 20 11.2165 20 12.1942L19.9996 13.6667C19.9996 15.84 19.9996 16.9267 19.6786 17.7919C19.4924 18.2937 19.0011 18.9337 18.6083 19.3962C18.2685 19.7963 18.0603 20.3037 18.0603 20.8354V22M11.2727 4.99998C11.2724 4.17185 10.6213 3.50063 9.81824 3.50063C9.01493 3.50063 8.36373 4.1722 8.36373 5.00062L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22M11.2727 4.99998V9.99993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ThreeFinger01Icon;
