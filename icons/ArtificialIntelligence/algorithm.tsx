import * as React from "react";
import type { SVGProps } from "react";

interface AlgorithmIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlgorithmIcon = (props: AlgorithmIconProps) => {
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
        <path d="M10.5 2V4M13.5 2V4M8 6.5H6M8 9.5H6M18 6.5H16M18 9.5H16M13.3333 4H10.6667C9.40959 4 8.78105 4 8.39052 4.39052C8 4.78105 8 5.40959 8 6.66667V9.33333C8 10.5904 8 11.219 8.39052 11.6095C8.78105 12 9.40959 12 10.6667 12H13.3333C14.5904 12 15.219 12 15.6095 11.6095C16 11.219 16 10.5904 16 9.33333V6.66667C16 5.40959 16 4.78105 15.6095 4.39052C15.219 4 14.5904 4 13.3333 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.61732 21.9239C3.80109 22 4.03406 22 4.5 22C4.96594 22 5.19891 22 5.38268 21.9239C5.62771 21.8224 5.82239 21.6277 5.92388 21.3827C6 21.1989 6 20.9659 6 20.5C6 20.0341 6 19.8011 5.92388 19.6173C5.82239 19.3723 5.62771 19.1776 5.38268 19.0761C5.19891 19 4.96594 19 4.5 19C4.03406 19 3.80109 19 3.61732 19.0761C3.37229 19.1776 3.17761 19.3723 3.07612 19.6173C3 19.8011 3 20.0341 3 20.5C3 20.9659 3 21.1989 3.07612 21.3827C3.17761 21.6277 3.37229 21.8224 3.61732 21.9239Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.1173 21.9239C11.3011 22 11.5341 22 12 22C12.4659 22 12.6989 22 12.8827 21.9239C13.1277 21.8224 13.3224 21.6277 13.4239 21.3827C13.5 21.1989 13.5 20.9659 13.5 20.5C13.5 20.0341 13.5 19.8011 13.4239 19.6173C13.3224 19.3723 13.1277 19.1776 12.8827 19.0761C12.6989 19 12.4659 19 12 19C11.5341 19 11.3011 19 11.1173 19.0761C10.8723 19.1776 10.6776 19.3723 10.5761 19.6173C10.5 19.8011 10.5 20.0341 10.5 20.5C10.5 20.9659 10.5 21.1989 10.5761 21.3827C10.6776 21.6277 10.8723 21.8224 11.1173 21.9239Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 19V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 19C4.5 17.5955 4.5 16.8933 4.83706 16.3889C4.98298 16.1705 5.17048 15.983 5.38886 15.8371C5.89331 15.5 6.59554 15.5 8 15.5H16C17.4045 15.5 18.1067 15.5 18.6111 15.8371C18.8295 15.983 19.017 16.1705 19.1629 16.3889C19.5 16.8933 19.5 17.5955 19.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.6173 21.9239C18.8011 22 19.0341 22 19.5 22C19.9659 22 20.1989 22 20.3827 21.9239C20.6277 21.8224 20.8224 21.6277 20.9239 21.3827C21 21.1989 21 20.9659 21 20.5C21 20.0341 21 19.8011 20.9239 19.6173C20.8224 19.3723 20.6277 19.1776 20.3827 19.0761C20.1989 19 19.9659 19 19.5 19C19.0341 19 18.8011 19 18.6173 19.0761C18.3723 19.1776 18.1776 19.3723 18.0761 19.6173C18 19.8011 18 20.0341 18 20.5C18 20.9659 18 21.1989 18.0761 21.3827C18.1776 21.6277 18.3723 21.8224 18.6173 21.9239Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlgorithmIcon;
