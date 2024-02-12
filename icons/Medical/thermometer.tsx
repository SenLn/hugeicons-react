import * as React from "react";
import type { SVGProps } from "react";

interface ThermometerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThermometerIcon = (props: ThermometerIconProps) => {
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
        <path d="M13.8801 15.9369L20.6738 8.17267C21.4217 7.31791 21.7956 6.89053 21.9252 6.41326C22.0376 5.99901 22.023 5.56052 21.8833 5.15466C21.7223 4.68707 21.3207 4.28551 20.5176 3.4824C19.7145 2.67928 19.3129 2.27773 18.8453 2.11672C18.4395 1.97696 18.001 1.96236 17.5867 2.07481C17.1095 2.20436 16.6821 2.57832 15.8273 3.32623L8.06312 10.1199C7.10741 10.9562 6.62955 11.3743 6.34846 11.9258C6.06738 12.4774 6.00989 13.1098 5.89492 14.3745L5.87152 14.6319C5.81078 15.3 5.78041 15.6341 5.65293 15.9386C5.52546 16.2431 5.30877 16.4992 4.8754 17.0114L2.27543 20.0841C1.88438 20.5462 1.91286 21.231 2.34094 21.6591C2.76903 22.0871 3.45379 22.1156 3.91594 21.7246L6.98863 19.1246C7.5008 18.6912 7.75689 18.4745 8.06139 18.3471C8.36589 18.2196 8.69998 18.1892 9.36814 18.1285L9.62553 18.1051C10.8902 17.9901 11.5226 17.9326 12.0741 17.6515C12.6257 17.3704 13.0438 16.8926 13.8801 15.9369Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.78906 9.89453L9.36983 10.843C9.74255 11.0666 9.86341 11.5501 9.63978 11.9228L9.34781 12.4094C8.96198 13.0524 9.06331 13.8755 9.59357 14.4058C10.1238 14.9361 10.9469 15.0374 11.59 14.6516L12.0766 14.3596C12.4493 14.136 12.9328 14.2568 13.1564 14.6296L14.1049 16.2103" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17.2634 6.7373L14.1055 9.8952" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ThermometerIcon;
