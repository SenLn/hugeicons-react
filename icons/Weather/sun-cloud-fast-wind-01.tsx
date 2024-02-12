import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudFastWind01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudFastWind01Icon = (props: SunCloudFastWind01IconProps) => {
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
        <path d="M9.00488 4.15468C8.3104 3.15451 7.15576 2.5 5.84876 2.5C3.72584 2.5 2.00488 4.22674 2.00488 6.35679C2.00488 7.65354 2.64271 8.80081 3.62076 9.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.1588 21.4146C14.3031 21.4699 14.4585 21.5 14.6203 21.5C15.385 21.5 16.0049 20.8284 16.0049 20C16.0049 19.1716 15.385 18.5 14.6203 18.5C14.3488 18.5 14.0956 18.5846 13.8819 18.7309C12.8207 19.5225 10.8549 20.5378 8.62023 20.801M5.85102 20.6936C5.2328 20.5635 4.61355 20.3541 4.00488 20.0478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.0049 20.5C19.263 20.5 19.9606 20.5 21.0049 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.4782 8.40196C17.4856 8.40192 17.4931 8.40191 17.5006 8.40191C19.9849 8.40191 21.8964 10.36 21.9983 12.6502C22.0763 15.7 19.4254 17.308 17.5062 17.248M17.4782 8.40196C17.493 8.24557 17.5006 8.08719 17.5006 7.92713C17.5006 4.96 15.0368 2.5 12.0005 2.5C9.06174 2.5 6.74504 4.77718 6.50324 7.44927M17.4782 8.40196C17.376 9.47916 17.0384 10.42 16.2347 11.356M6.50324 7.44927C3.96786 7.67846 2.12265 9.76 2.0027 12.1754C1.92473 14.5 3.54406 16.12 5.52323 16.9C9.18169 18.28 12.6602 17.104 13.8237 15.124C14.3155 14.104 13.7398 12.64 12.3604 12.37C11.5207 12.16 10.0813 12.7 9.99735 14.302M6.50324 7.44927C6.66101 7.43501 6.82091 7.42771 6.98262 7.42771C8.10796 7.42771 9.12172 7.72 10.0093 8.404" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SunCloudFastWind01Icon;
