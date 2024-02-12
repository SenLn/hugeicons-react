import * as React from "react";
import type { SVGProps } from "react";

interface FrenchFries02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FrenchFries02Icon = (props: FrenchFries02IconProps) => {
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
        <path d="M5.22916 18.3537L3.04243 10.7169C3.02143 10.6435 3.01093 10.6069 3.00625 10.5776C2.96146 10.2975 3.16243 10.037 3.44903 10.0035C3.47897 10 3.51776 10 3.59533 10H4.83937C6.66735 10 8.27385 11.1903 8.77604 12.9167C8.87648 13.2619 9.19778 13.5 9.56337 13.5H14.4366C14.8022 13.5 15.1235 13.2619 15.224 12.9167C15.7261 11.1903 17.3327 10 19.1606 10H20.4047C20.4822 10 20.521 10 20.551 10.0035C20.8376 10.037 21.0385 10.2975 20.9938 10.5776C20.9891 10.6069 20.9786 10.6436 20.9576 10.7169L18.7708 18.3537C18.2685 20.1083 18.0173 20.9855 17.3356 21.4928C16.6539 22 15.7261 22 13.8705 22H10.1295C8.27393 22 7.34614 22 6.66444 21.4928C5.98274 20.9855 5.73155 20.1083 5.22916 18.3537Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.0078 17L11.9988 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 13V3.76C14 2.93033 14 2.51549 13.7322 2.25775C13.4644 2 13.0334 2 12.1714 2H11.8286C10.9666 2 10.5356 2 10.2678 2.25775C10 2.51549 10 2.93033 10 3.76V13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8.13432L8.2009 4.46964C7.76982 3.59155 7.55428 3.1525 7.15805 3.03078C6.76182 2.90905 6.34976 3.15529 5.52564 3.64776L5.30495 3.77964C4.52007 4.24866 4.12763 4.48318 4.02457 4.88126C3.92152 5.27934 4.14809 5.68553 4.60125 6.4979L6.55475 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 9.83468L15.9391 6.32235C16.3782 5.527 16.5977 5.12933 16.9704 5.0249C17.3431 4.92047 17.7233 5.15007 18.4838 5.60926L18.6813 5.72847C19.4868 6.21484 19.8896 6.45803 19.9816 6.86849C20.0736 7.27895 19.8162 7.68401 19.3013 8.49411L18.3441 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FrenchFries02Icon;
