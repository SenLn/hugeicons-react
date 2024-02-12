import * as React from "react";
import type { SVGProps } from "react";

interface LoyaltyCardIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LoyaltyCardIcon = (props: LoyaltyCardIconProps) => {
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
        <path d="M2 12C2 7.99306 2 5.98959 3.17157 4.7448C4.34315 3.5 6.22876 3.5 10 3.5H14C17.7712 3.5 19.6569 3.5 20.8284 4.7448C22 5.98959 22 7.99306 22 12C22 16.0069 22 18.0104 20.8284 19.2552C19.6569 20.5 17.7712 20.5 14 20.5H10C6.22876 20.5 4.34315 20.5 3.17157 19.2552C2 18.0104 2 16.0069 2 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.8881 10.8314C7.82668 10.2831 8.64587 10.504 9.13798 10.856C9.33975 11.0003 9.44064 11.0725 9.5 11.0725C9.55936 11.0725 9.66025 11.0003 9.86202 10.856C10.3541 10.504 11.1733 10.2831 12.1119 10.8314C13.3437 11.551 13.6224 13.925 10.7812 15.9278C10.24 16.3093 9.96942 16.5 9.5 16.5C9.03058 16.5 8.76 16.3093 8.21884 15.9278C5.3776 13.925 5.65632 11.551 6.8881 10.8314Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 16.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LoyaltyCardIcon;
