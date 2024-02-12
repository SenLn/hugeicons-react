import * as React from "react";
import type { SVGProps } from "react";

interface Mp301IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mp301Icon = (props: Mp301IconProps) => {
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
        <path d="M10.8473 22V19M10.8473 19V17.2C10.8473 16.6343 10.8473 16.3515 11.0078 16.1757C11.1682 16 11.4265 16 11.943 16H12.6734C13.4299 16 14.043 16.6716 14.043 17.5C14.043 18.3284 13.4299 19 12.6734 19H10.8473ZM3.5 22L3.87884 16.7201C3.91097 16.2722 3.92704 16.0483 4.04552 16.0065C4.164 15.9647 4.28534 16.1401 4.52801 16.4911L5.49569 17.8905C5.6273 18.0808 5.69311 18.176 5.78088 18.176C5.86865 18.176 5.93446 18.0808 6.06607 17.8905L7.03429 16.4903C7.27676 16.1396 7.398 15.9643 7.51645 16.0061C7.6349 16.0478 7.65108 16.2715 7.68344 16.719L8.06532 22M16.8477 17.1179C16.9456 16.3326 17.5874 16 18.2569 16H19.0681C19.7377 16 20.3795 16.3326 20.4773 17.1179C20.5076 17.3608 20.5076 17.6392 20.4773 17.8821C20.3966 18.5297 19.8563 19 19.2709 19M16.8477 20.8821C16.9456 21.6674 17.5874 22 18.2569 22L19.0681 22C19.7377 22 20.3795 21.6674 20.4773 20.8821C20.5076 20.6392 20.5076 20.3608 20.4773 20.1179C20.3966 19.4703 19.8563 19 19.2709 19M19.2709 19H19.1985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mp301Icon;
