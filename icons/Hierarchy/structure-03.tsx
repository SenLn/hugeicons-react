import * as React from "react";
import type { SVGProps } from "react";

interface Structure03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Structure03Icon = (props: Structure03IconProps) => {
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
        <path d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.2857 2H13.7143C15.7888 2 16 2.92494 16 4.5C16 6.07506 15.7888 7 13.7143 7H10.2857C8.2112 7 8 6.07506 8 4.5C8 2.92494 8.2112 2 10.2857 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 13C4.24764 11.377 5.24469 11 7.98759 11H16.0153C18.7582 11 19.7524 11.377 20 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13C4.94281 13 5.41421 13 5.70711 13.2929C6 13.5858 6 14.0572 6 15C6 15.9428 6 16.4142 5.70711 16.7071C5.41421 17 4.94281 17 4 17C3.05719 17 2.58579 17 2.29289 16.7071C2 16.4142 2 15.9428 2 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 15C18 14.0572 18 13.5858 18.2929 13.2929C18.5858 13 19.0572 13 20 13C20.9428 13 21.4142 13 21.7071 13.2929C22 13.5858 22 14.0572 22 15C22 15.9428 22 16.4142 21.7071 16.7071C21.4142 17 20.9428 17 20 17C19.0572 17 18.5858 17 18.2929 16.7071C18 16.4142 18 15.9428 18 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Structure03Icon;
