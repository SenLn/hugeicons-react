import * as React from "react";
import type { SVGProps } from "react";

interface AlbumNotFound01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlbumNotFound01Icon = (props: AlbumNotFound01IconProps) => {
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
        <path d="M20.8209 20.8209C19.6419 22 17.7442 22 13.9489 22C10.1536 22 8.25596 22 7.07691 20.8209C6.41956 20.1636 6.1287 19.2829 6 17.9745M17.9745 6C19.2829 6.1287 20.1636 6.41956 20.8209 7.07691C22 8.25596 22 10.1536 22 13.9489C22 15.382 22 16.5446 21.9365 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10C2 6.22876 2 4.34315 3.17157 3.17157M6.5 2.0612C7.44397 2 8.59023 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 11.4098 18 12.556 17.9388 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 17C6.8176 14.6361 8.72306 12.4166 11 11M18 11.5443C16.7483 10.5786 15.5868 10.1046 14.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlbumNotFound01Icon;
