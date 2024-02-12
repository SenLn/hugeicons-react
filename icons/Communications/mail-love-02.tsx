import * as React from "react";
import type { SVGProps } from "react";

interface MailLove02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailLove02Icon = (props: MailLove02IconProps) => {
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
        <path d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 19.4959C11.0337 19.4898 9.56682 19.5077 9.09883 19.4959C5.95033 19.4166 4.37608 19.377 3.24496 18.2394C2.11383 17.1018 2.08114 15.5661 2.01577 12.4947C1.99475 11.5071 1.99474 10.5254 2.01576 9.53781C2.08114 6.46642 2.11382 4.93072 3.24495 3.79312C4.37608 2.65551 5.95033 2.61589 9.09882 2.53663C11.0393 2.48779 12.9607 2.48779 14.9012 2.53664C18.0497 2.6159 19.6239 2.65553 20.755 3.79313C21.8862 4.93073 21.9189 6.46643 21.9842 9.53783C21.9983 10.1973 22.0029 10.8542 21.9982 11.512" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.015 14.8866C16.0876 14.2469 17.0238 14.5047 17.5863 14.9153C17.8169 15.0837 17.9322 15.1679 18 15.1679C18.0678 15.1679 18.1831 15.0837 18.4137 14.9153C18.9762 14.5047 19.9124 14.2469 20.985 14.8866C22.3928 15.7261 22.7113 18.4958 19.4642 20.8324C18.8457 21.2775 18.5365 21.5 18 21.5C17.4635 21.5 17.1543 21.2775 16.5358 20.8324C13.2887 18.4958 13.6072 15.7261 15.015 14.8866Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MailLove02Icon;
