import * as React from "react";
import type { SVGProps } from "react";

interface Medal03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Medal03Icon = (props: Medal03IconProps) => {
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
        <path d="M10.5292 13.6376C11.2478 13.2125 11.6071 13 12 13C12.3929 13 12.7522 13.2125 13.4708 13.6376L14.4708 14.2292C15.2167 14.6704 15.5896 14.891 15.7948 15.26C16 15.6289 16 16.0789 16 16.979V18.021C16 18.9211 16 19.3711 15.7948 19.74C15.5896 20.109 15.2167 20.3296 14.4708 20.7708L13.4708 21.3624C12.7522 21.7875 12.3929 22 12 22C11.6071 22 11.2478 21.7875 10.5292 21.3624L9.52922 20.7708C8.78332 20.3296 8.41037 20.109 8.20519 19.74C8 19.3711 8 18.9211 8 18.021V16.979C8 16.0789 8 15.6289 8.20519 15.26C8.41037 14.891 8.78332 14.6704 9.52922 14.2292L10.5292 13.6376Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17.2588 2.01167H6.74116C5.93143 2.01167 4.85952 1.85424 4.30576 2.69602C4 3.1608 4 3.83334 4 5.17844C4 6.32524 4 6.89864 4.20617 7.38174C4.55829 8.20684 5.34557 8.56526 6.02037 8.95504L9.31672 10.8591C10.6334 11.6197 11.2918 12 12 12C12.7082 12 13.3666 11.6197 14.6833 10.8591L17.9796 8.95504C18.6544 8.56526 19.4417 8.20684 19.7938 7.38174C20 6.89864 20 6.32524 20 5.17844C20 3.83334 20 3.1608 19.6942 2.69602C19.1405 1.85424 18.0686 2.01167 17.2588 2.01167Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Medal03Icon;
