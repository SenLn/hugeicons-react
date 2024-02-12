import * as React from "react";
import type { SVGProps } from "react";

interface BandageIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BandageIcon = (props: BandageIconProps) => {
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
        <path d="M13.9525 4.84083C15.1797 3.61361 15.7933 3 16.5558 3C17.3183 3 17.9319 3.61361 19.1592 4.84083C20.3864 6.06806 21 6.68167 21 7.44417C21 8.20667 20.3864 8.82028 19.1592 10.0475M10.0475 19.1592C8.82028 20.3864 8.20667 21 7.44417 21C6.68167 21 6.06806 20.3864 4.84084 19.1592C3.61361 17.9319 3 17.3183 3 16.5558C3 15.7933 3.61361 15.1797 4.84084 13.9525" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.79333 12L4.84084 10.0475C3.61361 8.82028 3 8.20667 3 7.44417C3 6.68167 3.61361 6.06806 4.84084 4.84083C6.06806 3.61361 6.68167 3 7.44417 3C8.20667 3 8.82028 3.61361 10.0475 4.84083L12 6.79333M6.79333 12L12 6.79333M6.79333 12L12 17.2067M12 6.79333L17.2067 12M17.2067 12L19.1592 13.9525C20.3864 15.1797 21 15.7933 21 16.5558C21 17.3183 20.3864 17.9319 19.1592 19.1592C17.9319 20.3864 17.3183 21 16.5558 21C15.7933 21 15.1797 20.3864 13.9525 19.1592L12 17.2067M17.2067 12L12 17.2067" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BandageIcon;
