import * as React from "react";
import type { SVGProps } from "react";

interface MailBlock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailBlock01Icon = (props: MailBlock01IconProps) => {
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
        <path d="M21.9928 11.5C22.0047 10.6743 22.0019 10.8514 21.9842 10.0244C21.9189 6.95886 21.8862 5.42609 20.7551 4.29066C19.6239 3.15523 18.0497 3.11568 14.9012 3.03657C12.9607 2.98781 11.0393 2.98781 9.09882 3.03656C5.95033 3.11566 4.37608 3.15521 3.24495 4.29065C2.11382 5.42608 2.08114 6.95885 2.01576 10.0244C1.99474 11.0101 1.99475 11.9899 2.01577 12.9756C2.08114 16.0412 2.11383 17.5739 3.24496 18.7094C4.37608 19.8448 5.95033 19.8843 9.09883 19.9634C10.0691 19.9878 11.0345 20 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 5.5L8.91302 9.42462C11.4387 10.8585 12.5613 10.8585 15.087 9.42462L22 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.0505 15C15.4022 15.6353 15 16.5207 15 17.5C15 19.433 16.567 21 18.5 21C19.4793 21 20.3647 20.5978 21 19.9495M16.0505 15C16.6818 14.3814 17.5463 14 18.5 14C20.433 14 22 15.567 22 17.5C22 18.4537 21.6186 19.3182 21 19.9495M16.0505 15L21 19.9495" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MailBlock01Icon;
