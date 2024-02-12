import * as React from "react";
import type { SVGProps } from "react";

interface SlideshareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SlideshareIcon = (props: SlideshareIconProps) => {
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
        <path d="M22 11.0369C21.191 11.8592 19.4261 13.0863 17.066 14.0392M17.066 14.0392C16.5256 14.2574 15.9514 14.4596 15.3467 14.6368C14.5936 14.9002 13.03 15.8088 13.0875 17.8138L13.0221 20.9633C13.022 21.3093 13.4374 21.8607 14.2334 21.974C15.2152 22.1137 16.6684 21.6963 17.3353 20.8446C18.3306 19.5735 18.2778 16.5769 17.066 14.0392ZM2 11.0053C2.80901 11.8275 4.52622 13.0863 6.88627 14.0392M6.88627 14.0392C7.42672 14.2574 8.00089 14.4596 8.60558 14.6368C9.95196 15.0314 10.9358 16.1965 10.9897 17.6962C11.0436 19.1958 11.1109 20.0516 10.8648 20.4543C10.6186 20.8569 10.0401 21.0237 9.3936 21.0582C8.74709 21.0927 7.37332 20.7422 6.70646 19.8906C5.71115 18.6194 5.67453 16.5769 6.88627 14.0392ZM9.9755 10.4995C9.9755 11.3279 9.30153 11.9995 8.47015 11.9995C7.63877 11.9995 6.96481 11.3279 6.96481 10.4995C6.96481 9.67108 7.63877 8.99951 8.47015 8.99951C9.30153 8.99951 9.9755 9.67108 9.9755 10.4995ZM17.0004 10.4995C17.0004 11.3279 16.3265 11.9995 15.4951 11.9995C14.6637 11.9995 13.9897 11.3279 13.9897 10.4995C13.9897 9.67108 14.6637 8.99951 15.4951 8.99951C16.3265 8.99951 17.0004 9.67108 17.0004 10.4995Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.0093 8.99951C20.0001 5.88521 19.9014 4.23418 18.8345 3.17108C17.6587 1.99951 15.7664 1.99951 11.9818 1.99951C8.19706 1.99951 6.30473 1.99951 5.12897 3.17108C4.0621 4.23418 3.96331 5.88521 3.95416 8.99951" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SlideshareIcon;
