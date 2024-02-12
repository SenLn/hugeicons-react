import * as React from "react";
import type { SVGProps } from "react";

interface OnlineLearning02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OnlineLearning02Icon = (props: OnlineLearning02IconProps) => {
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
        <path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 7.37354C9.14883 6.50484 10.5209 6 11.9946 6C13.4729 6 14.849 6.50803 16 7.38177M14.1743 9.71791C13.5182 9.33763 12.7779 9.12368 11.9946 9.12368C11.2152 9.12368 10.4784 9.33549 9.82477 9.71219M12 12H12.0064" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default OnlineLearning02Icon;
