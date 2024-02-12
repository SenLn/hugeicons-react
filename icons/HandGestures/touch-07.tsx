import * as React from "react";
import type { SVGProps } from "react";

interface Touch07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch07Icon = (props: Touch07IconProps) => {
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
        <path d="M11.2273 7.78947V3.57895C11.2273 2.70692 10.5353 2 9.68182 2C8.82829 2 8.13636 2.70692 8.13636 3.57895V14.0655L6.46696 12.3546C5.73449 11.6039 4.52795 11.6724 3.88085 12.5014C3.38571 13.1357 3.37204 14.033 3.8476 14.6829L6.94263 18.9123C7.64502 19.8721 7.99622 20.352 8.41886 20.725C9.06365 21.2941 9.83631 21.6901 10.6674 21.8773C11.2121 22 11.7975 22 12.9681 22C15.2003 22 16.3164 22 17.205 21.6504C18.5637 21.1159 19.6373 20.0155 20.1589 18.623C20.5 17.7123 20.5 16.5684 20.5 14.2807V11.6782C20.5 10.649 19.7718 9.77073 18.7782 9.60154L18.4254 9.54147C17.8934 9.45089 17.4091 9.87003 17.4091 10.4211M11.2273 7.78947L11.8225 7.48542C12.1086 7.33925 12.4286 7.24491 12.7397 7.3211C13.6452 7.54286 14.3182 8.37534 14.3182 9.36842M11.2273 7.78947V10.4211M14.3182 9.36842V10.4211M14.3182 9.36842C14.3182 8.78707 14.7795 8.31579 15.3485 8.31579C16.4865 8.31579 17.4091 9.25835 17.4091 10.4211M17.4091 10.4211V11.4737" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Touch07Icon;
