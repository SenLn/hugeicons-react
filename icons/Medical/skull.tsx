import * as React from "react";
import type { SVGProps } from "react";

interface SkullIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SkullIcon = (props: SkullIconProps) => {
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
        <path d="M11.5908 14.536C11.1388 14.7038 10.7358 15.0268 10.3317 15.2845C9.48946 15.8216 8.63063 16.4131 7.58474 16.3597C4.46802 16.2004 2 12.3209 2 9.56692C2 5.38782 6.10119 2 11.1603 2C15.7188 2 19.4995 4.75056 20.2031 8.35214C20.4227 9.47603 19.9208 10.1613 19.3027 11.0803L21.3692 13.1287C21.797 13.5528 22.011 13.7649 21.9996 13.9858C21.9881 14.2066 21.7199 14.4234 21.1834 14.8569C20.7141 15.236 20.3205 15.6902 20.3205 16.1249C20.5325 17.5959 21.4196 20.0253 20.4459 21.2837C19.2685 22.8054 16.9884 21.5105 15.6126 20.9801C14.178 20.4271 13.4607 20.1506 12.9795 19.6296C11.8449 18.4013 11.5908 14.536 11.5908 14.536ZM11.5908 14.536C13.0845 13.9816 14.3114 15.7714 15.8378 15.1043C16.3596 14.8762 16.8134 14.4444 17.2671 14.1071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 19C20.5 19 19 18.5 18.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 9.01907C14 9.01907 12.1384 9.01907 11.3067 10.3287C11.0575 10.7213 10.6752 11.0693 10.2233 10.9881C9.01847 10.7716 7.65343 9.99767 7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SkullIcon;
