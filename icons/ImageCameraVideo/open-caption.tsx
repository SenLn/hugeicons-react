import * as React from "react";
import type { SVGProps } from "react";

interface OpenCaptionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OpenCaptionIcon = (props: OpenCaptionIconProps) => {
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
        <path d="M2 10.5C2 7.18361 2 5.52541 3.0528 4.41834C3.22119 4.24128 3.40678 4.07752 3.60746 3.92894C4.86213 3 6.74142 3 10.5 3H13.5C17.2586 3 19.1379 3 20.3925 3.92894C20.5932 4.07752 20.7788 4.24128 20.9472 4.41834C22 5.52541 22 7.18361 22 10.5C22 13.8164 22 15.4746 20.9472 16.5817C20.7788 16.7587 20.5932 16.9225 20.3925 17.0711C19.1379 18 17.2586 18 13.5 18H10.5C6.74142 18 4.86213 18 3.60746 17.0711C3.40678 16.9225 3.22119 16.7587 3.0528 16.5817C2 15.4746 2 13.8164 2 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.5 7.5H10C9.06812 7.5 8.60218 7.5 8.23463 7.65224C7.74458 7.85523 7.35523 8.24458 7.15224 8.73463C7 9.10218 7 9.56812 7 10.5C7 11.4319 7 11.8978 7.15224 12.2654C7.35523 12.7554 7.74458 13.1448 8.23463 13.3478C8.60218 13.5 9.06812 13.5 10 13.5H10.5M17 7.5H16.5C15.5681 7.5 15.1022 7.5 14.7346 7.65224C14.2446 7.85523 13.8552 8.24458 13.6522 8.73463C13.5 9.10218 13.5 9.56812 13.5 10.5C13.5 11.4319 13.5 11.8978 13.6522 12.2654C13.8552 12.7554 14.2446 13.1448 14.7346 13.3478C15.1022 13.5 15.5681 13.5 16.5 13.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 21H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default OpenCaptionIcon;
