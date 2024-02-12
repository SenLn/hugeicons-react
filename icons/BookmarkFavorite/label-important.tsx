import * as React from "react";
import type { SVGProps } from "react";

interface LabelImportantIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LabelImportantIcon = (props: LabelImportantIconProps) => {
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
        <path d="M13 4H6.23456C3.79424 4 2.57407 4 2.14438 4.76649C2.13129 4.78984 2.11883 4.81353 2.10701 4.83754C1.71893 5.62592 2.41032 6.63129 3.7931 8.64204C4.89612 10.246 5.44763 11.048 5.4611 11.9555C5.46154 11.9852 5.46154 12.0148 5.4611 12.0445C5.44763 12.952 4.89612 13.754 3.7931 15.358C2.41032 17.3687 1.71893 18.3741 2.10701 19.1625C2.11883 19.1865 2.13129 19.2102 2.14438 19.2335C2.57407 20 3.79424 20 6.23456 20H13C14.9628 20 15.9443 20 16.7889 19.5777C17.6334 19.1554 18.2223 18.3703 19.4 16.8C21.1333 14.4889 22 13.3333 22 12C22 10.6667 21.1333 9.51111 19.4 7.2C18.2223 5.62972 17.6334 4.84458 16.7889 4.42229C15.9443 4 14.9628 4 13 4Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default LabelImportantIcon;
