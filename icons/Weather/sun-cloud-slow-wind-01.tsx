import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudSlowWind01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudSlowWind01Icon = (props: SunCloudSlowWind01IconProps) => {
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
        <path d="M17.4776 8.89801L17.5 8.89795C19.9853 8.89795 22 10.8784 22 13.3214C22 14.8551 21.206 16.2065 20 17M17.4776 8.89801C17.4924 8.73611 17.5 8.57216 17.5 8.40646C17.5 5.42055 15.0376 3 12 3C9.12324 3 6.76233 5.17106 6.52042 7.93728M17.4776 8.89801C17.3753 10.0132 16.9286 11.0307 16.2428 11.8469M6.52042 7.93728C3.98398 8.17454 2 10.2745 2 12.8299C2 14.4378 2.78565 15.8652 4 16.7619M6.52042 7.93728C6.67826 7.92251 6.83823 7.91496 7 7.91496C8.12582 7.91496 9.16474 8.28072 10.0005 8.89795" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 17.6579L8.32669 17.4C9.00235 16.8667 9.79765 16.8667 10.4733 17.4L10.7267 17.6C11.4024 18.1333 12.1976 18.1333 12.8733 17.6L13.1267 17.4C13.8024 16.8667 14.5976 16.8667 15.2733 17.4L15.5267 17.6C15.6792 17.7204 15.8378 17.8136 15.9998 17.8796M14 21.6L14.2693 21.4C14.9875 20.8667 15.8328 20.8667 16.5509 21.4L16.8202 21.6C17.5384 22.1333 18.3837 22.1333 19.1018 21.6L19.3712 21.4C20.0893 20.8667 20.9346 20.8667 21.6528 21.4L22 21.6579M10 21.6L9.73069 21.4C9.01254 20.8667 8.16723 20.8667 7.44908 21.4L7.17977 21.6C6.46161 22.1333 5.61631 22.1333 4.89815 21.6L4.62885 21.4C3.91069 20.8667 3.06539 20.8667 2.34723 21.4L2 21.6579" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SunCloudSlowWind01Icon;
