import * as React from "react";
import type { SVGProps } from "react";

interface VrIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VrIcon = (props: VrIconProps) => {
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
        <path d="M7 3H17C18.8692 3 19.8038 3 20.5 3.40192C20.9561 3.66523 21.3348 4.04394 21.5981 4.5C22 5.19615 22 6.13077 22 8C22 9.86923 22 10.8038 21.5981 11.5C21.3348 11.9561 20.9561 12.3348 20.5 12.5981C19.8038 13 18.8692 13 17 13H16.6063C15.9194 13 15.5759 13 15.2546 12.9286C14.8244 12.8331 14.4206 12.6439 14.0718 12.3746C13.8112 12.1734 13.5913 11.9096 13.1516 11.3819C12.8012 10.9614 12.626 10.7512 12.4249 10.6568C12.1557 10.5305 11.8443 10.5305 11.5751 10.6568C11.374 10.7512 11.1988 10.9614 10.8484 11.3819C10.4087 11.9096 10.1888 12.1734 9.92823 12.3746C9.57943 12.6439 9.17559 12.8331 8.74542 12.9286C8.42406 13 8.08061 13 7.39369 13H7C5.13077 13 4.19615 13 3.5 12.5981C3.04394 12.3348 2.66523 11.9561 2.40192 11.5C2 10.8038 2 9.86923 2 8C2 6.13077 2 5.19615 2.40192 4.5C2.66523 4.04394 3.04394 3.66523 3.5 3.40192C4.19615 3 5.13077 3 7 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 6H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.1006 19L10.0803 17M12.1006 19L10.0803 21M12.1006 19C7.05072 19 2.8089 17 2 15M15.1311 18.7711C18.6024 18.2314 21.2663 16.7892 22 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VrIcon;
