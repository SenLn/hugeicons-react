import * as React from "react";
import type { SVGProps } from "react";

interface BowlingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BowlingIcon = (props: BowlingIconProps) => {
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
        <path d="M10.5638 6.56062L10.1822 4.45142C9.95278 3.18322 10.8302 2 12 2C13.1698 2 14.0472 3.18322 13.8178 4.45142L13.4362 6.56062C12.8624 9.73293 14.4246 11.6357 15.5111 14.2704C15.9844 15.4182 16.1184 16.7017 15.8941 17.9385C15.702 18.998 15.3996 20.6686 14.7603 21.4829C14.3324 22.0281 13.7247 21.9997 13.1202 21.9997H10.8798C10.2753 21.9997 9.66764 22.0281 9.2397 21.4829C8.60041 20.6686 8.29796 18.998 8.10586 17.9385C7.88161 16.7017 8.01565 15.4182 8.48894 14.2704C9.57541 11.6357 11.1376 9.73293 10.5638 6.56062Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 19.9998H19.2945C19.8625 19.9998 20.4333 20.0225 20.8354 19.5863C21.4354 18.9354 21.7196 17.6008 21.9001 16.7531L21.9005 16.7508C22.1112 15.7614 21.9853 14.7346 21.5407 13.8164C20.52 11.7085 19.0523 10.1863 19.5914 7.64849L19.9499 5.96114C20.1654 4.94657 19.3412 4 18.2422 4C17.1432 4 16.3189 4.94657 16.5344 5.96114L16.8929 7.64849C17.0992 8.6198 17.0116 9.44233 16.7676 10.2059M16.9677 9.33333H19.5176" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 19.9998H4.70545C4.13752 19.9998 3.56668 20.0225 3.16465 19.5863C2.56461 18.9354 2.28044 17.6008 2.09994 16.7531L2.09945 16.7508C1.88877 15.7614 2.0147 14.7346 2.45934 13.8164C3.48003 11.7085 4.94769 10.1863 4.40855 7.64849L4.05009 5.96114C3.83456 4.94657 4.65883 4 5.75784 4C6.85685 4 7.68112 4.94657 7.46559 5.96114L7.10713 7.64849C6.90078 8.6198 6.98839 9.44233 7.2324 10.2059M7.03228 9.33333H4.48242" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BowlingIcon;
