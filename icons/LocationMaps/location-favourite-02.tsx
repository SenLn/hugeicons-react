import * as React from "react";
import type { SVGProps } from "react";

interface LocationFavourite02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LocationFavourite02Icon = (props: LocationFavourite02IconProps) => {
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
        <path d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.01498 7.38661C10.0876 6.74692 11.0238 7.00471 11.5863 7.41534C11.8169 7.58371 11.9322 7.66789 12 7.66789C12.0678 7.66789 12.1831 7.58371 12.4137 7.41534C12.9762 7.00471 13.9124 6.74692 14.985 7.38661C16.3928 8.22614 16.7113 10.9958 13.4642 13.3324C12.8457 13.7775 12.5365 14 12 14C11.4635 14 11.1543 13.7775 10.5358 13.3324C7.28869 10.9958 7.60723 8.22614 9.01498 7.38661Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LocationFavourite02Icon;
