import * as React from "react";
import type { SVGProps } from "react";

interface WantedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WantedIcon = (props: WantedIconProps) => {
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
        <path d="M18.5168 2.01455H7.884C6.84571 2.01455 5.43937 1.83217 4.71912 2.75868C4.29227 3.30777 4.29227 4.11843 4.29227 5.73976C4.29227 7.03795 6.03931 8.01066 6.01966 8.50982C6 9.00954 4.29227 10.0064 4.29227 11.3362V17.5311C4.29227 18.1246 4.01196 18.5844 3.75968 19.1077C3.13475 20.404 2.82228 21.0522 3.10469 21.5261C3.38709 22 4.08579 22 5.48318 22H15.8539C17.6706 22 18.579 22 19.1433 21.4146C19.7077 20.8293 19.7077 19.8872 19.7077 18.0029V6.48344C19.7077 5.88992 19.988 5.43019 20.2403 4.90687C20.8653 3.61056 21.1777 2.9624 20.8953 2.48848C20.6129 2.01455 19.9142 2.01455 18.5168 2.01455Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 18H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.89128 11.5556C9.34109 11.8715 7.89853 12.5165 8.77715 13.3237C9.20634 13.718 9.68436 14 10.2853 14H13.7147C14.3156 14 14.7937 13.718 15.2229 13.3237C16.1015 12.5165 14.6589 11.8715 14.1087 11.5556C12.8185 10.8148 11.1815 10.8148 9.89128 11.5556Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default WantedIcon;
