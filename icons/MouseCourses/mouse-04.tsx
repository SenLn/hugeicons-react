import * as React from "react";
import type { SVGProps } from "react";

interface Mouse04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mouse04Icon = (props: Mouse04IconProps) => {
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
        <path d="M5.22456 17.8255C5.40178 19.8583 7.16922 21.5843 9.44735 21.8401C10.2851 21.934 11.1368 22 12 22C12.8631 22 13.7148 21.934 14.5526 21.8401C16.8308 21.5843 18.5981 19.8583 18.7754 17.8255C18.8982 16.4169 19 14.9722 19 13.5C19 12.0278 18.8982 10.5831 18.7754 9.17451C18.5981 7.1417 16.8308 5.41559 14.5526 5.15997C13.7148 5.06597 12.8631 5 12 5C11.1368 5 10.2851 5.06597 9.44735 5.15997C7.16922 5.41559 5.40178 7.1417 5.22456 9.17451C5.10176 10.5831 5 12.0278 5 13.5C5 14.9722 5.10176 16.4169 5.22456 17.8255Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2L12 8M12 12L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 9.5C10.5 9.03406 10.5 8.80109 10.5761 8.61732C10.6776 8.37229 10.8723 8.17761 11.1173 8.07612C11.3011 8 11.5341 8 12 8C12.4659 8 12.6989 8 12.8827 8.07612C13.1277 8.17761 13.3224 8.37229 13.4239 8.61732C13.5 8.80109 13.5 9.03406 13.5 9.5V10.5C13.5 10.9659 13.5 11.1989 13.4239 11.3827C13.3224 11.6277 13.1277 11.8224 12.8827 11.9239C12.6989 12 12.4659 12 12 12C11.5341 12 11.3011 12 11.1173 11.9239C10.8723 11.8224 10.6776 11.6277 10.5761 11.3827C10.5 11.1989 10.5 10.9659 10.5 10.5V9.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Mouse04Icon;
