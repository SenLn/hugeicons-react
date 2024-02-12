import * as React from "react";
import type { SVGProps } from "react";

interface CustomerServiceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CustomerServiceIcon = (props: CustomerServiceIconProps) => {
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
        <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 7H12.8571C13.2612 7 13.4632 7 13.5888 7.12204C13.7143 7.24408 13.7143 7.4405 13.7143 7.83333C13.7143 8.61901 13.7143 9.01184 13.4632 9.25592C13.2723 9.44155 12.9929 9.486 12.5145 9.49665C12.2692 9.50211 12.1465 9.50484 12.0732 9.5777C12 9.65056 12 9.76704 12 10V11.1667C12 11.5595 12 11.7559 12.1255 11.878C12.2511 12 12.4531 12 12.8571 12H13.7143M18 7V9.5M18 9.5H16.5429C16.2196 9.5 16.058 9.5 15.9576 9.40237C15.8571 9.30474 15.8571 9.1476 15.8571 8.83333V7M18 9.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4.30518C10.089 4.20518 10.1815 4.10717 10.2774 4.01129C12.9591 1.32957 17.307 1.32957 19.9887 4.01129C22.6704 6.693 22.6704 11.0409 19.9887 13.7226C19.8928 13.8185 19.7948 13.911 19.6948 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CustomerServiceIcon;
