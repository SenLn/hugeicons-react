import * as React from "react";
import type { SVGProps } from "react";

interface IconjarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IconjarIcon = (props: IconjarIconProps) => {
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
        <path d="M4.17911 15.9319L5.26287 19.3081C5.6795 20.6061 5.88782 21.255 6.40449 21.6275C6.92116 22.0001 7.61293 22.0001 8.99648 22.0001H15.0035C16.3871 22.0001 17.0788 22.0001 17.5955 21.6275C18.1122 21.255 18.3205 20.6061 18.7371 19.3081L19.8209 15.9319C20.3904 14.1577 19.5645 12.2395 17.873 11.4075C18.6821 10.91 19.0866 10.6613 19.2065 10.4717C19.5127 9.98757 19.3266 9.34921 18.8061 9.09831C18.6023 9.00006 18.1253 9.00006 17.1712 9.00006C16.2171 9.00009 14.9135 9.33644 15.7906 12.1645C16.9592 15.9319 15.9104 17.079 14.4226 17.2488C12.9348 17.4185 10.9873 15.9919 12.337 13.5034C13.8777 10.6627 11.7545 9.00012 10.6272 9.00012L6.82879 9.00006C5.87472 9.00006 5.39768 9.00006 5.19389 9.09831C4.67345 9.34921 4.48735 9.98757 4.79351 10.4717C4.91339 10.6613 5.31792 10.91 6.12697 11.4075C4.43546 12.2395 3.60962 14.1577 4.17911 15.9319Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9987 3.02603C13.9987 2.17604 12.8279 2 12 2C11.1721 2 10.0013 2.17604 10.0013 3.02603C10.0013 3.52211 10.4001 4.13811 10.8968 4.56508H8.03364C6.80772 4.56508 5.4553 5.83138 5 7H19C18.5447 5.83138 17.1923 4.56508 15.9664 4.56508H13.1032C13.5999 4.13811 13.9987 3.52211 13.9987 3.02603Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default IconjarIcon;
