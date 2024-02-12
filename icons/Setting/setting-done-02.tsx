import * as React from "react";
import type { SVGProps } from "react";

interface SettingDone02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SettingDone02Icon = (props: SettingDone02IconProps) => {
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
        <path d="M9.588 19.68C9.192 20.04 8.7831 20.4841 8.616 20.5066C8.4489 20.5291 8.2745 20.4234 7.9023 20.2121L6 19.14C5.52 18.9 5.496 18.72 5.496 18.66C5.496 18.6 5.496 18.346 5.652 17.8244C6.15179 15.9 4.98 13.86 2.989 13.3399C2.4671 13.1992 2.2062 13.1288 2.1031 12.9942C2 12.8597 2 12.6432 2 12.2103V10.2868C2 9.85391 2 9.63741 2.1031 9.50281C2.2062 9.36831 2.4671 9.29791 2.989 9.15721C4.9397 8.63124 6.1614 6.64936 5.6582 4.71166C5.5199 4.17873 5.4507 3.91226 5.5168 3.75601C5.5829 3.59977 5.7725 3.49209 6.1518 3.27673L7.8765 2.29749C8.2488 2.08615 8.4349 1.98048 8.6019 2.00298C8.769 2.02549 8.9574 2.21349 9.3343 2.5895C10.7936 4.04528 13.208 4.04534 14.6672 2.58959C15.0442 2.21359 15.2326 2.02558 15.3996 2.00308C15.5667 1.98058 15.7528 2.08625 16.1251 2.29759L17.8498 3.27682C18.2291 3.4922 18.4187 3.59988 18.4848 3.75615C18.5509 3.91242 18.4817 4.17885 18.3433 4.71173C17.8399 6.64937 19.0606 8.64201 21.011 9.168C21.5329 9.30872 21.7938 9.3814 21.8969 9.516C22 9.6505 22 10.0791 22 10.512" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 17.2199C15 17.2199 16 17.5039 16.5 18.5039C16.5 18.5039 17.5962 16.0039 19.008 15.5039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.88 9.2998C14.1 8.2198 12.924 7.7998 11.964 7.7998C10.164 7.82381 8.52002 9.3108 8.52002 11.2438C8.52002 12.3095 8.82002 13.0798 9.66002 13.9198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SettingDone02Icon;
