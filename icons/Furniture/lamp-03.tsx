import * as React from "react";
import type { SVGProps } from "react";

interface Lamp03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Lamp03Icon = (props: Lamp03IconProps) => {
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
        <path d="M14.5936 10H9.40637C7.51043 10 6.56247 10 6.16052 9.45157C5.75858 8.90313 6.14759 8.14046 6.92562 6.61512L8.31723 3.88683C8.78446 2.97081 9.01808 2.5128 9.46755 2.2564C9.91703 2 10.4863 2 11.6249 2H12.3751C13.5137 2 14.083 2 14.5324 2.2564C14.9819 2.5128 15.2155 2.97081 15.6828 3.88683L17.0744 6.61512C17.8524 8.14046 18.2414 8.90313 17.8395 9.45157C17.4375 10 16.4896 10 14.5936 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22L9.36754 20.8974C9.64721 20.0584 9.78704 19.6389 10.094 19.3706C10.1647 19.3088 10.2409 19.2539 10.3218 19.2064C10.6734 19 11.1156 19 12 19C12.8844 19 13.3266 19 13.6782 19.2064C13.7591 19.2539 13.8353 19.3088 13.906 19.3706C14.213 19.6389 14.3528 20.0584 14.6325 20.8974L15 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Lamp03Icon;
