import * as React from "react";
import type { SVGProps } from "react";

interface WellnessIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WellnessIcon = (props: WellnessIconProps) => {
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
        <path d="M4 14.0695C5.0145 14.0695 6.43122 13.7685 7.31944 14.4193L9.08188 15.7108C9.73667 16.1906 10.4458 16.0325 11.1765 15.9178C12.1389 15.7667 13 16.5875 13 17.6562C13 17.9482 10.9272 18.6905 10.6276 18.8316C10.0391 19.1088 9.36297 19.0406 8.83021 18.6502L6.84211 17.1934" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 17L17.091 15.1096C17.8244 14.854 18.6331 15.0535 19.1797 15.625L19.8505 16.3262C20.0902 16.5768 20.0338 16.9976 19.7375 17.1697L11.8829 21.7315C11.4097 22.0063 10.8514 22.0734 10.3309 21.9179L4 20.0269" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0019 12C12.0019 12 14.1019 9.76142 14.1019 7C14.1019 4.23858 12.0019 2 12.0019 2C12.0019 2 9.90191 4.23858 9.90191 7C9.90191 9.76142 12.0019 12 12.0019 12ZM12.0019 12C12.0019 12 15.0689 11.9316 17.0019 9.95918C18.9349 7.98674 19.0019 4.85714 19.0019 4.85714C19.0019 4.85714 17.7325 4.88544 16.3122 5.43087M12.0019 12C12.0019 12 8.9349 11.9316 7.00191 9.95918C5.06891 7.98674 5.00191 4.85714 5.00191 4.85714C5.00191 4.85714 6.27136 4.88544 7.69158 5.43087" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WellnessIcon;
