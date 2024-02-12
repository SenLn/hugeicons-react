import * as React from "react";
import type { SVGProps } from "react";

interface Sheriff02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sheriff02Icon = (props: Sheriff02IconProps) => {
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
        <path d="M10.1778 4.11413C11.0254 2.7047 11.4492 1.99999 12.0759 2C12.7025 2.00001 13.1263 2.70474 13.9739 4.11419L14.1288 4.37185C14.7365 5.38236 15.0403 5.88761 15.5243 6.17256C15.5471 6.18596 15.5701 6.19895 15.5933 6.21153C16.0872 6.47901 16.6778 6.47901 17.859 6.47901H18.1295C19.6798 6.47901 20.455 6.47901 20.7872 6.90903C20.8671 7.01233 20.9279 7.12893 20.967 7.25341C21.1295 7.7716 20.685 8.40518 19.7959 9.67233C19.0782 10.6954 18.7193 11.2069 18.6621 11.7818C18.6476 11.9269 18.6476 12.0731 18.6621 12.2182C18.7193 12.7931 19.0782 13.3046 19.7959 14.3277C20.685 15.5948 21.1295 16.2284 20.967 16.7466C20.9279 16.8711 20.8671 16.9877 20.7872 17.091C20.455 17.521 19.6798 17.521 18.1295 17.521H17.859C16.6778 17.521 16.0872 17.521 15.5933 17.7885C15.5701 17.801 15.5471 17.814 15.5243 17.8274C15.0403 18.1124 14.7365 18.6176 14.1288 19.6281L13.9739 19.8858C13.1263 21.2953 12.7025 22 12.0759 22C11.4492 22 11.0254 21.2953 10.1778 19.8859L10.0452 19.6653C9.41528 18.6179 9.10034 18.0943 8.5929 17.8076C8.08547 17.521 7.47335 17.521 6.24912 17.521H5.95772C4.28667 17.521 3.45115 17.521 3.12708 16.9951C3.11313 16.9725 3.1 16.9494 3.08772 16.9258C2.80252 16.378 3.23239 15.6632 4.09214 14.2336C4.73485 13.1648 5.0562 12.6305 5.06712 12.0408C5.06763 12.0136 5.06763 11.9864 5.06712 11.9592C5.0562 11.3695 4.73485 10.8352 4.09214 9.76643C3.23239 8.33681 2.80252 7.62199 3.08772 7.0742C3.1 7.05062 3.11313 7.02749 3.12708 7.00485C3.45115 6.47901 4.28667 6.47901 5.95772 6.47901H6.24912C7.47335 6.47901 8.08547 6.47901 8.5929 6.19237C9.10034 5.90573 9.41528 5.38205 10.0452 4.3347L10.1778 4.11413Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Sheriff02Icon;
