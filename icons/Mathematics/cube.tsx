import * as React from "react";
import type { SVGProps } from "react";

interface CubeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CubeIcon = (props: CubeIconProps) => {
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
        <path d="M2.79289 21.2071C3.08579 21.5 3.55719 21.5 4.5 21.5H14.5C15.4428 21.5 15.9142 21.5 16.2071 21.2071M2.79289 21.2071C2.5 20.9142 2.5 20.4428 2.5 19.5V9.5C2.5 8.55719 2.5 8.08579 2.79289 7.79289M2.79289 21.2071L8.79289 15.2071M16.2071 21.2071C16.5 20.9142 16.5 20.4428 16.5 19.5V9.5C16.5 8.55719 16.5 8.08579 16.2071 7.79289M16.2071 21.2071L21.2071 16.2071C21.5 15.9142 21.5 15.4428 21.5 14.5V4.5C21.5 3.55719 21.5 3.08579 21.2071 2.79289M16.2071 7.79289C15.9142 7.5 15.4428 7.5 14.5 7.5H4.5C3.55719 7.5 3.08579 7.5 2.79289 7.79289M16.2071 7.79289L21.2071 2.79289M2.79289 7.79289L7.79289 2.79289C8.08579 2.5 8.55719 2.5 9.5 2.5H19.5C20.4428 2.5 20.9142 2.5 21.2071 2.79289M8.79289 15.2071C9.08579 15.5 9.55719 15.5 10.5 15.5H14M8.79289 15.2071C8.5 14.9142 8.5 14.4428 8.5 13.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CubeIcon;
