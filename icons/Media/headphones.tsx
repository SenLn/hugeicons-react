import * as React from "react";
import type { SVGProps } from "react";

interface HeadphonesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HeadphonesIcon = (props: HeadphonesIconProps) => {
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
        <path d="M17 14.3045C17 13.9588 17 13.786 17.052 13.632C17.2032 13.1844 17.6018 13.0108 18.0011 12.8289C18.45 12.6244 18.6744 12.5222 18.8968 12.5042C19.1493 12.4838 19.4022 12.5382 19.618 12.6593C19.9041 12.8198 20.1036 13.1249 20.3079 13.373C21.2513 14.5188 21.7229 15.0918 21.8955 15.7236C22.0348 16.2334 22.0348 16.7666 21.8955 17.2764C21.6438 18.1979 20.8485 18.9704 20.2598 19.6854C19.9587 20.0511 19.8081 20.234 19.618 20.3407C19.4022 20.4618 19.1493 20.5162 18.8968 20.4958C18.6744 20.4778 18.45 20.3756 18.0011 20.1711C17.6018 19.9892 17.2032 19.8156 17.052 19.368C17 19.214 17 19.0412 17 18.6955V14.3045Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 14.3046C7 13.8694 6.98778 13.4782 6.63591 13.1722C6.50793 13.0609 6.33825 12.9836 5.99891 12.829C5.55001 12.6246 5.32556 12.5224 5.10316 12.5044C4.43591 12.4504 4.07692 12.9058 3.69213 13.3732C2.74875 14.519 2.27706 15.0919 2.10446 15.7237C1.96518 16.2336 1.96518 16.7668 2.10446 17.2766C2.3562 18.1981 3.15152 18.9705 3.74021 19.6856C4.11129 20.1363 4.46577 20.5475 5.10316 20.496C5.32556 20.478 5.55001 20.3757 5.99891 20.1713C6.33825 20.0167 6.50793 19.9394 6.63591 19.8281C6.98778 19.5221 7 19.131 7 18.6957V14.3046Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 12.5V10.5C19 6.63401 15.866 3.5 12 3.5C8.13401 3.5 5 6.63401 5 10.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HeadphonesIcon;
