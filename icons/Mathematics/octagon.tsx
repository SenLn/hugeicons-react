import * as React from "react";
import type { SVGProps } from "react";

interface OctagonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OctagonIcon = (props: OctagonIconProps) => {
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
        <path d="M13.5145 2C14.7408 2 15.3539 2 15.9052 2.22836C16.4565 2.45672 16.8901 2.89027 17.7572 3.75736L20.2424 6.24264C21.1095 7.10973 21.5431 7.54328 21.7714 8.09459C21.9998 8.6459 21.9998 9.25903 21.9998 10.4853V13.5147C21.9998 14.741 21.9998 15.3541 21.7714 15.9054C21.5431 16.4567 21.1095 16.8903 20.2425 17.7574L17.7572 20.2426C16.8901 21.1097 16.4565 21.5433 15.9052 21.7716C15.3539 22 14.7408 22 13.5145 22H10.4851C9.25887 22 8.64573 22 8.0944 21.7716C7.54308 21.5433 7.10953 21.1097 6.24244 20.2426L3.75729 17.7573C2.89023 16.8903 2.4567 16.4567 2.22835 15.9054C2 15.3541 2 14.741 2 13.5148V10.4852C2 9.259 2 8.64589 2.22835 8.09458C2.4567 7.54328 2.89023 7.10974 3.75729 6.24265L6.24244 3.75743C7.10953 2.8903 7.54308 2.45674 8.0944 2.22837C8.64573 2 9.25887 2 10.4851 2H13.5145Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default OctagonIcon;
