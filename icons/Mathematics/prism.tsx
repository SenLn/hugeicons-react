import * as React from "react";
import type { SVGProps } from "react";

interface PrismIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PrismIcon = (props: PrismIconProps) => {
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
        <path d="M12 15C12.3229 15 12.6069 15.2004 13.1749 15.6011L16.9191 18.2431C19.1042 19.7849 20.1967 20.5558 19.9708 21.2779M12 15C11.6771 15 11.3931 15.2004 10.8251 15.6011L7.08088 18.2431C4.89585 19.7849 3.80333 20.5558 4.02915 21.2779M12 15V11.5M19.9708 21.2779C19.745 22 18.4114 22 15.7443 22H8.25573C5.58856 22 4.25498 22 4.02915 21.2779M19.9708 21.2779V8M4.02915 21.2779V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C12.3229 2 12.6069 2.20038 13.1749 2.60114L16.9191 5.24311C19.1042 6.78487 20.1967 7.55575 19.9708 8.27788C19.745 9 18.4114 9 15.7443 9H8.25573C5.58856 9 4.25498 9 4.02915 8.27788C3.80333 7.55575 4.89585 6.78487 7.08088 5.24311L10.8251 2.60114C11.3931 2.20038 11.6771 2 12 2ZM12 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PrismIcon;
