import * as React from "react";
import type { SVGProps } from "react";

interface DentalCareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DentalCareIcon = (props: DentalCareIconProps) => {
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
        <path d="M14 5C13.5 5.5 12.4967 5.41228 11 4.17632M11 4.17632C11.2214 3.99352 11.4514 3.78582 11.689 3.55032C13.9947 1.2656 17.1348 1.71292 18.606 3.55032C19.232 4.33213 20.4592 5.83126 19.8213 9.5M11 4.17632C10.7786 3.99352 10.5486 3.78582 10.311 3.55032C8.0053 1.2656 4.86519 1.71292 3.39399 3.55032C2.37784 4.8194 -0.222479 7.97857 6.14215 19.2396C6.40566 19.7058 6.9306 20 7.49601 20C8.39799 20 9.10296 19.2801 9.13229 18.4399C9.17779 17.1365 9.42981 15.6853 10.1334 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17L16.684 17.684C16.8315 17.8315 16.9052 17.9052 16.9945 17.9003C17.0837 17.8953 17.1489 17.8139 17.2792 17.651L18.9996 15.5M13 15.4543V15.8403C13 17.0422 13 17.6431 13.1484 18.1931C13.3316 18.8723 13.6791 19.4986 14.1616 20.0197C14.5522 20.4416 15.0678 20.7701 16.0988 21.4271C16.5604 21.7212 16.7912 21.8683 17.0365 21.9367C17.3395 22.0211 17.6605 22.0211 17.9635 21.9367C18.2088 21.8683 18.4396 21.7212 18.9012 21.4271C19.9322 20.7701 20.4478 20.4416 20.8384 20.0197C21.3209 19.4986 21.6684 18.8723 21.8516 18.1931C22 17.6431 22 17.0422 22 15.8403V15.4543C22 14.7059 22 14.3317 21.8582 14.0157C21.7707 13.8208 21.6454 13.6443 21.4892 13.496C21.2359 13.2555 20.877 13.1241 20.159 12.8613L18.685 12.3218C18.099 12.1073 17.806 12 17.5 12C17.194 12 16.901 12.1073 16.315 12.3218L14.841 12.8613C14.123 13.1241 13.7641 13.2555 13.5108 13.496C13.3546 13.6443 13.2293 13.8208 13.1418 14.0157C13 14.3317 13 14.7059 13 15.4543Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DentalCareIcon;
