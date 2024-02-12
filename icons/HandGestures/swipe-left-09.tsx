import * as React from "react";
import type { SVGProps } from "react";

interface SwipeLeft09IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeLeft09Icon = (props: SwipeLeft09IconProps) => {
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
        <path d="M10.8654 9.68476L11.7434 4.76072C11.8889 3.94488 11.338 3.16689 10.513 3.02304C9.68807 2.87918 8.90138 3.42394 8.75591 4.23978L7 14.0879L6.85439 14.8511L4.88875 12.8372C4.17559 12.124 3.00086 12.1891 2.37081 12.9766C1.88873 13.5792 1.87541 14.4317 2.33844 15.049L5.35188 19.067C6.03575 19.9788 6.3777 20.4347 6.7892 20.7891C7.41699 21.3297 8.16928 21.7058 8.97845 21.8837C9.50883 22.0003 10.0787 22.0003 11.2185 22.0003H13.6206C15.9993 22.0003 18.0487 20.3245 18.521 17.9932L19.3889 13.7096L19.4767 13.2172C19.6222 12.4014 19.0713 11.6234 18.2463 11.4795C17.4214 11.3357 16.6347 11.8804 16.4892 12.6963L16.4014 13.1887M10.8654 9.68476L10.6021 11.162M10.8654 9.68476C11.0109 8.86892 11.7976 8.32417 12.6226 8.46802C13.4475 8.61188 13.9984 9.38986 13.8529 10.2057L13.6773 11.1905M13.6773 11.1905L13.5895 11.6829M13.6773 11.1905C13.8228 10.3747 14.6095 9.82992 15.4345 9.97377C16.2594 10.1176 16.8103 10.8956 16.6648 11.7115L16.577 12.2039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 4.5H22M15.5 4.5C15.5 3.79977 17.4943 2.49153 18 2M15.5 4.5C15.5 5.20023 17.4943 6.50847 18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeLeft09Icon;
