import * as React from "react";
import type { SVGProps } from "react";

interface FortressIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FortressIcon = (props: FortressIconProps) => {
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
        <path d="M3.02218 20.9844V3.99916C3.02218 3.52819 3.02218 3.29271 3.16836 3.14638C3.31454 3.00007 3.54981 3.00005 4.02034 3.00003L4.70683 3C5.00629 2.99999 5.02158 3.01194 5.09421 3.30273L5.44209 4.69552C5.51472 4.98629 5.53001 4.99825 5.82946 4.99825H7.20237C7.50181 4.99825 7.51711 4.98629 7.58974 4.69552L7.93761 3.3028C8.01024 3.01203 8.02553 3.00008 8.32498 3.00008H9.01143C9.48199 3.00008 9.71728 3.00008 9.86346 3.1464C10.0096 3.29272 10.0096 3.52821 10.0096 3.99921V7.99573C10.0096 8.46672 10.0096 8.70223 10.1558 8.84854C10.302 8.99486 10.5373 8.99486 11.0079 8.99486H13.0043C13.4748 8.99486 13.7101 8.99486 13.8563 8.84854C14.0025 8.70223 14.0025 8.46672 14.0025 7.99573V3.99921C14.0025 3.52821 14.0025 3.29272 14.1486 3.1464C14.2949 3.00008 14.5301 3.00008 15.0007 3.00008H15.6872C15.9866 3.00008 16.0019 3.01203 16.0745 3.3028L16.4224 4.69552C16.495 4.9863 16.5103 4.99825 16.8097 4.99825H18.1827C18.4821 4.99825 18.4974 4.98629 18.57 4.69552L18.9179 3.30273C18.9905 3.01194 19.0058 2.99999 19.3053 3L19.9917 3.00003C20.4623 3.00005 20.6976 3.00007 20.8438 3.14638C20.9899 3.29271 20.9899 3.52819 20.9899 3.99916V20.9844M7.01502 8.99478H6.01681M12.5052 11.9922H11.507M17.9953 8.99478H16.9971M2 21H9.03398V17.6948C9.03398 16.8635 9.82619 15.0052 12.0022 15.0052C14.1781 15.0052 14.966 16.8635 14.966 17.6948V21H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FortressIcon;
