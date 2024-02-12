import * as React from "react";
import type { SVGProps } from "react";

interface CottonCandyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CottonCandyIcon = (props: CottonCandyIconProps) => {
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
        <path d="M16.3136 3.94924C16.1726 3.55052 15.9426 3.17625 15.6237 2.85727C14.4806 1.71424 12.6274 1.71424 11.4844 2.85727C11.2418 3.09988 11.0507 3.37447 10.9111 3.66747C10.6007 4.31872 9.82241 4.9104 9.10397 4.97567C8.33633 5.04541 7.5878 5.3741 7.00015 5.96174C5.66662 7.29528 5.66662 9.45737 7.00015 10.7909C7.37586 11.1666 7.81733 11.4365 8.28751 11.6005M16.3136 3.94924C16.6777 4.97932 16.4477 6.1725 15.6237 6.99656M16.3136 3.94924C16.4545 3.55052 16.6845 3.17625 17.0034 2.85727C18.1465 1.71424 19.9997 1.71424 21.1427 2.85727C22.2858 4.00031 22.2858 5.85353 21.1427 6.99656C20.8358 7.30352 20.8358 8.06937 21.1427 8.37633C22.2858 9.51936 22.2858 11.3726 21.1427 12.5156C20.5049 13.1535 19.6458 13.4354 18.8124 13.3613M8.28751 11.6005C8.20012 11.6699 8.11577 11.7449 8.03498 11.8257C6.89194 12.9688 6.89194 14.822 8.03498 15.965C9.17801 17.1081 11.0312 17.1081 12.1743 15.965C12.2781 15.8612 12.4648 15.8929 12.5268 16.0261C12.6908 16.3786 12.9182 16.709 13.2091 16.9998C14.5426 18.3334 16.7047 18.3334 18.0383 16.9998C19.022 16.0161 19.28 14.5816 18.8124 13.3613M8.28751 11.6005C9.43645 10.6884 11.112 10.7635 12.1743 11.8257M16.4313 11.708C16.5708 12 16.7615 12.2737 17.0034 12.5156C17.5086 13.0208 18.1525 13.3027 18.8124 13.3613" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 22L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CottonCandyIcon;
