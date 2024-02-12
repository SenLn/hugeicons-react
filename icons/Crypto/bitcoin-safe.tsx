import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinSafeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinSafeIcon = (props: BitcoinSafeIconProps) => {
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
        <path d="M11 2H13C17.2426 2 19.364 2 20.682 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.682 18.682C19.364 20 17.2426 20 13 20H11C6.75736 20 4.63604 20 3.31802 18.682C2 17.364 2 15.2426 2 11C2 6.75736 2 4.63604 3.31802 3.31802C4.63604 2 6.75736 2 11 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 15C6 14.4692 6 13.6148 6 11.9062V10.0938C6 8.38516 6 7.53082 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 22V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 22V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.9375 13.6667L12.9375 8.33333M14.5 8.33333V7M14.5 15V13.6667M12.9375 11H16.0625M16.0625 11C16.5803 11 17 11.4477 17 12V12.6667C17 13.219 16.5803 13.6667 16.0625 13.6667H12M16.0625 11C16.5803 11 17 10.5523 17 10V9.33333C17 8.78105 16.5803 8.33333 16.0625 8.33333H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinSafeIcon;
