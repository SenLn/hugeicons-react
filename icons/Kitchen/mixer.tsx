import * as React from "react";
import type { SVGProps } from "react";

interface MixerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MixerIcon = (props: MixerIconProps) => {
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
        <path d="M6 8.5H4.75C3.57721 8.5 2.99082 8.5 2.58686 8.19003C2.48286 8.11023 2.38977 8.01714 2.30997 7.91314C2 7.50918 2 6.92279 2 5.75C2 4.57721 2 3.99082 2.30997 3.58686C2.38977 3.48286 2.48286 3.38977 2.58686 3.30997C2.99082 3 3.57721 3 4.75 3H17C18.4142 3 19.1213 3 19.5607 3.43934C20 3.87868 20 4.58579 20 6V8.37217C20 9.42821 20 9.95623 19.746 10.3352C19.6371 10.4976 19.4976 10.6371 19.3352 10.746C18.9562 11 18.4282 11 17.3722 11H16.7951C16.3714 11 16.1596 11 15.9688 10.9625C15.4366 10.8581 14.9696 10.5419 14.675 10.0865C14.5693 9.92331 14.4907 9.72663 14.3333 9.33333C14.2547 9.13667 14.2153 9.03835 14.1625 8.95673C14.0152 8.72904 13.7817 8.57096 13.5156 8.51873C13.4202 8.5 13.3143 8.5 13.1025 8.5H12C11.0572 8.5 10.5858 8.5 10.2929 8.79289C10 9.08579 10 9.55719 10 10.5V17C10 19.2091 11.7909 21 14 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.9813 15H15.0187C13.7463 15 14.0261 16.6634 14.0261 17.5C14.0261 19.433 15.5814 21 17.5 21C19.4186 21 20.9739 19.433 20.9739 17.5C20.9739 16.6634 21.2537 15 19.9813 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 11V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.008 6L16.999 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MixerIcon;
