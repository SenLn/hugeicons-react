import * as React from "react";
import type { SVGProps } from "react";

interface Mouse02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mouse02Icon = (props: Mouse02IconProps) => {
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
        <path d="M12 2L12 6M12 10L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.732 19.5 12C19.5 10.268 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.268 4.5 12C4.5 13.732 4.60903 15.4317 4.74061 17.0888Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 7.5C10.5 7.03406 10.5 6.80109 10.5761 6.61732C10.6776 6.37229 10.8723 6.17761 11.1173 6.07612C11.3011 6 11.5341 6 12 6C12.4659 6 12.6989 6 12.8827 6.07612C13.1277 6.17761 13.3224 6.37229 13.4239 6.61732C13.5 6.80109 13.5 7.03406 13.5 7.5V8.5C13.5 8.96594 13.5 9.19891 13.4239 9.38268C13.3224 9.62771 13.1277 9.82239 12.8827 9.92388C12.6989 10 12.4659 10 12 10C11.5341 10 11.3011 10 11.1173 9.92388C10.8723 9.82239 10.6776 9.62771 10.5761 9.38268C10.5 9.19891 10.5 8.96594 10.5 8.5V7.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Mouse02Icon;
