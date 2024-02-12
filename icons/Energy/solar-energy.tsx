import * as React from "react";
import type { SVGProps } from "react";

interface SolarEnergyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SolarEnergyIcon = (props: SolarEnergyIconProps) => {
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
        <path d="M2 10C2.77968 6.18409 5.66918 3.12932 9.40618 2.08977C9.71987 2.00251 9.87671 1.95888 9.96119 2.05236C10.0457 2.14584 9.98344 2.30042 9.85897 2.60956L9 4.5M14 2C17.8159 2.77968 20.8707 5.66918 21.9102 9.40618C21.9975 9.71987 22.0411 9.87671 21.9476 9.96119C21.8542 10.0457 21.6996 9.98344 21.3904 9.85897L19.5 9M22 14C21.2203 17.8159 18.3308 20.8707 14.5938 21.9102C14.2801 21.9975 14.1233 22.0411 14.0388 21.9476C13.9543 21.8542 14.0166 21.6996 14.141 21.3904L15 19.5M10 22C6.18409 21.2203 3.12932 18.3308 2.08977 14.5938C2.00251 14.2801 1.95888 14.1233 2.05236 14.0388C2.14584 13.9543 2.30042 14.0166 2.60956 14.141L4.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 12C15 13.6569 13.6569 15 12 15M15 12C15 10.3431 13.6569 9 12 9M15 12H16.5M12 15C10.3431 15 9 13.6569 9 12M12 15V16.5M9 12C9 10.3431 10.3431 9 12 9M9 12L7.5 12M12 9V7.5M14.1213 9.87869L15.182 8.81803M9.87868 14.1213L8.81802 15.182M14.1213 14.1213L15.182 15.182M9.87868 9.87869L8.81802 8.81803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SolarEnergyIcon;
