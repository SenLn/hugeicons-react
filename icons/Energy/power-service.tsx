import * as React from "react";
import type { SVGProps } from "react";

interface PowerServiceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PowerServiceIcon = (props: PowerServiceIconProps) => {
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
        <path d="M12.5 8L10 12H14L11.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.011 14.1391C21.5329 13.9955 21.7939 13.9237 21.8969 13.7864C22 13.6491 22 13.4282 22 12.9865V11.0136C22 10.5719 22 10.351 21.8969 10.2137C21.7938 10.0764 21.5329 10.0046 21.011 9.86099C19.0606 9.32431 17.8399 7.24382 18.3433 5.26681C18.4817 4.72311 18.5509 4.45126 18.4848 4.29182C18.4187 4.13238 18.2291 4.0225 17.8497 3.80275L16.125 2.80363C15.7528 2.588 15.5667 2.48018 15.3997 2.50314C15.2326 2.5261 15.0442 2.71792 14.6672 3.10157C13.208 4.58689 10.7936 4.58683 9.33434 3.10147C8.95743 2.71782 8.76898 2.526 8.60193 2.50304C8.43489 2.48008 8.24877 2.5879 7.87653 2.80353L6.15184 3.80266C5.77253 4.02239 5.58287 4.13226 5.51678 4.29168C5.45068 4.4511 5.51987 4.72298 5.65825 5.26674C6.16137 7.2438 4.93972 9.32435 2.98902 9.86101C2.46712 10.0046 2.20617 10.0764 2.10308 10.2137C2 10.351 2 10.5718 2 11.0136V12.9865C2 13.4282 2 13.6491 2.10308 13.7864C2.20615 13.9237 2.46711 13.9955 2.98902 14.1391C4.9394 14.6758 6.16008 16.7563 5.65672 18.7333C5.51829 19.277 5.44907 19.5488 5.51516 19.7083C5.58126 19.8677 5.77092 19.9776 6.15025 20.1973L7.87495 21.1965C8.24721 21.4121 8.43334 21.5199 8.6004 21.497C8.76746 21.474 8.95588 21.2821 9.33271 20.8985C10.7927 19.4119 13.2088 19.4119 14.6689 20.8984C15.0457 21.2821 15.2341 21.4739 15.4012 21.4969C15.5682 21.5198 15.7544 21.412 16.1266 21.1964L17.8513 20.1972C18.2307 19.9775 18.4204 19.8676 18.4864 19.7081C18.5525 19.5487 18.4833 19.2768 18.3448 18.7332C17.8412 16.7563 19.0609 14.6758 21.011 14.1391Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PowerServiceIcon;
