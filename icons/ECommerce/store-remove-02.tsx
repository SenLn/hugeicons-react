import * as React from "react";
import type { SVGProps } from "react";

interface StoreRemove02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StoreRemove02Icon = (props: StoreRemove02IconProps) => {
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
        <path d="M2.99707 10.4944V14.997C2.99707 17.827 2.99707 19.2421 3.87575 20.1213C4.75443 21.0005 6.16864 21.0005 8.99707 21.0005H12.4971M20.9971 10.4944V12.9958" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.99707 16.9897H10.9971" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.9971 15.9979L18.9971 18.9997M18.9971 18.9997L21.9971 22.0014M18.9971 18.9997L15.9971 22.0014M18.9971 18.9997L21.9971 15.9979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.7947 2.00134L6.14885 2.02895C4.41069 1.94393 3.96502 3.21638 3.96502 3.8384C3.96502 4.39473 3.88957 5.20575 2.82426 6.73007C1.75895 8.25438 1.839 8.70721 2.43973 9.76247C2.9383 10.6383 4.20643 10.9804 4.86764 11.0379C6.96785 11.0833 7.98968 9.35885 7.98968 8.14687C9.03154 11.1922 11.9946 11.1922 13.3148 10.844C14.6376 10.4951 15.7707 9.24628 16.0381 8.14687C16.194 9.51315 16.6672 10.3104 18.0653 10.8583C19.5135 11.4257 20.7589 10.5584 21.3838 10.0024C22.0087 9.44644 22.4097 8.21217 21.2958 6.85559C20.5276 5.92005 20.2074 5.0387 20.1023 4.12524C20.0413 3.59596 19.9878 3.02721 19.5961 2.66529C19.0238 2.13637 18.2026 1.97589 17.7947 2.00134Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StoreRemove02Icon;
