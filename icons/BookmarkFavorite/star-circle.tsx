import * as React from "react";
import type { SVGProps } from "react";

interface StarCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StarCircleIcon = (props: StarCircleIconProps) => {
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
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.8638 7.72209L13.7437 9.49644C13.8637 9.74344 14.1837 9.98035 14.4536 10.0257L16.0485 10.2929C17.0684 10.4643 17.3083 11.2103 16.5734 11.9462L15.3335 13.1964C15.1236 13.4081 15.0086 13.8164 15.0736 14.1087L15.4285 15.6562C15.7085 16.8812 15.0636 17.355 13.9887 16.7148L12.4939 15.8226C12.2239 15.6613 11.7789 15.6613 11.504 15.8226L10.0091 16.7148C8.93925 17.355 8.28932 16.8761 8.56929 15.6562L8.92425 14.1087C8.98925 13.8164 8.87426 13.4081 8.66428 13.1964L7.42442 11.9462C6.6945 11.2103 6.92947 10.4643 7.94936 10.2929L9.54419 10.0257C9.80916 9.98035 10.1291 9.74344 10.2491 9.49644L11.129 7.72209C11.609 6.7593 12.3889 6.7593 12.8638 7.72209Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StarCircleIcon;
