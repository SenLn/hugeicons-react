import * as React from "react";
import type { SVGProps } from "react";

interface BingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BingIcon = (props: BingIconProps) => {
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
        <path d="M4 18.4705V3.32143C4 2.57781 4 2.20599 4.23713 2.05571C4.47427 1.90543 4.79858 2.07171 5.44721 2.40427L7.44721 3.42969C7.71617 3.56759 7.85065 3.63654 7.92533 3.76044C8 3.88433 8 4.03851 8 4.34686V15.2766C8 16.0625 8 16.4554 8.24904 16.6036C8.49807 16.7518 8.83076 16.5568 9.49614 16.167L14.2232 13.3971C14.5572 13.2014 14.7242 13.1035 14.7114 12.9712C14.6986 12.8389 14.5162 12.7766 14.1513 12.6518L12.5208 12.0945C12.2661 12.0075 12.1388 11.9639 12.0516 11.8675C11.9645 11.771 11.932 11.6375 11.8669 11.3704L11.4164 9.5227C11.2311 8.7628 11.1385 8.38285 11.3443 8.17718C11.5502 7.97152 11.9182 8.07634 12.6542 8.28598L18.5353 9.96116C19.2399 10.1619 19.5923 10.2622 19.7961 10.5373C20 10.8123 20 11.1873 20 11.9372V13.8824C20 14.4602 20 14.7491 19.866 14.9871C19.7321 15.225 19.488 15.3695 19 15.6584L9.04083 21.5546C8.53376 21.8548 8.28022 22.0049 8.00292 21.9999C7.72561 21.9949 7.47735 21.8358 6.98083 21.5176L4.94 20.2096C4.48048 19.9151 4.25071 19.7679 4.12536 19.5359C4 19.304 4 19.0262 4 18.4705Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BingIcon;
