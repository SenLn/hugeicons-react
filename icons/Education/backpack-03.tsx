import * as React from "react";
import type { SVGProps } from "react";

interface Backpack03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Backpack03Icon = (props: Backpack03IconProps) => {
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
        <path d="M5 7.66667C5 7.04669 5 6.73669 5.06815 6.48236C5.25308 5.79218 5.79218 5.25308 6.48236 5.06815C6.73669 5 7.04669 5 7.66667 5H16.3333C16.9533 5 17.2633 5 17.5176 5.06815C18.2078 5.25308 18.7469 5.79218 18.9319 6.48236C19 6.73669 19 7.04669 19 7.66667C19 8.90663 19 9.52661 18.8637 10.0353C18.4938 11.4156 17.4156 12.4938 16.0353 12.8637C15.5266 13 14.9066 13 13.6667 13H10.3333C9.09337 13 8.47339 13 7.96472 12.8637C6.58436 12.4938 5.50617 11.4156 5.1363 10.0353C5 9.52661 5 8.90663 5 7.66667Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 11C18.3716 11.5839 18.5574 11.8759 18.689 12.1897C18.8062 12.4694 18.8913 12.7615 18.9425 13.0604C19 13.3959 19 13.7419 19 14.4341V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V14.4341C5 13.7419 5 13.3959 5.0575 13.0604C5.10874 12.7615 5.1938 12.4694 5.31105 12.1897C5.44263 11.8759 5.62842 11.5839 6 11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20C4.32352 20 3.98528 20 3.70219 19.922C3.08287 19.7512 2.58068 19.3162 2.34157 18.7433C2.23227 18.4815 2.19862 18.1593 2.1313 17.515L2.06691 16.8986C1.98995 16.1619 1.95147 15.7936 2.1089 15.5209C2.46075 14.9115 3.25125 15.0052 3.85704 15.0052H5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 20C19.6765 20 20.0147 20 20.2978 19.9219C20.9171 19.751 21.4193 19.3155 21.6584 18.742C21.7677 18.4799 21.8014 18.1574 21.8687 17.5124L21.9331 16.8954C21.9955 16.2975 22.1529 15.5626 21.5709 15.1773C21.3031 15 20.9164 15 20.143 15H19" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14.5L9 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 14.5L15 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Backpack03Icon;
