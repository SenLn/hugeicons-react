import * as React from "react";
import type { SVGProps } from "react";

interface CoPresentIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CoPresentIcon = (props: CoPresentIconProps) => {
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
        <path d="M3.58984 18.177C3.44055 18.0742 3.30166 17.9585 3.17157 17.8284C2 16.6569 2 14.7712 2 11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.17157C22 5.34315 22 7.22876 22 11C22 14.7712 22 16.6569 20.8284 17.8284C20.6983 17.9585 20.5595 18.0742 20.4102 18.177" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.6863 16.926C7.82171 17.4525 5.55483 18.5276 6.93552 19.8729C7.60997 20.53 8.36113 21 9.30553 21H14.6945C15.6389 21 16.39 20.53 17.0645 19.8729C18.4452 18.5276 16.1783 17.4525 15.3137 16.926C13.2863 15.6913 10.7137 15.6913 8.6863 16.926Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CoPresentIcon;
