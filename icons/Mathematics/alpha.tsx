import * as React from "react";
import type { SVGProps } from "react";

interface AlphaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlphaIcon = (props: AlphaIconProps) => {
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
        <path d="M17.3943 4C17.5941 5.85 17.3444 10 16.1706 13.275C14.7721 17.5 12.6743 19.35 11.0011 19.8C7.75452 20.6731 5.03241 18.45 3.88362 15.975C2.40994 12.8 2.80975 9.125 4.8576 6.475C6.90545 3.825 10.7763 2.675 13.6483 6.25C14.7471 7.925 15.2216 9.725 15.4464 11.175C15.8959 12.775 16.1206 16.775 17.2944 18.725C18.2184 20.175 19.6419 20.1 20.1664 19.875C20.516 19.7 21 19.32 21 18.22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AlphaIcon;
