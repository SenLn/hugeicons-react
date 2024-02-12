import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudBigRain01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudBigRain01Icon = (props: SunCloudBigRain01IconProps) => {
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
        <path d="M9 4.65468C8.30552 3.65451 7.15088 3 5.84388 3C3.72096 3 2 4.72674 2 6.85679C2 8.15354 2.63783 9.30081 3.61588 10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.4776 10.0091C17.485 10.0091 17.4925 10.0091 17.5 10.0091C19.9853 10.0091 22 12.0269 22 14.5159C22 16.8512 20.2265 18.7716 17.9548 19M17.4776 10.0091C17.4924 9.8442 17.5 9.67716 17.5 9.50834C17.5 6.46617 15.0376 4 12 4C9.12324 4 6.76233 6.21197 6.52042 9.03032M17.4776 10.0091C17.3753 11.1453 16.9286 12.182 16.2428 13.0136M6.52042 9.03032C3.98398 9.27205 2 11.4116 2 14.0152C2 16.4378 3.71776 18.536 6 19M6.52042 9.03032C6.67826 9.01527 6.83823 9.00758 7 9.00758C8.12582 9.00758 9.16474 9.38023 10.0005 10.0091" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 19.5034C9.5 18.2482 10.5532 17.0077 11.2924 16.2917C11.6939 15.9028 12.3061 15.9028 12.7076 16.2917C13.4468 17.0077 14.5 18.2482 14.5 19.5034C14.5 20.7341 13.5533 22 12 22C10.4467 22 9.5 20.7341 9.5 19.5034Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default SunCloudBigRain01Icon;
