import * as React from "react";
import type { SVGProps } from "react";

interface HologramIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HologramIcon = (props: HologramIconProps) => {
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
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 19L16 15M8 15L7 19M12 16V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7C12.4955 7 12.9562 6.8015 13.8775 6.40451L14.5423 6.11803C16.1808 5.41202 17 5.05902 17 4.5C17 3.94098 16.1808 3.58798 14.5423 2.88197L13.8775 2.59549C12.9562 2.1985 12.4955 2 12 2C11.5045 2 11.0438 2.1985 10.1225 2.59549L9.45768 2.88197C7.81923 3.58798 7 3.94098 7 4.5C7 5.05902 7.81923 5.41202 9.45768 6.11803L10.1225 6.40451C11.0438 6.8015 11.5045 7 12 7ZM12 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 4.5V10.5C17 11.059 16.1808 11.412 14.5423 12.118L13.8775 12.4045C12.9562 12.8015 12.4955 13 12 13C11.5045 13 11.0438 12.8015 10.1225 12.4045L9.45768 12.118C7.81923 11.412 7 11.059 7 10.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HologramIcon;
