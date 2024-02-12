import * as React from "react";
import type { SVGProps } from "react";

interface ArtificialIntelligence03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArtificialIntelligence03Icon = (props: ArtificialIntelligence03IconProps) => {
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
        <path d="M16 22V21.5C16 20.3954 16.9321 19.5005 17.9223 19.011C18.8846 18.5354 19.6943 17.7511 19.7965 16.8313L20 15L22 14L19.5 10.25C19.5 5.69365 15.8063 2 11.25 2C10.096 2 8.99733 2.23694 8 2.66482M6.5 16.9962V22M6.5 16.9962C5.13927 16.0364 4.08188 14.6752 3.5 13.085M6.5 16.9962C7.25065 17.5257 8.09362 17.9331 9 18.1895" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.75 3.25L6 5.5H10M3.5 3.25C3.5 3.66421 3.16421 4 2.75 4C2.33579 4 2 3.66421 2 3.25C2 2.83579 2.33579 2.5 2.75 2.5C3.16421 2.5 3.5 2.83579 3.5 3.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.75 8.75H10M3.5 8.75C3.5 9.16421 3.16421 9.5 2.75 9.5C2.33579 9.5 2 9.16421 2 8.75C2 8.33579 2.33579 8 2.75 8C3.16421 8 3.5 8.33579 3.5 8.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArtificialIntelligence03Icon;
