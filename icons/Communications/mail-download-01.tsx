import * as React from "react";
import type { SVGProps } from "react";

interface MailDownload01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailDownload01Icon = (props: MailDownload01IconProps) => {
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
        <path d="M22 11C22 10.5086 21.9947 10.0172 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C10.5713 19.5004 12.0328 19.5094 13.5 19.4902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 19C17.4915 19.5057 18.7998 21.5 19.5 21.5M22 19C21.5085 19.5057 20.2002 21.5 19.5 21.5M19.5 21.5V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailDownload01Icon;
