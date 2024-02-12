import * as React from "react";
import type { SVGProps } from "react";

interface GitlabIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GitlabIcon = (props: GitlabIconProps) => {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M21.7976 13.0838C21.9702 13.7157 22.0566 14.0317 21.9594 14.3228C21.8621 14.6139 21.6031 14.815 21.0851 15.2172L13.2468 21.3025C12.6478 21.7675 12.3484 22 12 22C11.6516 22 11.3522 21.7675 10.7532 21.3025L2.91487 15.2172C2.39687 14.815 2.13787 14.6139 2.04065 14.3228C1.94343 14.0317 2.02976 13.7157 2.20243 13.0838L5.23081 2L8.08792 8.65441C8.34375 9.25025 8.47166 9.54818 8.72598 9.71557C8.98031 9.88296 9.30503 9.88296 9.95448 9.88296H14.0455C14.695 9.88296 15.0197 9.88296 15.274 9.71557C15.5283 9.54818 15.6563 9.25025 15.9121 8.65441L18.7692 2L21.7976 13.0838Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GitlabIcon;
