import * as React from "react";
import type { SVGProps } from "react";

interface AmpouleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AmpouleIcon = (props: AmpouleIconProps) => {
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
        <path d="M5.44572 2.99906C5.12985 5.87904 3.57993 7.06862 4.93752 9.6052C5.02451 9.76774 5.06801 9.84901 5.08406 9.88583C5.26967 10.3116 5.19094 10.6954 4.8527 11.0137C4.82345 11.0412 4.77395 11.0808 4.67498 11.16C4.50514 11.2959 4.42021 11.3638 4.34268 11.4327C3.54255 12.1439 3.06086 13.1461 3.00538 14.2152C3 14.3188 3 14.4275 3 14.645V18.5C3 19.9045 3 20.6067 3.33706 21.1111C3.48298 21.3295 3.67048 21.517 3.88886 21.6629C4.39331 22 5.09554 22 6.5 22C7.90446 22 8.60669 22 9.11114 21.6629C9.32952 21.517 9.51702 21.3295 9.66294 21.1111C10 20.6067 10 19.9045 10 18.5V14.645C10 14.4275 10 14.3188 9.99462 14.2152C9.93913 13.1461 9.45745 12.1439 8.65732 11.4327C8.57978 11.3638 8.49486 11.2959 8.32502 11.16C8.22604 11.0808 8.17655 11.0412 8.1473 11.0137C7.80905 10.6954 7.73032 10.3116 7.91593 9.88584C7.93198 9.84902 7.97548 9.76774 8.06248 9.60519C9.42003 7.06859 7.86981 5.87902 7.55369 2.99897C7.49343 2.44999 7.05198 2 6.49971 2C5.9474 2 5.50594 2.45004 5.44572 2.99906Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.4457 2.99906C16.1298 5.87904 14.5799 7.06862 15.9375 9.6052C16.0245 9.76774 16.068 9.84901 16.0841 9.88583C16.2697 10.3116 16.1909 10.6954 15.8527 11.0137C15.8234 11.0412 15.774 11.0808 15.675 11.16C15.5051 11.2959 15.4202 11.3638 15.3427 11.4327C14.5425 12.1439 14.0609 13.1461 14.0054 14.2152C14 14.3188 14 14.4275 14 14.645V18.5C14 19.9045 14 20.6067 14.3371 21.1111C14.483 21.3295 14.6705 21.517 14.8889 21.6629C15.3933 22 16.0955 22 17.5 22C18.9045 22 19.6067 22 20.1111 21.6629C20.3295 21.517 20.517 21.3295 20.6629 21.1111C21 20.6067 21 19.9045 21 18.5V14.645C21 14.4275 21 14.3188 20.9946 14.2152C20.9391 13.1461 20.4574 12.1439 19.6573 11.4327C19.5798 11.3638 19.4949 11.2959 19.325 11.16C19.226 11.0808 19.1765 11.0412 19.1473 11.0137C18.8091 10.6954 18.7303 10.3116 18.9159 9.88584C18.932 9.84902 18.9755 9.76774 19.0625 9.60519C20.42 7.06859 18.8698 5.87902 18.5537 2.99897C18.4934 2.44999 18.052 2 17.4997 2C16.9474 2 16.5059 2.45004 16.4457 2.99906Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AmpouleIcon;
