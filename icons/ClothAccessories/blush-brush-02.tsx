import * as React from "react";
import type { SVGProps } from "react";

interface BlushBrush02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BlushBrush02Icon = (props: BlushBrush02IconProps) => {
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
        <path d="M12 13L15 15M12 13C7.52052 15.7458 4.88172 14.7808 3 13.8508C3 15.9297 3.68122 17.6692 4.69609 19M12 13L15 8.41396M15 15C14.781 17.0373 13.4267 21.1851 10.1556 22C8.34064 22 6.16762 20.9296 4.69609 19M15 15L17.5978 10M17.5978 10L20.876 3.69028C21.1655 3.1134 20.9308 2.41193 20.3519 2.12349C19.7937 1.84536 19.1147 2.05196 18.8076 2.59338L15 8.41396M17.5978 10L15 8.41396M4.69609 19C5.73446 19.1667 8.28008 19.2 10.1556 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 4L6.22108 4.59745C6.51097 5.38087 6.65592 5.77259 6.94167 6.05834C7.22741 6.34408 7.61913 6.48903 8.40255 6.77892L9 7L8.40255 7.22108C7.61913 7.51097 7.22741 7.65592 6.94167 7.94167C6.65592 8.22741 6.51097 8.61913 6.22108 9.40255L6 10L5.77892 9.40255C5.48903 8.61913 5.34408 8.22741 5.05833 7.94167C4.77259 7.65592 4.38087 7.51097 3.59745 7.22108L3 7L3.59745 6.77892C4.38087 6.48903 4.77259 6.34408 5.05833 6.05833C5.34408 5.77259 5.48903 5.38087 5.77892 4.59745L6 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BlushBrush02Icon;
