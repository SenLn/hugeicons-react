import * as React from "react";
import type { SVGProps } from "react";

interface CallLockedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CallLockedIcon = (props: CallLockedIconProps) => {
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
        <path d="M15.7424 6.18216L15.7424 4.79302C15.7424 4.58783 15.751 4.38009 15.8244 4.18848C16.0198 3.67844 16.5374 3.01025 17.4797 3.01025C18.4221 3.01025 18.96 3.67844 19.1554 4.18848C19.2289 4.38009 19.2374 4.58783 19.2374 4.79302L19.2374 6.18216M15.8117 12H19.1884C20.1825 12 20.9884 11.1941 20.9884 10.2V8.20039C20.9884 7.20628 20.1825 6.40039 19.1884 6.40039H15.8117C14.8176 6.40039 14.0117 7.20628 14.0117 8.20039V10.2C14.0117 11.1941 14.8176 12 15.8117 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CallLockedIcon;
