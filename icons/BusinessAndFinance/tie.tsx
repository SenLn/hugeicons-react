import * as React from "react";
import type { SVGProps } from "react";

interface TieIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TieIcon = (props: TieIconProps) => {
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
        <path d="M8.72123 5.60945C8.1621 4.61908 7.88253 4.1239 8.04661 3.67371C8.21068 3.22353 8.73892 3.0364 9.7954 2.66213L10.695 2.34346C11.3413 2.11449 11.6645 2 12 2C12.3355 2 12.6587 2.11449 13.305 2.34346L14.2046 2.66213C15.2611 3.0364 15.7893 3.22353 15.9534 3.67371C16.1175 4.1239 15.8379 4.61908 15.2788 5.60945L14.7626 6.52365C14.4979 6.99256 14.3655 7.22701 14.1339 7.41087C13.9022 7.59473 13.6875 7.65614 13.2581 7.77895C12.8467 7.89659 12.3777 8 12 8C11.6223 8 11.1533 7.89659 10.7419 7.77895C10.3125 7.65614 10.0978 7.59473 9.86612 7.41087C9.63445 7.22701 9.50209 6.99256 9.23735 6.52365L8.72123 5.60945Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.0793 8L8.42064 15.1438C8.06093 16.6931 7.88108 17.4677 8.08657 18.1961C8.09058 18.2103 8.09469 18.2245 8.09891 18.2386C8.31533 18.9638 8.88063 19.5172 10.0112 20.6238C10.9439 21.5368 11.4103 21.9933 11.9837 21.9999C11.9946 22 12.0054 22 12.0163 21.9999C12.5897 21.9933 13.0561 21.5368 13.9888 20.6238C15.1194 19.5172 15.6847 18.9638 15.9011 18.2386C15.9053 18.2245 15.9094 18.2103 15.9134 18.1961C16.1189 17.4677 15.9391 16.6931 15.5794 15.1438L13.9207 8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default TieIcon;
