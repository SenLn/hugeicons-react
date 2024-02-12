import * as React from "react";
import type { SVGProps } from "react";

interface Blockchain06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Blockchain06Icon = (props: Blockchain06IconProps) => {
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
        <path d="M5.5 10C5.62215 10 5.73571 9.94347 5.96282 9.83041L7.78832 8.92162C8.59611 8.51948 9 8.31841 9 8V4M5.5 10C5.37785 10 5.26429 9.94347 5.03718 9.83041L3.21168 8.92162C2.4039 8.51948 2 8.31841 2 8V4M5.5 10V6M9 4C9 3.68159 8.59611 3.48052 7.78832 3.07838L5.96282 2.16959C5.73571 2.05653 5.62215 2 5.5 2C5.37785 2 5.26429 2.05653 5.03718 2.16959L3.21168 3.07838C2.40389 3.48052 2 3.68159 2 4M9 4C9 4.31841 8.59611 4.51948 7.78832 4.92162L5.96282 5.83041C5.73571 5.94347 5.62215 6 5.5 6M2 4C2 4.31841 2.40389 4.51948 3.21168 4.92162L5.03718 5.83041C5.26429 5.94347 5.37785 6 5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18.5 10C18.6222 10 18.7357 9.94347 18.9628 9.83041L20.7883 8.92162C21.5961 8.51948 22 8.31841 22 8V4M18.5 10C18.3778 10 18.2643 9.94347 18.0372 9.83041L16.2117 8.92162C15.4039 8.51948 15 8.31841 15 8V4M18.5 10V6M22 4C22 3.68159 21.5961 3.48052 20.7883 3.07838L18.9628 2.16959C18.7357 2.05653 18.6222 2 18.5 2C18.3778 2 18.2643 2.05653 18.0372 2.16959L16.2117 3.07838C15.4039 3.48052 15 3.68159 15 4M22 4C22 4.31841 21.5961 4.51948 20.7883 4.92162L18.9628 5.83041C18.7357 5.94347 18.6222 6 18.5 6M15 4C15 4.31841 15.4039 4.51948 16.2117 4.92162L18.0372 5.83041C18.2643 5.94347 18.3778 6 18.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.5 6H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12V15.5C2 16.9045 2 17.6067 2.33706 18.1111C2.48298 18.3295 2.67048 18.517 2.88886 18.6629C3.39331 19 4.09554 19 5.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 12V15.5C22 16.9045 22 17.6067 21.6629 18.1111C21.517 18.3295 21.3295 18.517 21.1111 18.6629C20.6067 19 19.9045 19 18.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 22C12.1222 22 12.2357 21.9435 12.4628 21.8304L14.2883 20.9216C15.0961 20.5195 15.5 20.3184 15.5 20V16M12 22C11.8778 22 11.7643 21.9435 11.5372 21.8304L9.71168 20.9216C8.9039 20.5195 8.5 20.3184 8.5 20V16M12 22V18M15.5 16C15.5 15.6816 15.0961 15.4805 14.2883 15.0784L12.4628 14.1696C12.2357 14.0565 12.1222 14 12 14C11.8778 14 11.7643 14.0565 11.5372 14.1696L9.71168 15.0784C8.90389 15.4805 8.5 15.6816 8.5 16M15.5 16C15.5 16.3184 15.0961 16.5195 14.2883 16.9216L12.4628 17.8304C12.2357 17.9435 12.1222 18 12 18M8.5 16C8.5 16.3184 8.90389 16.5195 9.71168 16.9216L11.5372 17.8304C11.7643 17.9435 11.8778 18 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Blockchain06Icon;
