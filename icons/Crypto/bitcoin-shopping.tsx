import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinShoppingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinShoppingIcon = (props: BitcoinShoppingIconProps) => {
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
        <path d="M4.30064 17.1912L3.16042 10.2591C2.98802 9.21103 2.90182 8.68698 3.17785 8.34349C3.45388 8 3.96121 8 4.97587 8H19.0241C20.0388 8 20.5461 8 20.8221 8.34349C21.0982 8.68698 21.012 9.21103 20.8396 10.2591L19.6994 17.1912C19.3214 19.4888 19.1325 20.6376 18.361 21.3188C17.5894 22 16.4773 22 14.253 22H9.74699C7.5227 22 6.41055 22 5.63904 21.3188C4.86752 20.6376 4.67856 19.4888 4.30064 17.1912Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.4375 17.6667L10.4375 12.3333M12 12.3333V11M12 19V17.6667M10.4375 15H13.5625M13.5625 15C14.0803 15 14.5 15.4477 14.5 16V16.6667C14.5 17.219 14.0803 17.6667 13.5625 17.6667H9.5M13.5625 15C14.0803 15 14.5 14.5523 14.5 14V13.3333C14.5 12.781 14.0803 12.3333 13.5625 12.3333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8C17 4.68629 15.5 2 12 2C8.5 2 7 4.68629 7 8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default BitcoinShoppingIcon;
