import * as React from "react";
import type { SVGProps } from "react";

interface MailOpenLoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailOpenLoveIcon = (props: MailOpenLoveIconProps) => {
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
        <path d="M5.00035 7L3.78154 7.81253C2.90783 8.39501 2.47097 8.68625 2.23422 9.13041C1.99747 9.57457 1.99923 10.0966 2.00273 11.1406C2.00696 12.3975 2.01864 13.6782 2.05099 14.9741C2.12773 18.0487 2.16611 19.586 3.29651 20.7164C4.42691 21.8469 5.98497 21.8858 9.10108 21.9637C11.0397 22.0121 12.9611 22.0121 14.8996 21.9637C18.0158 21.8858 19.5738 21.8469 20.7042 20.7164C21.8346 19.586 21.873 18.0487 21.9497 14.9741C21.9821 13.6782 21.9937 12.3975 21.998 11.1406C22.0015 10.0966 22.0032 9.57456 21.7665 9.13041C21.5297 8.68625 21.0929 8.39501 20.2191 7.81253L19.0003 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 10L8.91302 14.1478C10.417 15.0502 11.169 15.5014 12 15.5014C12.831 15.5014 13.583 15.0502 15.087 14.1478L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 12V6C5 4.11438 5 3.17157 5.58579 2.58579C6.17157 2 7.11438 2 9 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.76123 6.27615C10.5657 5.81923 11.2679 6.00336 11.6897 6.29667C11.8626 6.41693 11.9491 6.47706 12 6.47706C12.0509 6.47706 12.1374 6.41693 12.3103 6.29667C12.7321 6.00336 13.4343 5.81923 14.2388 6.27615C15.2946 6.87582 15.5335 8.85412 13.0981 10.5232C12.6343 10.8411 12.4024 11 12 11C11.5976 11 11.3657 10.8411 10.9019 10.5232C8.46652 8.85412 8.70542 6.87582 9.76123 6.27615Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MailOpenLoveIcon;
