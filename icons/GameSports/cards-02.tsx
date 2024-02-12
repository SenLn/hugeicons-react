import * as React from "react";
import type { SVGProps } from "react";

interface Cards02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cards02Icon = (props: Cards02IconProps) => {
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
        <path d="M3 11C3 8.17157 3 6.75736 3.87868 5.87868C4.75736 5 6.17157 5 9 5H11C13.8284 5 15.2426 5 16.1213 5.87868C17 6.75736 17 8.17157 17 11V16C17 18.8284 17 20.2426 16.1213 21.1213C15.2426 22 13.8284 22 11 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V11Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.9244 19C18.0202 18.3874 18.3929 17.0406 19.1383 14.3469L20.1925 10.5375C20.938 7.84378 21.3107 6.49694 20.678 5.4359C20.0453 4.37485 18.6543 4.01397 15.8724 3.2922L13.9052 2.78183C11.1232 2.06006 9.73225 1.69918 8.63642 2.31177C7.85623 2.74792 7.44258 3.55626 7 4.95786" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.76123 11.2762C8.56573 10.8192 9.26789 11.0034 9.68969 11.2967C9.86265 11.4169 9.94912 11.4771 10 11.4771C10.0509 11.4771 10.1374 11.4169 10.3103 11.2967C10.7321 11.0034 11.4343 10.8192 12.2388 11.2762C13.2946 11.8758 13.5335 13.8541 11.0981 15.5232C10.6343 15.8411 10.4024 16 10 16C9.59764 16 9.36572 15.8411 8.90186 15.5232C6.46652 13.8541 6.70542 11.8758 7.76123 11.2762Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Cards02Icon;
