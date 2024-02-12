import * as React from "react";
import type { SVGProps } from "react";

interface Castle02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Castle02Icon = (props: Castle02IconProps) => {
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
        <path d="M7.28393 9.70982L6.86048 8.88716C6.69171 8.55928 6.60732 8.39533 6.48092 8.27672C6.377 8.17921 6.25325 8.10443 6.1178 8.05731C5.95306 8 5.76611 8 5.39223 8C4.84263 8 4.56783 8 4.35334 8.10516C4.17791 8.19116 4.0315 8.32515 3.93171 8.491C3.8097 8.69377 3.79013 8.96317 3.75097 9.50195L3.07621 18.7863C2.9668 20.2917 2.9121 21.0444 3.36478 21.5222C3.81747 22 4.58528 22 6.1209 22H17.8791C19.4147 22 20.1825 22 20.6352 21.5222C21.0879 21.0444 21.0332 20.2917 20.9238 18.7863L20.249 9.50195C20.2099 8.96317 20.1903 8.69377 20.0683 8.491C19.9685 8.32515 19.8221 8.19116 19.6467 8.10516C19.4322 8 19.1574 8 18.6078 8C18.2339 8 18.0469 8 17.8822 8.05731C17.7468 8.10443 17.623 8.17921 17.5191 8.27672C17.3927 8.39533 17.3083 8.55927 17.1395 8.88717L16.7161 9.70982C16.5958 9.94344 16.5357 10.0602 16.4547 10.1527C16.317 10.3097 16.1331 10.4209 15.9284 10.4707C15.8079 10.5 15.6747 10.5 15.4083 10.5C15.1106 10.5 14.9618 10.5 14.8302 10.4647C14.6063 10.4046 14.4101 10.2711 14.2741 10.0864C14.1941 9.97782 14.1416 9.84092 14.0367 9.56711L13.9153 9.25C13.6923 8.66803 13.5809 8.37704 13.3462 8.20255C13.3233 8.18551 13.2997 8.16942 13.2754 8.15434C13.0265 8 12.7102 8 12.0774 8H11.9226C11.2898 8 10.9735 8 10.7247 8.15434C10.7003 8.16942 10.6767 8.18551 10.6538 8.20255C10.4191 8.37704 10.3077 8.66803 10.0847 9.25L9.96327 9.56711C9.85838 9.84092 9.80594 9.97782 9.72593 10.0864C9.58986 10.2711 9.39365 10.4046 9.16983 10.4647C9.03821 10.5 8.88937 10.5 8.59168 10.5C8.32529 10.5 8.19209 10.5 8.07162 10.4707C7.86689 10.4209 7.68296 10.3097 7.5453 10.1527C7.4643 10.0602 7.40418 9.94344 7.28393 9.70982Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5C13.491 5.68354 16 4.5 16 2C14.3578 2.62289 13.5105 2.61424 12 2V5ZM12 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22L9.60777 18.9611C9.75132 18.2434 9.8231 17.8845 10.0155 17.6192C10.4935 16.9602 11.2612 17 12 17C12.7388 17 13.5065 16.9602 13.9845 17.6192C14.1769 17.8845 14.2487 18.2434 14.3922 18.9611L15 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Castle02Icon;
