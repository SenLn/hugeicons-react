import * as React from "react";
import type { SVGProps } from "react";

interface BodyPartSixPackIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BodyPartSixPackIcon = (props: BodyPartSixPackIconProps) => {
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
        <path d="M22 6C22 7 21 9 17 9C13 9 12 7 12 6C12 7 11 9 7 9C3 9 2 7 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3.5C9.66667 3 8.5 2 7 2M14 3.5C14.3333 3 15.5 2 17 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 9V10C4 11.3203 4.26603 12.6198 4.56009 13.8995C5.0994 16.2464 5.36933 19.5805 4 22M20 9V10C20 11.3203 19.734 12.6198 19.4399 13.8995C18.9006 16.2464 18.6307 19.5805 20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 19C14.515 20.179 13.644 20.369 12.3229 19.2824C12.1326 19.1258 11.8582 19.115 11.6593 19.2605C10.2643 20.2819 9.39943 20.2911 8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 14C14.515 15.179 13.644 15.369 12.3229 14.2824C12.1326 14.1258 11.8582 14.115 11.6593 14.2605C10.2643 15.2819 9.39943 15.2911 8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BodyPartSixPackIcon;
