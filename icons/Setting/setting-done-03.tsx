import * as React from "react";
import type { SVGProps } from "react";

interface SettingDone03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SettingDone03Icon = (props: SettingDone03IconProps) => {
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
        <path d="M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.384 9.43749C13.7591 8.85581 12.9211 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 12.9211 8.85581 13.7591 9.43749 14.384" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.78 20.436C9.33442 19.9904 9.18844 19.8566 8.90573 19.7389C8.62149 19.6204 8.3257 19.6161 7.69171 19.6161C6.1838 19.6161 5.32083 19.6161 4.85239 19.1476C4.38394 18.6792 4.38394 17.8162 4.38394 16.3083C4.38394 15.6777 4.37981 15.3817 4.26299 15.0987C4.14573 14.8147 3.93965 14.6022 3.49166 14.1541C2.92759 13.59 2 12.8859 2 12C2 11.114 2.92756 10.4099 3.49166 9.84585C3.93756 9.39996 4.14378 9.18799 4.26137 8.90515C4.37951 8.62098 4.38394 8.32526 4.38394 7.69171C4.38394 6.1838 4.38394 5.32083 4.85239 4.85239C5.32083 4.38394 6.1838 4.38394 7.69171 4.38394C8.32091 4.38394 8.61661 4.38 8.89929 4.26379C9.18454 4.14652 9.39688 3.94064 9.84585 3.49166C10.4099 2.92756 11.2104 2 12 2C12.7896 2 13.59 2.92759 14.1541 3.49167C14.6029 3.94037 14.8155 4.14637 15.1001 4.26355C15.3827 4.37992 15.6787 4.38394 16.3083 4.38394C17.8162 4.38394 18.6792 4.38394 19.1476 4.85239C19.6161 5.32083 19.6161 6.1838 19.6161 7.69171C19.6161 8.32383 19.6202 8.6196 19.7378 8.9032C19.8555 9.18695 19.9891 9.3211 20.436 9.768" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SettingDone03Icon;
