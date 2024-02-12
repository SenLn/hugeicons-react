import * as React from "react";
import type { SVGProps } from "react";

interface ColosseumIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ColosseumIcon = (props: ColosseumIconProps) => {
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
        <path d="M11.8934 20.8654L12.0206 19.0266M7.91638 20.9237L8.04356 19.0266M6.05503 15.5229V13.5208M10.0321 8.75557L8.13307 4.16724C7.8936 3.52902 6.88092 2.34355 5.24116 3.46072C4.37391 4.05158 3.58048 4.59256 3.02538 4.97115C2.52025 5.31565 2.19911 5.87232 2.16708 6.48575C1.96653 10.3263 1.93813 16.851 2.12774 19.0054C2.13145 19.7304 2.42599 21.057 4.68582 20.9917C4.68582 20.9917 18.9127 20.9356 19.5555 20.9917C20.1983 21.0477 21.9261 20.8669 21.9261 19.0054C22.0106 17.5599 22.0268 15.4225 21.9528 14.0229C21.9229 13.4574 21.6972 12.9214 21.2652 12.5587C20.4509 11.8749 19.0102 10.926 16.9851 10.0247L16.9236 12.0571L13.4161 11.9701M2.00373 12.8543C3.48472 11.0376 8.36491 8.57984 11.4174 8.64081C11.769 8.64783 12.0655 8.88467 12.2009 9.21139L14.6783 15.1908M14.6783 15.1908L16.9681 20.968M14.6783 15.1908C8.85179 14.6002 4.09893 16.0215 2.03479 17.0636M14.6783 15.1908C16.9404 15.4201 19.1002 15.7897 21.9939 16.9925M10.0321 15.0224V13.0203" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ColosseumIcon;
