import * as React from "react";
import type { SVGProps } from "react";

interface TongueIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TongueIcon = (props: TongueIconProps) => {
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
        <path d="M19.651 12C20.8221 10.8862 21.575 9.47282 21.9097 8.75609C21.9772 8.61153 22 8.45289 22 8.29412M4.34904 12C3.17787 10.8862 2.42496 9.47282 2.09032 8.75609C2.02282 8.61153 2 8.45289 2 8.29412M22 8.29412L19 8.29412M22 8.29412C22 8.13586 21.9775 7.97737 21.9102 7.83323C21.3088 6.54493 19.3535 3 16.0442 3C15.0038 3 14.1347 3.53814 13.4722 4.17142C12.9083 4.71045 12.6262 4.98002 12.564 5.0238C12.0334 5.39734 11.9666 5.39734 11.436 5.0238C11.3738 4.98002 11.0917 4.71045 10.5278 4.17142C9.86525 3.53814 8.99617 3 7.9558 3C4.64648 3 2.69115 6.54493 2.08981 7.83323C2.02253 7.97737 2 8.13586 2 8.29412M2 8.29412H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9L12.2702 8.72635C12.7293 8.26127 13.352 8 14.0014 8C15.1414 8 16.1306 8.79706 16.387 9.92227L17.3568 14.1793C18.1518 17.6686 15.5354 21 12 21C8.46456 21 5.84819 17.6686 6.64316 14.1793L7.61303 9.92227C7.86938 8.79706 8.85856 8 9.99863 8C10.648 8 11.2707 8.26127 11.7298 8.72635L12 9ZM12 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TongueIcon;
