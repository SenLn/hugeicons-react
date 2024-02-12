import * as React from "react";
import type { SVGProps } from "react";

interface CurvyUpDownDirectionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CurvyUpDownDirectionIcon = (props: CurvyUpDownDirectionIconProps) => {
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
        <path d="M13.0135 19.9962C13.0135 19.9962 11.5441 21.9976 11.0172 21.9985C10.4902 21.9994 9.01411 20.003 9.01411 20.003M14.9863 3.99552C14.9863 3.99552 13.5101 2.00008 12.9832 2.00098C12.4562 2.00188 10.9869 4.00237 10.9869 4.00237M12.851 2.22593C13.1433 3.63634 13.2603 6.2807 10.8092 7.59471C9.94673 8.13922 8.50078 8.03987 6.85542 8.04268C6.18478 8.07762 4.96565 8.65084 4.99871 10.0822C5.03176 11.5135 6.20852 11.9815 6.79277 12.0366L16.9018 12.0193C17.7533 12.0033 18.9994 12.4946 19.002 14.0102C19.0045 15.4898 17.6936 16.0713 16.7099 15.9453C14.0457 15.6042 11.2552 16.4168 11.017 19.9156L11.0206 21.9985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CurvyUpDownDirectionIcon;
