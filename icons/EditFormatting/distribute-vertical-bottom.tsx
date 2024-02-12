import * as React from "react";
import type { SVGProps } from "react";

interface DistributeVerticalBottomIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DistributeVerticalBottomIcon = (props: DistributeVerticalBottomIconProps) => {
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
        <path d="M2 22L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.00232 4.5C8.00232 5.34389 7.91895 6.31789 8.75232 6.79904C9.10039 7 9.5677 7 10.5023 7H13.5023C14.4369 7 14.9042 7 15.2523 6.79904C16.0857 6.31789 16.0023 5.34389 16.0023 4.5C16.0023 3.65611 16.0857 2.68211 15.2523 2.20096C14.9042 2 14.4369 2 13.5023 2L10.5023 2C9.5677 2 9.10039 2 8.75232 2.20096C7.91895 2.68211 8.00232 3.65611 8.00232 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.00232 16.5C5.00232 17.3439 4.91895 18.3179 5.75232 18.799C6.10039 19 6.5677 19 7.50232 19L16.5023 19C17.4369 19 17.9042 19 18.2523 18.799C19.0857 18.3179 19.0023 17.3439 19.0023 16.5C19.0023 15.6561 19.0857 14.6821 18.2523 14.201C17.9042 14 17.4369 14 16.5023 14L7.50232 14C6.5677 14 6.10039 14 5.75232 14.201C4.91895 14.6821 5.00232 15.6561 5.00232 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DistributeVerticalBottomIcon;
