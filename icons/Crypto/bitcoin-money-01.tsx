import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinMoney01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinMoney01Icon = (props: BitcoinMoney01IconProps) => {
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
        <path d="M16 4H8C5.17157 4 3.75736 4 2.87868 4.93726C2 5.87452 2 7.38301 2 10.4V13.6C2 16.617 2 18.1255 2.87868 19.0627C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.0627C22 18.1255 22 16.617 22 13.6V10.4C22 7.38301 22 5.87452 21.1213 4.93726C20.2426 4 18.8284 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.87398 4C6.95625 4.31962 7 4.6547 7 5C7 7.20914 5.20914 9 3 9C2.6547 9 2.31962 8.95625 2 8.87398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 8.87398C21.6804 8.95625 21.3453 9 21 9C18.7909 9 17 7.20914 17 5C17 4.6547 17.0438 4.31962 17.126 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.126 20C17.0438 19.6804 17 19.3453 17 19C17 16.7909 18.7909 15 21 15C21.3453 15 21.6804 15.0438 22 15.126" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 15.126C2.31962 15.0438 2.6547 15 3 15C5.20914 15 7 16.7909 7 19C7 19.3453 6.95625 19.6804 6.87398 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinMoney01Icon;
