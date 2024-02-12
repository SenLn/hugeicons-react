import * as React from "react";
import type { SVGProps } from "react";

interface TumblrIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TumblrIcon = (props: TumblrIconProps) => {
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
        <path d="M7.90012 11.0183H7.01078C6.17867 11.0183 5.99989 10.8498 6 10.0181L6.00024 8.26617C6.00033 7.61097 5.98766 7.61186 6.65257 7.29099C8.35896 6.46753 9.86003 4.88315 10.2616 2.99294C10.3706 2.48002 10.4251 2.22356 10.5643 2.11178C10.7035 2 10.9282 2 11.3775 2H12.7521C13.2286 2 13.4668 2 13.6148 2.14645C13.7629 2.29289 13.7629 2.5286 13.7629 3V6.56483C13.7629 7.39637 13.9416 7.56483 14.7736 7.56483H16.6332C17.4653 7.56483 17.6441 7.73332 17.644 8.56496L17.6438 10.0184C17.6437 10.8499 17.4649 11.0183 16.633 11.0183H14.7733C13.9412 11.0183 13.7624 11.1868 13.7625 12.0184L13.7629 16.2597C13.7629 18.0202 15.3229 18.6002 16.6945 17.9926C17.1718 17.7811 17.1788 17.7952 17.3247 18.2389L17.9001 19.9882C18.0893 20.5636 18.0369 20.7786 17.5063 21.0836C13.5744 23.3432 8.91128 21.3694 8.91128 15.768L8.91091 12.0182C8.91083 11.1867 8.73205 11.0183 7.90012 11.0183Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TumblrIcon;
