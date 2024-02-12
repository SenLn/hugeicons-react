import * as React from "react";
import type { SVGProps } from "react";

interface PieChartSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PieChartSquareIcon = (props: PieChartSquareIconProps) => {
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
        <path d="M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.1063 12.1246C16.0897 12.172 16.5814 12.1957 16.8597 12.6591C17.1379 13.1224 16.9705 13.467 16.6357 14.1562C16.4977 14.4403 16.3324 14.7121 16.1412 14.9678C15.5443 15.7659 14.7221 16.3706 13.7783 16.7057C12.8346 17.0407 11.8118 17.091 10.8393 16.85C9.86672 16.6091 8.98811 16.0879 8.31455 15.3523C7.64099 14.6166 7.20274 13.6996 7.0552 12.7172C6.90766 11.7347 7.05747 10.731 7.48568 9.83294C7.91389 8.93486 8.60127 8.18277 9.46089 7.67175C9.73632 7.50802 10.0255 7.3714 10.3242 7.26291C11.049 6.99967 11.4115 6.86805 11.8499 7.18747C12.2883 7.50689 12.2644 7.99405 12.2165 8.96837L12.1672 9.97174C12.1207 10.9175 12.0975 11.3904 12.3796 11.6985C12.6617 12.0067 13.139 12.0297 14.0936 12.0757L15.1063 12.1246Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PieChartSquareIcon;
