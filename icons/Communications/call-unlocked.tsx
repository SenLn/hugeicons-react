import * as React from "react";
import type { SVGProps } from "react";

interface CallUnlockedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CallUnlockedIcon = (props: CallUnlockedIconProps) => {
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
        <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15.5312 6.35997V4.95232C15.5312 3.87408 16.4127 3 17.5 3C17.9887 3 18.4359 3.1766 18.7801 3.46895M16.8437 12H18.1563C19.1777 12 19.6884 12 20.0749 11.7951C20.3802 11.6333 20.6302 11.3854 20.7934 11.0827C21 10.6993 21 10.1929 21 9.17998C21 8.16711 21 7.66067 20.7934 7.2773C20.6302 6.9746 20.3802 6.72668 20.0749 6.56488C19.6884 6.35997 19.1777 6.35997 18.1563 6.35997H16.8437C15.8223 6.35997 15.3116 6.35997 14.9251 6.56488C14.6198 6.72668 14.3698 6.9746 14.2066 7.2773C14 7.66067 14 8.16711 14 9.17998C14 10.1929 14 10.6993 14.2066 11.0827C14.3698 11.3854 14.6198 11.6333 14.9251 11.7951C15.3116 12 15.8223 12 16.8437 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CallUnlockedIcon;
