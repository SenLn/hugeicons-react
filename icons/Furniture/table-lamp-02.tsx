import * as React from "react";
import type { SVGProps } from "react";

interface TableLamp02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TableLamp02Icon = (props: TableLamp02IconProps) => {
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
        <path d="M5 20V22M19 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5556 10H6.44444C4.34931 10 3.30175 10 2.65087 10.5858C2 11.1716 2 12.1144 2 14V16C2 17.8856 2 18.8284 2.65087 19.4142C3.30175 20 4.34931 20 6.44444 20H17.5556C19.6507 20 20.6983 20 21.3491 19.4142C22 18.8284 22 17.8856 22 16V14C22 12.1144 22 11.1716 21.3491 10.5858C20.6983 10 19.6507 10 17.5556 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10.0001L12 20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 15.0001L17 15.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 15.0001L8 15.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 2C6.1038 2 4.51109 3.27976 4.0638 5.01012C3.8557 5.81516 4.15776 6 4.95386 6H11.0461C11.8422 6 12.1443 5.81516 11.9362 5.01012C11.4889 3.27976 9.8962 2 8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 6V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TableLamp02Icon;
