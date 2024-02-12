import * as React from "react";
import type { SVGProps } from "react";

interface Mouse05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mouse05Icon = (props: Mouse05IconProps) => {
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
        <path d="M2.33308 12.3211C1.56295 13.9784 2.15878 16.1103 3.80545 17.3297C4.41103 17.778 5.03988 18.2109 5.707 18.5977C6.37411 18.9846 7.06189 19.315 7.75129 19.6175C9.62623 20.44 11.7624 19.8922 12.8065 18.3938C13.53 17.3555 14.2534 16.2797 14.9104 15.137C15.5673 13.9943 16.1333 12.8273 16.6669 11.6789C17.437 10.0216 16.8413 7.88974 15.1945 6.67036C14.589 6.22198 13.9601 5.78906 13.293 5.40226C12.6259 5.01545 11.9381 4.68496 11.2487 4.38249C9.37386 3.55998 7.23754 4.10773 6.19347 5.60619C5.47 6.64449 4.74664 7.72033 4.08971 8.86302C3.43278 10.0057 2.86672 11.1728 2.33308 12.3211Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8L12.7192 6.70551C13.6233 5.07824 14.0753 4.26461 14.8427 4.05095C15.61 3.83729 16.393 4.30704 17.9589 5.24654L20.0351 6.49216C20.7231 6.90492 21.6028 6.65997 22 5.94505" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.25 10.299C12.483 9.89552 12.5995 9.69376 12.6254 9.49655C12.66 9.2336 12.5888 8.96767 12.4273 8.75726C12.3062 8.59946 12.1045 8.48297 11.701 8.25C11.2974 8.01703 11.0957 7.90054 10.8985 7.87458C10.6355 7.83996 10.3696 7.91122 10.1592 8.07267C10.0014 8.19376 9.88489 8.39552 9.65192 8.79904L9.15192 9.66506C8.91895 10.0686 8.80247 10.2703 8.7765 10.4675C8.74189 10.7305 8.81314 10.9964 8.9746 11.2068C9.09569 11.3646 9.29744 11.4811 9.70096 11.7141C10.1045 11.9471 10.3062 12.0636 10.5034 12.0895C10.7664 12.1241 11.0323 12.0529 11.2427 11.8914C11.4005 11.7703 11.517 11.5686 11.75 11.1651L12.25 10.299Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Mouse05Icon;
