import * as React from "react";
import type { SVGProps } from "react";

interface VictoryFinger02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VictoryFinger02Icon = (props: VictoryFinger02IconProps) => {
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
        <path d="M7.33384 10.5L6.18585 11.8492C5.25059 12.9483 4.78295 13.4979 4.60625 14.1468C4.52985 14.4274 4.49431 14.7177 4.50074 15.0086C4.51561 15.6814 4.83662 16.3294 5.47865 17.6252C6.2779 19.2383 6.67752 20.0449 7.32318 20.5834C7.6028 20.8166 7.91282 21.0099 8.24455 21.158C9.01054 21.5 9.90412 21.5 11.6913 21.5H13.1498C14.3954 21.5 15.0182 21.5 15.5629 21.3393C16.434 21.0824 17.1913 20.5315 17.7083 19.7788C18.0316 19.3082 18.2285 18.7119 18.6224 17.5194L19.031 16.2824C19.2729 15.55 19.3939 15.1838 19.445 14.8763C19.7703 12.9193 18.6246 11.0174 16.7533 10.408C16.4593 10.3122 16.0814 10.252 15.3258 10.1316M14.9811 11.5L16.3803 4.62268C16.6033 3.52664 15.7736 2.5 14.6649 2.5C13.883 2.5 13.1959 3.02307 12.9811 3.78175L11.3621 9.5L9.74838 3.80011C9.5305 3.03056 8.83352 2.5 8.04045 2.5C6.93222 2.5 6.09458 3.51288 6.29282 4.61323L7.89392 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VictoryFinger02Icon;
