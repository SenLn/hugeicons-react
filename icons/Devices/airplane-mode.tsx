import * as React from "react";
import type { SVGProps } from "react";

interface AirplaneModeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AirplaneModeIcon = (props: AirplaneModeIconProps) => {
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
        <path d="M4.41712 11.9183L7.73859 9.89656C8.29597 9.55783 8.57467 9.38846 8.76705 9.15616C9.59962 8.15082 8.86644 6.66595 8.99059 5.49686C9.1191 4.28671 10.2731 2.63158 11.4364 2.11845C11.7944 1.96052 12.2051 1.96052 12.5631 2.11845C13.7264 2.63158 14.8804 4.28671 15.0089 5.49686C15.1331 6.66595 14.3999 8.15082 15.2325 9.15616C15.4248 9.38846 15.7035 9.55783 16.2609 9.89656L19.5827 11.9182C20.5993 12.5369 20.9998 13.1973 20.9998 14.4395C20.9998 15.1156 20.7006 15.2968 20.0973 15.1588L14.2725 13.8261L14.0109 16.1149C13.9161 16.9448 13.8687 17.3598 14.0058 17.7398C14.327 18.63 15.4173 19.3591 16.0832 20.0066C16.4513 20.3644 16.8529 21.3934 16.4333 21.8613C16.1742 22.1503 15.7533 21.9157 15.4637 21.803L12.675 20.7184C12.3416 20.5887 12.1748 20.5239 11.9998 20.5239C11.8247 20.5239 11.6579 20.5887 11.3245 20.7184L8.53584 21.803C8.24619 21.9157 7.82534 22.1503 7.56625 21.8613C7.1466 21.3934 7.54825 20.3644 7.91628 20.0066C8.5822 19.3591 9.67255 18.63 9.9937 17.7398C10.1308 17.3598 10.0834 16.9448 9.98857 16.1149L9.72703 13.8261L3.90259 15.1587C3.29902 15.2968 2.99982 15.1155 3.00001 14.4391C3.00034 13.1971 3.4007 12.537 4.41712 11.9183Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AirplaneModeIcon;
