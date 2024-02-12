import * as React from "react";
import type { SVGProps } from "react";

interface ShapesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShapesIcon = (props: ShapesIconProps) => {
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
        <path d="M4 8C6.20914 8 8 6.20914 8 4C8 3.2722 8 2.90829 8.02385 2.80107C8.13266 2.31172 8.28121 2.16103 8.76894 2.0452C8.87582 2.01982 9.08666 2.01679 9.50835 2.01074C10.2571 2 11.084 2 12 2C13.3714 2 14.5433 2 15.5518 2.03606C15.9598 2.05065 16.1639 2.05794 16.2867 2.09469C16.7096 2.22123 16.8563 2.37333 16.9677 2.80046C17 2.92452 17 3.28301 17 4C17 6.20914 18.7909 8 21 8C21.4931 8 21.963 8.34313 21.9759 8.83609C22 9.75428 22 10.8009 22 12C22 12.916 22 13.7429 21.9893 14.4916C21.9832 14.9133 21.9802 15.1242 21.9548 15.2311C21.839 15.7188 21.6883 15.8673 21.1989 15.9762C21.0917 16 20.7278 16 20 16C17.7909 16 16 17.7909 16 20C16 20.7278 16 21.0917 15.9762 21.1989C15.8673 21.6883 15.7188 21.839 15.2311 21.9548C15.1242 21.9802 14.9133 21.9832 14.4917 21.9893C13.7429 22 12.916 22 12 22C11.084 22 10.2571 22 9.50835 21.9893C9.08666 21.9832 8.87582 21.9802 8.76894 21.9548C8.28121 21.839 8.13266 21.6883 8.02385 21.1989C8 21.0917 8 20.7278 8 20C8 17.7909 6.20914 16 4 16C3.27219 16 2.90829 16 2.80106 15.9762C2.31172 15.8673 2.16103 15.7188 2.0452 15.2311C2.01982 15.1242 2.01679 14.9133 2.01074 14.4916C2 13.7429 2 12.916 2 12C2 11.084 2 10.2571 2.01074 9.50835C2.01679 9.08666 2.01982 8.87582 2.0452 8.76894C2.16103 8.28121 2.31172 8.13266 2.80107 8.02385C2.90829 8 3.2722 8 4 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ShapesIcon;
