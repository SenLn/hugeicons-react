import * as React from "react";
import type { SVGProps } from "react";

interface AlignHorizontalCenterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlignHorizontalCenterIcon = (props: AlignHorizontalCenterIconProps) => {
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
        <path d="M12 19L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.00036 7.5C8.00036 6.65611 7.91699 5.68211 8.75036 5.20096C9.09844 5 9.56575 5 10.5004 5H13.5004C14.435 5 14.9023 5 15.2504 5.20096C16.0837 5.68211 16.0004 6.65611 16.0004 7.5C16.0004 8.34389 16.0837 9.31789 15.2504 9.79904C14.9023 10 14.435 10 13.5004 10H10.5004C9.56575 10 9.09844 10 8.75036 9.79904C7.91699 9.31789 8.00036 8.34389 8.00036 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.00036 16.5C4.00036 15.6561 3.91699 14.6821 4.75036 14.201C5.09844 14 5.56575 14 6.50036 14H17.5004C18.435 14 18.9023 14 19.2504 14.201C20.0837 14.6821 20.0004 15.6561 20.0004 16.5C20.0004 17.3439 20.0837 18.3179 19.2504 18.799C18.9023 19 18.435 19 17.5004 19H6.50036C5.56575 19 5.09844 19 4.75036 18.799C3.91699 18.3179 4.00036 17.3439 4.00036 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlignHorizontalCenterIcon;
