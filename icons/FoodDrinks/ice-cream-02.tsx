import * as React from "react";
import type { SVGProps } from "react";

interface IceCream02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IceCream02Icon = (props: IceCream02IconProps) => {
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
        <path d="M7.5 12L8.32693 14.6957C9.82073 19.5652 10.5676 22 12 22C13.4324 22 14.1793 19.5652 15.6731 14.6957L16.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8.66667C12 9.26343 12.1647 9.82357 12.4531 10.3081M12.4531 10.3081C11.7173 11.3298 10.4825 12 9.08333 12C6.82817 12 5 10.2589 5 8.11111C5 6.22776 6.40574 4.6571 8.27244 4.2989C8.91067 2.94384 10.3396 2 12 2C14.0719 2 15.7833 3.46957 16.0479 5.37393M12.4531 10.3081C13.0544 11.3183 14.1936 12 15.5 12C17.433 12 19 10.5076 19 8.66667C19 7.00322 17.7206 5.62436 16.0479 5.37393M15.6904 7.55556C15.9423 7.05041 16.0833 6.48533 16.0833 5.88889C16.0833 5.71431 16.0713 5.54242 16.0479 5.37393" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default IceCream02Icon;
