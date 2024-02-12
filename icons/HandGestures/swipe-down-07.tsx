import * as React from "react";
import type { SVGProps } from "react";

interface SwipeDown07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeDown07Icon = (props: SwipeDown07IconProps) => {
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
        <path d="M18.5 12V14.6667C18.5 16.84 18.5 17.9267 18.1689 18.7918C17.6627 20.1148 16.6207 21.1601 15.3019 21.6679C14.4395 22 13.3562 22 11.1896 22C10.0534 22 9.4853 22 8.95658 21.8834C8.14995 21.7056 7.40001 21.3294 6.77419 20.7888C6.36398 20.4344 6.02311 19.9785 5.34137 19.0667L2.33738 15.0487C1.8758 14.4314 1.88907 13.5789 2.36965 12.9763C2.99772 12.1888 4.16877 12.1237 4.8797 12.8369L6.5 14.4623V4.5C6.5 3.67157 7.17157 3 8 3C8.82843 3 9.5 3.67157 9.5 4.5V8M9.5 8H10.5C11.6046 8 12.5 8.89543 12.5 10M9.5 8V11M12.5 10V11M12.5 10V9H13.5C14.6046 9 15.5 9.89543 15.5 11M15.5 11V12M15.5 11V10L16.8288 10.2215C17.7932 10.3822 18.5 11.2166 18.5 12.1943V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 8L19.5 2M19.5 8C18.7998 8 17.4915 6.0057 17 5.5M19.5 8C20.2002 8 21.5085 6.0057 22 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeDown07Icon;
