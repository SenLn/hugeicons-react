import * as React from "react";
import type { SVGProps } from "react";

interface Sofa03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sofa03Icon = (props: Sofa03IconProps) => {
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
        <path d="M7 16V19M17 16V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9996 9.26828C20.043 8.716 18.8198 9.04375 18.2675 10.0003L17.2581 12.3892C17.0078 12.9815 16.9799 13 16.3369 13H7.66304C7.02008 13 6.99218 12.9815 6.74191 12.3893L5.73238 10.0003C5.1801 9.04375 3.95692 8.716 3.00033 9.26828C2.04375 9.82057 1.716 11.0437 2.26828 12.0003C2.69932 12.7469 3.89493 12.6838 4.08847 13.2646C4.5284 14.5848 4.74836 15.2449 5.27216 15.6224C5.79596 16 6.49175 16 7.88331 16H16.1166C17.5082 16 18.204 16 18.7278 15.6224C19.2516 15.2448 19.4716 14.5847 19.9115 13.2645C20.105 12.6838 21.3007 12.7468 21.7316 12.0003C22.2839 11.0437 21.9562 9.82057 20.9996 9.26828Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 9L4.54003 8.89326C5.24623 7.01005 5.59933 6.06845 6.37022 5.53422C7.1411 5 8.14674 5 10.158 5H13.842C15.8533 5 16.8589 5 17.6298 5.53422C18.4007 6.06845 18.7538 7.01005 19.46 8.89326L19.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sofa03Icon;
