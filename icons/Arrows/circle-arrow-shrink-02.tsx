import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowShrink02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowShrink02Icon = (props: CircleArrowShrink02IconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.885 11.1151C12.3676 10.5977 12.4537 8.4 12.4537 8.4M12.885 11.1151C13.4023 11.6324 15.6 11.5462 15.6 11.5462M12.885 11.1151L16.5 7.5M11.1118 12.8882C10.5945 12.3708 8.39677 12.4569 8.39677 12.4569M11.1118 12.8882C11.6291 13.4055 11.543 15.6032 11.543 15.6032M11.1118 12.8882L7.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowShrink02Icon;
