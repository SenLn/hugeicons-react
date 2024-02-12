import * as React from "react";
import type { SVGProps } from "react";

interface AudioBook01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AudioBook01Icon = (props: AudioBook01IconProps) => {
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
        <path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.9609 9.83839C14.8347 10.3756 14.2381 10.7552 13.0449 11.5144C11.8914 12.2484 11.3147 12.6153 10.8499 12.4678C10.6578 12.4068 10.4827 12.291 10.3415 12.1315C10 11.7456 10 10.997 10 9.5C10 8.00296 10 7.25444 10.3415 6.86853C10.4827 6.70898 10.6578 6.59315 10.8499 6.53217C11.3147 6.38466 11.8914 6.75163 13.0449 7.48557C14.2381 8.24479 14.8347 8.6244 14.9609 9.16161C15.013 9.38335 15.013 9.61665 14.9609 9.83839Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AudioBook01Icon;
