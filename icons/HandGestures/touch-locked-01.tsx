import * as React from "react";
import type { SVGProps } from "react";

interface TouchLocked01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchLocked01Icon = (props: TouchLocked01IconProps) => {
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
        <path d="M8.5 14L7.95675 14.5171C8.16822 14.7393 8.49365 14.8103 8.77844 14.6964C9.06324 14.5825 9.25 14.3067 9.25 14H8.5ZM6.28341 11.6713L6.82666 11.1542C6.81182 11.1386 6.79632 11.1236 6.7802 11.1094L6.28341 11.6713ZM3.8775 14.0886L4.47551 13.636C4.4726 13.6322 4.46966 13.6283 4.46668 13.6246L3.8775 14.0886ZM7.15864 18.4236L6.56062 18.8763H6.56062L7.15864 18.4236ZM3.86948 11.9053L3.27682 11.4457L3.27682 11.4457L3.86948 11.9053ZM7.60181 22C7.60181 22.4142 7.93759 22.75 8.35181 22.75C8.76602 22.75 9.10181 22.4142 9.10181 22H7.60181ZM8.21263 20.1155L8.92876 19.8927L8.21263 20.1155ZM8.1732 19.9973L8.87968 19.7456L8.87967 19.7455L8.1732 19.9973ZM12 9.5H11.25C11.25 9.70469 11.3337 9.90049 11.4816 10.042C11.6295 10.1835 11.8288 10.2584 12.0333 10.2493L12 9.5ZM18.0002 12.0592C18.309 12.3352 18.7831 12.3086 19.0592 11.9998C19.3352 11.691 19.3086 11.2169 18.9998 10.9408L18.0002 12.0592ZM9.04325 13.4829L6.82666 11.1542L5.74016 12.1883L7.95675 14.5171L9.04325 13.4829ZM3.27948 14.5413L6.56062 18.8763L7.75665 17.971L4.47551 13.636L3.27948 14.5413ZM3.27682 11.4457C2.57019 12.3568 2.57482 13.6468 3.28831 14.5527L4.46668 13.6246C4.17956 13.26 4.17752 12.7319 4.46214 12.3649L3.27682 11.4457ZM6.7802 11.1094C5.72827 10.1793 4.13524 10.3388 3.27682 11.4457L4.46214 12.3649C4.79514 11.9355 5.39049 11.8829 5.78661 12.2331L6.7802 11.1094ZM9.10181 22C9.10181 21.0874 9.10964 20.4739 8.92876 19.8927L7.49651 20.3384C7.59397 20.6516 7.60181 20.9963 7.60181 22H9.10181ZM6.56062 18.8763C7.1596 19.6676 7.35727 19.942 7.46672 20.2491L8.87967 19.7455C8.6749 19.1709 8.30091 18.69 7.75665 17.971L6.56062 18.8763ZM8.92876 19.8927C8.9134 19.8433 8.89703 19.7943 8.87968 19.7456L7.46672 20.2491C7.47724 20.2786 7.48717 20.3084 7.49651 20.3384L8.92876 19.8927ZM7.75 3.75V14H9.25V3.75H7.75ZM11.25 3.75V9.5H12.75V3.75H11.25ZM9.25 3.75C9.25 3.19772 9.69772 2.75 10.25 2.75V1.25C8.86929 1.25 7.75 2.36929 7.75 3.75H9.25ZM10.25 2.75C10.8023 2.75 11.25 3.19772 11.25 3.75H12.75C12.75 2.36929 11.6307 1.25 10.25 1.25V2.75ZM12.0333 10.2493C13.5963 10.1798 16.1216 10.38 18.0002 12.0592L18.9998 10.9408C16.676 8.86365 13.6518 8.67581 11.9667 8.75074L12.0333 10.2493Z" fill="currentColor" />
        <path d="M14.5 19.5C14.5 18.5654 14.5 18.0981 14.701 17.75C14.8326 17.522 15.022 17.3326 15.25 17.201C15.5981 17 16.0654 17 17 17H18C18.9346 17 19.4019 17 19.75 17.201C19.978 17.3326 20.1674 17.522 20.299 17.75C20.5 18.0981 20.5 18.5654 20.5 19.5C20.5 20.4346 20.5 20.9019 20.299 21.25C20.1674 21.478 19.978 21.6674 19.75 21.799C19.4019 22 18.9346 22 18 22H17C16.0654 22 15.5981 22 15.25 21.799C15.022 21.6674 14.8326 21.478 14.701 21.25C14.5 20.9019 14.5 20.4346 14.5 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5V17H16V15.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default TouchLocked01Icon;
