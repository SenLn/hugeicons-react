import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinCloudIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinCloudIcon = (props: BitcoinCloudIconProps) => {
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
        <path d="M17.5 17.5C19.9853 17.5 22 15.4853 22 13C22 10.5147 19.9853 8.5 17.5 8.5C17.4925 8.5 17.485 8.50002 17.4776 8.50005M17.4776 8.50005C17.4924 8.33536 17.5 8.16856 17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.70862 6.52042 7.5227M17.4776 8.50005C17.3753 9.6345 16.9286 10.6696 16.2428 11.5M6.52042 7.5227C3.98398 7.76407 2 9.90034 2 12.5C2 15.0997 3.98398 17.2359 6.52042 17.4773M6.52042 7.5227C6.67826 7.50768 6.83823 7.5 7 7.5C8.12582 7.5 9.16474 7.87209 10.0005 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.125 20L10.125 14M12 14V12.5M12 21.5V20M10.125 17H13.875M13.875 17C14.4963 17 15 17.5037 15 18.125V18.875C15 19.4963 14.4963 20 13.875 20H9M13.875 17C14.4963 17 15 16.4963 15 15.875V15.125C15 14.5037 14.4963 14 13.875 14H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinCloudIcon;
