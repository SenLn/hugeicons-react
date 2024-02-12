import * as React from "react";
import type { SVGProps } from "react";

interface StarFaceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StarFaceIcon = (props: StarFaceIconProps) => {
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
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M8.5 2.62961C9.58934 2.22255 10.7687 2 12 2C13.2313 2 14.4107 2.22255 15.5 2.62961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.51829 5.43325L8.04623 6.49786C8.11822 6.64606 8.3102 6.78821 8.47219 6.81543L9.42908 6.97573C10.041 7.07856 10.185 7.52618 9.74405 7.96775L9.00013 8.71781C8.87414 8.84484 8.80515 9.08982 8.84414 9.26524L9.05712 10.1937C9.2251 10.9287 8.83815 11.213 8.19322 10.8289L7.29632 10.2936C7.13433 10.1968 6.86736 10.1968 6.70238 10.2936L5.80548 10.8289C5.16355 11.213 4.77359 10.9257 4.94158 10.1937L5.15455 9.26524C5.19355 9.08982 5.12456 8.84484 4.99857 8.71781L4.25465 7.96775C3.8167 7.52618 3.95768 7.07856 4.56962 6.97573L5.52651 6.81543C5.68549 6.78821 5.87747 6.64606 5.94946 6.49786L6.47741 5.43325C6.76537 4.85558 7.23332 4.85558 7.51829 5.43325Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5183 5.43325L18.0462 6.49786C18.1182 6.64606 18.3102 6.78821 18.4722 6.81543L19.4291 6.97573C20.041 7.07856 20.185 7.52618 19.744 7.96775L19.0001 8.71781C18.8741 8.84484 18.8051 9.08982 18.8441 9.26524L19.0571 10.1937C19.2251 10.9287 18.8381 11.213 18.1932 10.8289L17.2963 10.2936C17.1343 10.1968 16.8674 10.1968 16.7024 10.2936L15.8055 10.8289C15.1636 11.213 14.7736 10.9257 14.9416 10.1937L15.1546 9.26524C15.1935 9.08982 15.1246 8.84484 14.9986 8.71781L14.2547 7.96775C13.8167 7.52618 13.9577 7.07856 14.5696 6.97573L15.5265 6.81543C15.6855 6.78821 15.8775 6.64606 15.9495 6.49786L16.4774 5.43325C16.7654 4.85558 17.2333 4.85558 17.5183 5.43325Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StarFaceIcon;
