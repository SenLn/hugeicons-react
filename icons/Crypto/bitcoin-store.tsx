import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinStoreIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinStoreIcon = (props: BitcoinStoreIconProps) => {
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
        <path d="M6.26565 2H17.7343C18.3949 2.00003 19.4903 2.09768 19.8625 3.15228C20.084 3.78008 19.9965 4.48455 20.2378 5.105C20.4912 5.75665 20.8888 6.38647 21.2743 6.954C21.6564 7.51649 22.0964 8.12339 21.9814 8.79383C21.8516 9.54978 21.2457 10.2614 20.4449 10.6395C18.8055 11.4134 16.3808 10.9467 15.9953 8.14559C15.6715 9.04026 14.6798 10.9467 11.9606 10.9467C9.24145 10.9467 8.32846 9.04026 8.00472 8.14559C7.61921 10.9467 5.19448 11.4134 3.55511 10.6395C2.75431 10.2614 2.14841 9.54978 2.01864 8.79383C1.90356 8.12339 2.34357 7.51649 2.72568 6.954C3.11122 6.38647 3.50878 5.75665 3.76223 5.105C4.00354 4.48455 3.91599 3.78008 4.13753 3.15228C4.50968 2.09768 5.60507 2.00003 6.26565 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9628 20.6646V15.3227M18.5259 15.3227V13.9873M18.5259 22V20.6646M16.9628 17.9937H20.089M20.089 17.9937C20.607 17.9937 21.0268 18.4421 21.0268 18.9953V19.663C21.0268 20.2162 20.607 20.6646 20.089 20.6646H16.0249M20.089 17.9937C20.607 17.9937 21.0268 17.5452 21.0268 16.9921V16.3243C21.0268 15.7711 20.607 15.3227 20.089 15.3227H16.0249" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.02002 10.4814V14.9886C3.02002 17.8215 3.02002 19.2379 3.89903 20.118C4.77805 20.9981 6.1928 20.9981 9.02231 20.9981H13.0238" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BitcoinStoreIcon;
