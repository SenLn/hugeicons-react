import * as React from "react";
import type { SVGProps } from "react";

interface Suit02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Suit02Icon = (props: Suit02IconProps) => {
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
        <path d="M5.79936 3.95894C4.76766 4.62402 2.89276 3.91806 2.12762 5.03597C1.89462 5.37639 2.00972 5.82611 2.23991 6.72555L4.22928 16.4988C4.67923 18.2569 4.9042 19.1359 5.60255 19.6491C5.88839 19.8592 6.18381 19.9575 6.5 20M5.79936 3.95894C7.18469 3.0659 5.99129 2 8 2L10.1552 3.69308C11.0135 4.3674 11.4427 4.70455 11.4751 5.18142C11.5074 5.65828 11.1281 6.05563 10.3694 6.85032L9.8153 7.4307C9.43596 7.82805 9.24628 8.02672 9.01865 8.00977C8.79102 7.99283 8.63008 7.76806 8.30819 7.31851L5.79936 3.95894ZM18.2006 3.95894C19.2323 4.62402 21.1072 3.91806 21.8724 5.03597C22.1054 5.37639 21.9903 5.82611 21.7601 6.72555L19.7707 16.4988C19.3208 18.2569 19.0958 19.1359 18.3975 19.6491C18.1116 19.8592 17.8162 19.9575 17.5 20M18.2006 3.95894C16.8153 3.0659 18.0087 2 16 2L13.8448 3.69308C12.9865 4.3674 12.5573 4.70455 12.5249 5.18142C12.4926 5.65828 12.8719 6.05563 13.6306 6.85032L14.1847 7.4307C14.564 7.82805 14.7537 8.02672 14.9813 8.00977C15.209 7.99283 15.3699 7.76806 15.6918 7.31851L18.2006 3.95894Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.2866 7L11.1572 8.45155C11.3619 8.79287 11.4643 8.96353 11.4946 9.15509C11.525 9.34665 11.4804 9.54059 11.3912 9.92847L9.54874 17.9411C9.30243 19.327 10.0342 20.0017 10.7448 20.8903C11.3365 21.6301 11.6324 22 12 22C12.3676 22 12.6635 21.6301 13.2552 20.8903C13.9658 20.0017 14.6976 19.327 14.4513 17.9411L12.6093 9.92842C12.5201 9.54056 12.4755 9.34663 12.5059 9.15509C12.5362 8.96355 12.6386 8.7929 12.8433 8.45161L13.714 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Suit02Icon;
