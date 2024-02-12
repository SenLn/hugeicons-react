import * as React from "react";
import type { SVGProps } from "react";

interface FolderMoveToIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderMoveToIcon = (props: FolderMoveToIconProps) => {
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
        <path d="M7 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 12.5094 22 12.7592 21.9997 13M12 7L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.8215 20.8926 6.94493 20.9921 11 20.9994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.5 16C20.0057 16.4915 22 17.7998 22 18.5M19.5 21C20.0057 20.5085 22 19.2002 22 18.5M22 18.5L14 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderMoveToIcon;
