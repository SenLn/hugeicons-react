import * as React from "react";
import type { SVGProps } from "react";

interface ZoomSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ZoomSquareIcon = (props: ZoomSquareIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.5 11V10C6.5 9.5286 6.5 9.29289 6.64645 9.14645C6.79289 9 7.0286 9 7.5 9H9C10.8856 9 11.8284 9 12.4142 9.58579C13 10.1716 13 11.1144 13 13V14C13 14.4714 13 14.7071 12.8536 14.8536C12.7071 15 12.4714 15 12 15H10.5C8.61438 15 7.67157 15 7.08579 14.4142C6.5 13.8284 6.5 12.8856 6.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4498 10.5352L15.7998 10.1976C16.5247 9.49854 16.8872 9.14899 17.1936 9.27553C17.5 9.40207 17.5 9.90131 17.5 10.8998V13.1002C17.5 14.0987 17.5 14.5979 17.1936 14.7245C16.8872 14.851 16.5247 14.5015 15.7998 13.8024L15.4498 13.4648C15.0061 13.0369 15 13.0226 15 12.4115V11.5885C15 10.9774 15.0061 10.9631 15.4498 10.5352Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ZoomSquareIcon;
