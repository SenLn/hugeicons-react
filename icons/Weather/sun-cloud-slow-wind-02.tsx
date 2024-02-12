import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudSlowWind02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudSlowWind02Icon = (props: SunCloudSlowWind02IconProps) => {
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
        <path d="M8 17.6579L8.32669 17.4C9.00235 16.8667 9.79765 16.8667 10.4733 17.4L10.7267 17.6C11.4024 18.1333 12.1976 18.1333 12.8733 17.6L13.1267 17.4C13.8024 16.8667 14.5976 16.8667 15.2733 17.4L15.5267 17.6C15.6792 17.7204 15.8378 17.8136 15.9998 17.8796M14 21.6L14.2693 21.4C14.9875 20.8667 15.8328 20.8667 16.5509 21.4L16.8202 21.6C17.5384 22.1333 18.3837 22.1333 19.1018 21.6L19.3712 21.4C20.0893 20.8667 20.9346 20.8667 21.6528 21.4L22 21.6579M10 21.6L9.73069 21.4C9.01254 20.8667 8.16723 20.8667 7.44908 21.4L7.17977 21.6C6.46161 22.1333 5.61631 22.1333 4.89815 21.6L4.62885 21.4C3.91069 20.8667 3.06539 20.8667 2.34723 21.4L2 21.6579" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.4776 10.9008C17.485 10.9007 17.4925 10.9007 17.5 10.9007C19.9853 10.9007 22 12.8821 22 15.3263C22 16.4936 21.5404 17.7092 20.7895 18.5M17.4776 10.9008C17.4924 10.7388 17.5 10.5748 17.5 10.409C17.5 7.42169 15.0376 5 12 5C9.12324 5 6.76233 7.17208 6.52042 9.9396M17.4776 10.9008C17.3753 12.0165 16.9286 13.0344 16.2428 13.8511M6.52042 9.9396C3.98398 10.177 2 12.2779 2 14.8345C2 16.2101 2.57432 17.6076 3.5 18.5M6.52042 9.9396C6.67826 9.92483 6.83823 9.91727 7 9.91727C8.12582 9.91727 9.16474 10.2832 10.0005 10.9007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SunCloudSlowWind02Icon;
