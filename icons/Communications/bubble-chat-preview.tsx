import * as React from "react";
import type { SVGProps } from "react";

interface BubbleChatPreviewIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BubbleChatPreviewIcon = (props: BubbleChatPreviewIconProps) => {
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
        <path d="M21.8665 9.99999C21.9543 10.5098 22 11.0331 22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9544C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.60645 5.94718 2.48007 11 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 5H17.509" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.7948 4.59071C21.9316 4.77342 22 4.86477 22 5C22 5.13523 21.9316 5.22658 21.7948 5.40929C21.1801 6.23024 19.6101 8 17.5 8C15.3899 8 13.8199 6.23024 13.2052 5.40929C13.0684 5.22658 13 5.13523 13 5C13 4.86477 13.0684 4.77342 13.2052 4.59071C13.8199 3.76976 15.3899 2 17.5 2C19.6101 2 21.1801 3.76976 21.7948 4.59071Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9955 12H12.0045M8 12H8.00897M15.9955 12H16.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BubbleChatPreviewIcon;
