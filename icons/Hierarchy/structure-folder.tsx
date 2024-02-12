import * as React from "react";
import type { SVGProps } from "react";

interface StructureFolderIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StructureFolderIcon = (props: StructureFolderIconProps) => {
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
        <path d="M2 19.5C2 18.3215 2 17.7322 2.43934 17.3661C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.3661C8 17.7322 8 18.3215 8 19.5C8 20.6785 8 21.2678 7.56066 21.6339C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.6339C2 21.2678 2 20.6785 2 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 19.5C16 18.3215 16 17.7322 16.4393 17.3661C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.5607 21.6339C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.6339C16 21.2678 16 20.6785 16 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 17C19 13.6907 18.2562 13 14.6923 13H9.30769C5.74379 13 5 13.6907 5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10H12.5625C14.1425 10 14.9325 10 15.5 9.62549C15.7457 9.46336 15.9566 9.25502 16.1208 9.01238C16.5 8.45188 16.5 7.67163 16.5 6.11111C16.5 5.1748 16.5 4.70665 16.2725 4.37035C16.174 4.22476 16.0474 4.09976 15.9 4.00249C15.5595 3.77778 15.0855 3.77778 14.1375 3.77778H12.6425C12.5126 3.77778 12.4476 3.77778 12.3879 3.76912C12.1645 3.73672 11.9647 3.61544 11.8358 3.43402C11.8014 3.38555 11.7726 3.32861 11.715 3.21472C11.4788 2.74826 11.263 2.27872 10.7397 2.08489C10.5105 2 10.2486 2 9.72492 2C8.90751 2 8.4988 2 8.19213 2.16903C7.97352 2.28952 7.79314 2.46767 7.67114 2.68358C7.5 2.98647 7.5 3.39013 7.5 4.19745V5.55556C7.5 7.65069 7.5 8.69825 8.15901 9.34913C8.81802 10 9.87868 10 12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default StructureFolderIcon;
