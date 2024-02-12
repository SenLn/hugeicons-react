import * as React from "react";
import type { SVGProps } from "react";

interface TouchInteraction02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchInteraction02Icon = (props: TouchInteraction02IconProps) => {
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
        <path d="M8.53345 13.6528L10.5 15.3722V6.50065C10.5 5.67186 11.1719 5 12.0006 5C12.8289 5 13.5006 5.67107 13.5013 6.49935L13.5045 11.263L16.1409 11.6903C17.8426 11.9492 18.6935 12.0786 19.2928 12.4427C20.2828 13.0441 21 14 21 15.2657C21 16.1841 20.7762 16.8002 20.232 18.4556C19.8867 19.5059 19.7141 20.0311 19.4326 20.4469C18.9691 21.1313 18.2853 21.6311 17.4984 21.8605C17.0204 21.9999 16.4745 21.9999 15.3826 21.9999H14.4571C13.0054 21.9999 12.2796 21.9999 11.6335 21.7298C11.5176 21.6814 11.4044 21.6267 11.2942 21.566C10.68 21.2278 10.2224 20.6566 9.30698 19.5142L6.3436 15.8158C5.88822 15.2474 5.88518 14.4341 6.3363 13.8622C6.87851 13.175 7.87444 13.08 8.53345 13.6528Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8H6.17647C4.67907 8 3.93037 8 3.46518 7.56066C3 7.12132 3 6.41421 3 5C3 3.58579 3 2.87868 3.46518 2.43934C3.93037 2 4.67907 2 6.17647 2H17.8235C19.3209 2 20.0696 2 20.5348 2.43934C21 2.87868 21 3.58579 21 5C21 6.41421 21 7.12132 20.5348 7.56066C20.0696 8 19.3209 8 17.8235 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TouchInteraction02Icon;
