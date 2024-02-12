import * as React from "react";
import type { SVGProps } from "react";

interface Ticket02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Ticket02Icon = (props: Ticket02IconProps) => {
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
        <path d="M19.7085 7.65038C19.8657 7.49323 20.1365 7.47721 20.2957 7.65093C21.2284 8.66824 21.7446 9.42151 21.9146 10.2557C22.0124 10.7357 22.0263 11.2242 21.9557 11.6994C21.7649 12.9836 20.7244 14.0241 18.6434 16.1051L16.1051 18.6434C14.0241 20.7244 12.9836 21.7649 11.6994 21.9557C11.2242 22.0263 10.7357 22.0124 10.2557 21.9146C9.4216 21.7446 8.66841 21.2285 7.65127 20.296C7.47734 20.1366 7.49342 19.8655 7.65074 19.7082C8.52693 18.832 8.48529 17.3698 7.55776 16.4422C6.63022 15.5147 5.16802 15.4731 4.29183 16.3493C4.13451 16.5066 3.86341 16.5227 3.70395 16.3487C2.77146 15.3316 2.25536 14.5784 2.08539 13.7443C1.98759 13.2643 1.97368 12.7758 2.04429 12.3006C2.23513 11.0164 3.27561 9.97588 5.35657 7.89492L7.89492 5.35657C9.97588 3.27561 11.0164 2.23513 12.3006 2.04428C12.7758 1.97368 13.2643 1.98759 13.7443 2.08539C14.5785 2.25538 15.3318 2.77157 16.3491 3.70427C16.5228 3.86355 16.5068 4.13432 16.3496 4.29147C15.4734 5.16765 15.5151 6.62985 16.4426 7.55739C17.3701 8.48493 18.8324 8.52656 19.7085 7.65038Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M19 15L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Ticket02Icon;
