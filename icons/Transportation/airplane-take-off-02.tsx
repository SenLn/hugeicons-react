import * as React from "react";
import type { SVGProps } from "react";

interface AirplaneTakeOff02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AirplaneTakeOff02Icon = (props: AirplaneTakeOff02IconProps) => {
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
        <path d="M6.01172 20H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.8094 11.3002C21.2337 10.3002 21.7329 8.10024 21.9076 7.50024C21.9575 7.20024 22.0274 6.95024 21.9525 6.75024C21.9076 6.50024 21.7079 6.28524 21.2836 6.09524C21.1339 6.05024 19.7112 5.59024 19.4865 5.71524C19.3867 5.72524 19.0872 5.85024 18.8625 6.07524C18.563 6.37524 17.964 7.22524 17.5397 7.47524C17.3649 7.57818 17.0904 7.80024 16.5163 7.62524C16.1224 7.52294 14.3698 6.64589 13.7707 6.35024C13.2965 6.11618 10.7725 4.88526 10.4511 4.75024C9.55251 4.22524 6.28278 3.00024 3.12287 5.60524C2.7884 5.95024 1.79002 6.75024 2.03961 7.42524C2.28921 8.10024 2.68855 8.0932 3.31254 8.27524C3.93654 8.45728 7.03153 9.30024 7.50579 9.42524C7.98005 9.55024 8.10485 9.57524 8.35444 9.80024C8.55412 9.98024 8.67892 10.3252 8.95348 10.9002C9.15316 11.2252 9.48596 11.9669 9.60244 12.1752C9.71891 12.3836 9.82707 12.6252 10.0517 12.8502C10.2015 13.0002 10.4511 13.1628 10.6258 13.2502C10.9253 13.4002 12.7474 13.8502 13.3214 14.0002C13.621 14.0002 13.8306 13.7752 13.8306 13.5752C13.8456 13.3752 13.579 12.3752 13.5111 11.9502C13.4712 11.7002 13.3464 11.3252 13.3714 11.1752C13.4213 10.8752 14.3448 11.2808 14.5445 11.3252C14.7691 11.3752 17.939 12.2502 18.3633 12.3252C18.7876 12.4002 19.5614 12.5502 20.1355 12.1752C20.5099 11.9002 20.6596 11.6252 20.8094 11.3002Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default AirplaneTakeOff02Icon;
