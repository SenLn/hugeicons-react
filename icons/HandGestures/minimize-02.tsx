import * as React from "react";
import type { SVGProps } from "react";

interface Minimize02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Minimize02Icon = (props: Minimize02IconProps) => {
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
        <path d="M7.87124 12.6711L10.0051 14.5001L12.6698 4.28528C12.8673 3.52824 13.5511 3 14.3334 3C15.4424 3 16.2613 4.03438 16.0068 5.11376L14.8058 10.208L16.493 10.4777C18.4216 10.767 19.386 10.9116 20.0652 11.3186C21.1872 11.9907 22 13.0001 22 14.4737C22 15.5001 21.7463 16.1887 21.1296 18.0388C20.7383 19.2128 20.5426 19.7998 20.2236 20.2644C19.6983 21.0294 18.9233 21.5879 18.0315 21.8444C17.4898 22.0001 16.8711 22.0001 15.6336 22.0001H14.5847C12.9395 22.0001 12.1169 22.0001 11.3846 21.6982C11.2533 21.6441 11.1249 21.583 11.0001 21.5152C10.304 21.1372 9.78533 20.4988 8.74791 19.222L5.38941 15.0884C4.87331 14.4533 4.86987 13.5442 5.38114 12.9051C5.99565 12.137 7.12437 12.0309 7.87124 12.6711Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.95596 2.49064C6.95596 2.49064 6.70432 4.76405 6.95596 5.01188M6.95596 5.01188C7.28241 5.33331 9.55781 5.06274 9.55781 5.06274M6.95596 5.01188L10 2M5.04404 9.50936C5.04404 9.50936 5.29568 7.23595 5.04404 6.98812M5.04404 6.98812C4.71759 6.66669 2.44219 6.93726 2.44219 6.93726M5.04404 6.98812L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Minimize02Icon;
