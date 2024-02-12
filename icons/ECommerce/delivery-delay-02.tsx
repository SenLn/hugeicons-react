import * as React from "react";
import type { SVGProps } from "react";

interface DeliveryDelay02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DeliveryDelay02Icon = (props: DeliveryDelay02IconProps) => {
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
        <path d="M19.5 19.5C19.5 20.8807 18.3807 22 17 22C15.6193 22 14.5 20.8807 14.5 19.5C14.5 18.1193 15.6193 17 17 17C18.3807 17 19.5 18.1193 19.5 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 19.5C9.5 20.8807 8.38071 22 7 22C5.61929 22 4.5 20.8807 4.5 19.5C4.5 18.1193 5.61929 17 7 17C8.38071 17 9.5 18.1193 9.5 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12V17C2 17.9346 2 18.4019 2.20096 18.75C2.33261 18.978 2.52197 19.1674 2.75 19.299C3.09808 19.5 3.56538 19.5 4.5 19.5M14.5 19.5H9.5M15 17.5V9C15 7.58579 15 6.87868 14.5607 6.43934C14.1213 6 13.4142 6 12 6H11M15.5 8.5H17.3014C18.1311 8.5 18.5459 8.5 18.8898 8.6947C19.2336 8.8894 19.4471 9.2451 19.8739 9.95651L21.5725 12.7875C21.7849 13.1415 21.8911 13.3186 21.9456 13.5151C22 13.7116 22 13.918 22 14.331V17C22 17.9346 22 18.4019 21.799 18.75C21.6674 18.978 21.478 19.1674 21.25 19.299C20.9019 19.5 20.4346 19.5 19.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.85 7.85L6.5 6.95V4.7M2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DeliveryDelay02Icon;
