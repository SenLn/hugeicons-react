import * as React from "react";
import type { SVGProps } from "react";

interface Medal02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Medal02Icon = (props: Medal02IconProps) => {
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
        <path d="M3 5.11296C3 4.56029 3 4.28395 3.04289 4.05373C3.23304 3.03312 4.02565 2.23473 5.03889 2.0432C5.26745 2 5.54179 2 6.09048 2H17.9095C18.4582 2 18.7325 2 18.9611 2.0432C19.9743 2.23473 20.767 3.03312 20.9571 4.05373C21 4.28395 21 4.56029 21 5.11296C21 5.6552 21 5.92631 20.9685 6.17771C20.8309 7.27541 20.2512 8.26781 19.3654 8.92208C19.1625 9.07192 18.9272 9.20359 18.4566 9.46692L15.8851 10.9059C13.9861 11.9686 13.0365 12.5 12 12.5C10.9635 12.5 10.0139 11.9686 8.11486 10.9059L5.54338 9.46692C5.0728 9.20359 4.83752 9.07192 4.63465 8.92208C3.74885 8.26781 3.16914 7.27541 3.03152 6.17771C3 5.92631 3 5.6552 3 5.11296Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 5V6M12 5V8M16 5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.7774 13.6499L13.5693 15.2468C13.6773 15.4691 13.9653 15.6823 14.2083 15.7231L15.6436 15.9636C16.5615 16.1178 16.7775 16.7893 16.1161 17.4516L15.0002 18.5767C14.8112 18.7673 14.7077 19.1347 14.7662 19.3979L15.0857 20.7906C15.3377 21.893 14.7572 22.3195 13.7898 21.7433L12.4445 20.9403C12.2015 20.7952 11.801 20.7952 11.5536 20.9403L10.2082 21.7433C9.24533 22.3195 8.66039 21.8885 8.91236 20.7906L9.23183 19.3979C9.29032 19.1347 9.18683 18.7673 8.99785 18.5767L7.88198 17.4516C7.22505 16.7893 7.43653 16.1178 8.35443 15.9636L9.78977 15.7231C10.0282 15.6823 10.3162 15.4691 10.4242 15.2468L11.2161 13.6499C11.6481 12.7834 12.35 12.7834 12.7774 13.6499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Medal02Icon;
