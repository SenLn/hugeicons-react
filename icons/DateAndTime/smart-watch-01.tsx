import * as React from "react";
import type { SVGProps } from "react";

interface SmartWatch01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SmartWatch01Icon = (props: SmartWatch01IconProps) => {
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
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7.5C8 7.5 8.89734 5.92822 9.06196 4.01957C9.13851 3.13198 9.17678 2.68819 9.42636 2.43221C9.67594 2.17623 9.97701 2.14256 10.5792 2.07523C10.9774 2.03069 11.451 2 12 2C12.549 2 13.0226 2.03069 13.4208 2.07523C14.023 2.14256 14.3241 2.17623 14.5736 2.43221C14.8232 2.68819 14.8615 3.13198 14.938 4.01957C15.1027 5.92822 16 7.5 16 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16.5C16 16.5 15.1027 18.0718 14.938 19.9804C14.8615 20.868 14.8232 21.3118 14.5736 21.5678C14.3241 21.8238 14.023 21.8574 13.4208 21.9248C13.0226 21.9693 12.549 22 12 22C11.451 22 10.9774 21.9693 10.5792 21.9248C9.97701 21.8574 9.67594 21.8238 9.42636 21.5678C9.17678 21.3118 9.13851 20.868 9.06196 19.9804C8.89734 18.0718 8 16.5 8 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SmartWatch01Icon;
