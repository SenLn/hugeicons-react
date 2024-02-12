import * as React from "react";
import type { SVGProps } from "react";

interface HotdogIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HotdogIcon = (props: HotdogIconProps) => {
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
        <path d="M19 10.9804C19.536 10.396 20.5 9.59796 21.4626 8.34706C22.1108 7.50471 22.1638 6.31485 21.6693 5.3705C20.7595 3.63341 18.4754 3.50827 17.1607 4.93446C16.8434 5.27862 16.5144 5.61831 16.174 5.95276M6.93327 18.4243C6.20617 18.6439 5.48603 18.8247 4.77684 18.9669C3.79101 19.1646 2.82972 18.6203 2.33514 17.676C1.42537 15.9389 2.46911 13.6957 4.24688 13.1536C4.67588 13.0228 5.10725 12.8785 5.5402 12.7207" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0061 5.02107C16.8791 4.42183 16.3587 3.34206 15.272 3.12401C13.7471 2.81802 13.0927 3.01069 11.2628 4.54068C9.79897 5.76466 6.68825 7.16715 5.31587 7.7154C4.04314 8.22384 2.59563 9.56297 3.08016 11.1512C3.56777 12.7495 4.4739 12.7661 4.82836 12.9258" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.274 11.1588C20.3606 11.3768 20.881 12.4566 21.0081 13.0559C21.1688 14.2282 20.0867 15.3406 19.5256 15.7502C18.5987 16.4015 16.0008 18.2201 13.5049 19.5722C10.9418 20.9606 9.43744 21.0882 8.83032 20.9606C8.47585 20.8009 7.56973 20.7843 7.08211 19.186C6.59759 17.5978 8.04509 16.2586 9.31783 15.7502C10.6902 15.2019 13.8009 13.7995 15.2648 12.5755C17.0946 11.0455 17.7491 10.8528 19.274 11.1588Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.34375 11.7894C8.587 11.5046 8.77853 10.9416 8.92492 10.2989C9.04619 9.76658 9.73252 9.87816 10.3977 10.1293C10.6329 10.2181 10.9025 10.139 11.0351 9.92532L12.0956 8.21626C12.2045 8.04082 12.4099 7.95182 12.6057 8.01735C13.0927 8.18035 13.7215 8.45428 14.0735 8.27768" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HotdogIcon;
