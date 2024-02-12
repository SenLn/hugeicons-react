import * as React from "react";
import type { SVGProps } from "react";

interface GreenHouseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GreenHouseIcon = (props: GreenHouseIconProps) => {
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
        <path d="M12.551 13.6081C11.0316 15.2407 5.21031 18.0107 7.02784 21.0275C7.68071 22.1111 9.56024 22 10.8612 22H13.1388C16.5537 22 18.2611 22 19.429 21.0286C20.5969 20.0572 20.8471 18.4289 21.3476 15.1724L21.6486 13.2135C22.0016 10.9162 22.1781 9.76763 21.7438 8.74938C21.3095 7.73112 20.346 7.03443 18.4189 5.64106L16.979 4.6C14.5817 2.86667 13.3831 2 12 2C10.6169 2 9.41829 2.86667 7.02099 4.6L5.58114 5.64106C3.65403 7.03443 2.69047 7.73112 2.25617 8.74938C1.82186 9.76763 1.99837 10.9162 2.35139 13.2135L2.65243 15.1724C3.00843 17.489 3.23781 18.9817 3.76102 20M12.1801 18.1259C14.5484 17.6674 16.1708 16.2098 16.9339 13.855C17.7983 11.1881 16.6267 7.88376 13.6752 7.11938C13.6752 7.11938 14.5852 8.20421 13.9973 9.15585C12.864 11.1955 9.62452 10.5174 8.32535 13.1165C7.56032 14.5675 7.79225 16.285 8.89383 17.3563C9.58602 18.0294 11.0428 18.3461 12.1801 18.1259Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GreenHouseIcon;
