import * as React from "react";
import type { SVGProps } from "react";

interface NoInternetIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NoInternetIcon = (props: NoInternetIconProps) => {
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
        <path d="M5 5C3.14864 6.79995 2 9.3082 2 12.0825C2 17.5598 6.47715 22 12 22C14.7255 22 17.1962 20.9187 19 19.165" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.5 16C14.8828 19.5318 13.6403 22 12 22C9.79086 22 8 17.5228 8 12C8 10.7687 8.08902 9.58934 8.25184 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.16204 2.39775C6.79227 2.5844 6.64381 3.03547 6.83046 3.40525C7.01711 3.77503 7.46818 3.92348 7.83796 3.73683L7.16204 2.39775ZM20.2627 16.1619C20.076 16.5317 20.2244 16.9828 20.5941 17.1695C20.9639 17.3562 21.415 17.2078 21.6017 16.8381L20.2627 16.1619ZM16 12H15.25C15.25 12.4142 15.5858 12.75 16 12.75V12ZM8.30261 4.7262C8.1514 5.11183 8.34143 5.54702 8.72705 5.69824C9.11268 5.84945 9.54787 5.65942 9.69909 5.2738L8.30261 4.7262ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM7.83796 3.73683C9.08814 3.10579 10.5014 2.75 12 2.75V1.25C10.2613 1.25 8.61705 1.66333 7.16204 2.39775L7.83796 3.73683ZM21.25 12C21.25 13.4986 20.894 14.9118 20.2627 16.1619L21.6017 16.8381C22.3363 15.3831 22.75 13.7389 22.75 12H21.25ZM12 2.75C12.2796 2.75 12.6219 2.88858 13.0121 3.30118C13.4038 3.71536 13.7911 4.35495 14.1321 5.20748C14.8124 6.90837 15.25 9.30957 15.25 12H16.75C16.75 9.16759 16.2921 6.56878 15.5248 4.65039C15.1419 3.69327 14.6673 2.86839 14.1019 2.27052C13.535 1.67106 12.825 1.25 12 1.25V2.75ZM9.69909 5.2738C10.0345 4.41855 10.4545 3.76449 10.8831 3.33637C11.3161 2.90388 11.7049 2.75 12 2.75V1.25C11.1762 1.25 10.4284 1.67044 9.82303 2.27511C9.21329 2.88415 8.69322 3.73009 8.30261 4.7262L9.69909 5.2738ZM16 12.75H22V11.25H16V12.75Z" fill="currentColor" />
        <path d="M2 2L22.0004 22.0004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NoInternetIcon;
