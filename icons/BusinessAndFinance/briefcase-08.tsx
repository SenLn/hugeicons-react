import * as React from "react";
import type { SVGProps } from "react";

interface Briefcase08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Briefcase08Icon = (props: Briefcase08IconProps) => {
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
        <path d="M3 10V17.9861C3 19.9268 4.79086 21.5 7 21.5H17C19.2091 21.5 21 19.9268 21 17.9861V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.0571 3.5C19.5618 3.5 19.8141 3.5 20.0228 3.55014C20.7343 3.7211 21.29 4.30597 21.4524 5.05496C21.5 5.27465 21.5 5.54025 21.5 6.07143C21.5 7.39939 21.5 8.06336 21.3809 8.6126C20.9749 10.4851 19.5858 11.9473 17.807 12.3746C17.2852 12.5 16.6544 12.5 15.3929 12.5H8.60714C7.34558 12.5 6.7148 12.5 6.19303 12.3746C4.41417 11.9473 3.0251 10.4851 2.61909 8.6126C2.5 8.06336 2.5 7.39939 2.5 6.07143C2.5 5.54025 2.5 5.27465 2.54764 5.05496C2.71004 4.30597 3.26567 3.7211 3.97721 3.55014C4.18592 3.5 4.43823 3.5 4.94286 3.5M9.15 3.5H14.85" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 4C5 3.53406 5 3.30109 5.07612 3.11732C5.17761 2.87229 5.37229 2.67761 5.61732 2.57612C5.80109 2.5 6.03406 2.5 6.5 2.5H7.5C7.96594 2.5 8.19891 2.5 8.38268 2.57612C8.62771 2.67761 8.82239 2.87229 8.92388 3.11732C9 3.30109 9 3.53406 9 4C9 4.46594 9 4.69891 8.92388 4.88268C8.82239 5.12771 8.62771 5.32239 8.38268 5.42388C8.19891 5.5 7.96594 5.5 7.5 5.5H6.5C6.03406 5.5 5.80109 5.5 5.61732 5.42388C5.37229 5.32239 5.17761 5.12771 5.07612 4.88268C5 4.69891 5 4.46594 5 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 4C15 3.53406 15 3.30109 15.0761 3.11732C15.1776 2.87229 15.3723 2.67761 15.6173 2.57612C15.8011 2.5 16.0341 2.5 16.5 2.5H17.5C17.9659 2.5 18.1989 2.5 18.3827 2.57612C18.6277 2.67761 18.8224 2.87229 18.9239 3.11732C19 3.30109 19 3.53406 19 4C19 4.46594 19 4.69891 18.9239 4.88268C18.8224 5.12771 18.6277 5.32239 18.3827 5.42388C18.1989 5.5 17.9659 5.5 17.5 5.5H16.5C16.0341 5.5 15.8011 5.5 15.6173 5.42388C15.3723 5.32239 15.1776 5.12771 15.0761 4.88268C15 4.69891 15 4.46594 15 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 18H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Briefcase08Icon;
