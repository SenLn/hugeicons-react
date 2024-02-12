import * as React from "react";
import type { SVGProps } from "react";

interface SoftwareUninstallIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SoftwareUninstallIcon = (props: SoftwareUninstallIconProps) => {
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
        <path d="M9.5 10C9.5 11.1046 10.3954 12 11.5 12C12.6046 12 13.5 11.1046 13.5 10C13.5 8.89543 12.6046 8 11.5 8C10.3954 8 9.5 8.89543 9.5 10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.57026 14C3.88958 12.8233 3.5 11.4571 3.5 10C3.5 5.58172 7.08172 2 11.5 2C15.9183 2 19.5 5.58172 19.5 10C19.5 11.4571 19.1104 12.8233 18.4297 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.35 22H5.65C4.38598 22 3.75398 22 3.29997 21.6148C3.10343 21.448 2.93468 21.2337 2.80335 20.9842C2.5 20.4076 2.5 19.6051 2.5 18C2.5 16.3949 2.5 15.5924 2.80335 15.0158C2.93468 14.7663 3.10343 14.552 3.29997 14.3852C3.75398 14 4.38598 14 5.65 14H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.3906 6.61055L17.4021 4.59912" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 17L19 19.5M19 19.5L21.5 22M19 19.5L16.5 22M19 19.5L21.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SoftwareUninstallIcon;
