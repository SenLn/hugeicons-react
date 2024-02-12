import * as React from "react";
import type { SVGProps } from "react";

interface EraserAutoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EraserAutoIcon = (props: EraserAutoIconProps) => {
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
        <path d="M12.0352 12.0885L9.11997 15.0192C7.70666 16.44 7 17.1504 7 18.0354C7 18.9204 7.70666 19.6308 9.11997 21.0516L9.45083 21.3842C9.75311 21.6881 9.90425 21.84 10.0959 21.92C10.2875 22 10.5003 22 10.9261 22H13.1444C13.5701 22 13.7829 22 13.9746 21.92C14.1662 21.84 14.3173 21.6881 14.6196 21.3842L17.9507 18.0354M12.0352 12.0885L14.0318 10.0813C15.4067 8.69915 16.0941 8.00807 16.9454 8.00009C16.9583 7.99997 16.9712 7.99997 16.9842 8.00009C17.8355 8.00807 18.5229 8.69915 19.8978 10.0813C21.2938 11.4848 21.9919 12.1865 21.9999 13.0598C22 13.073 22 13.0863 21.9999 13.0995C21.9919 13.9728 21.2938 14.6745 19.8978 16.078L17.9507 18.0354M12.0352 12.0885L17.9507 18.0354" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9L7.5 5.5M7.5 5.5L6.18393 2.42917C6.1474 2.34393 6.12913 2.30131 6.10602 2.26511C6.01746 2.12637 5.86628 2.0315 5.69393 2.00652C5.64897 2 5.59931 2 5.5 2C5.40069 2 5.35103 2 5.30607 2.00652C5.13372 2.0315 4.98254 2.12637 4.89398 2.26511C4.87087 2.30131 4.8526 2.34393 4.81607 2.42917L3.5 5.5M7.5 5.5L3.5 5.5M3.5 5.5L2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EraserAutoIcon;
