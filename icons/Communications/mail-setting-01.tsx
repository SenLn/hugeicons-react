import * as React from "react";
import type { SVGProps } from "react";

interface MailSetting01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailSetting01Icon = (props: MailSetting01IconProps) => {
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
        <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.0005 19.4892C11.0005 19.4892 10.0696 19.5136 9.09925 19.4892C5.95057 19.4099 4.37623 19.3703 3.24503 18.2332C2.11384 17.096 2.08115 15.5609 2.01577 12.4907C1.99474 11.5036 1.99474 10.5222 2.01577 9.53502C2.08114 6.46485 2.11383 4.92976 3.24503 3.7926C4.37623 2.65545 5.95057 2.61584 9.09925 2.53662C11.0399 2.48779 12.9614 2.48779 14.902 2.53662C18.0506 2.61585 19.625 2.65547 20.7562 3.79262C21.8874 4.92977 21.9201 6.46486 21.9854 9.53504C21.993 9.89243 21.9979 10.5116 22 11.0129" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 20.2143V21.5M18 20.2143C16.8432 20.2143 15.8241 19.6461 15.2263 18.7833M18 20.2143C19.1568 20.2143 20.1759 19.6461 20.7737 18.7833M18 13.7857C19.1569 13.7857 20.1761 14.354 20.7738 15.2169M18 13.7857C16.8431 13.7857 15.8239 14.354 15.2262 15.2169M18 13.7857V12.5M22 14.4286L20.7738 15.2169M14.0004 19.5714L15.2263 18.7833M14 14.4286L15.2262 15.2169M21.9996 19.5714L20.7737 18.7833M20.7738 15.2169C21.1273 15.7271 21.3333 16.3403 21.3333 17C21.3333 17.6597 21.1272 18.273 20.7737 18.7833M15.2262 15.2169C14.8727 15.7271 14.6667 16.3403 14.6667 17C14.6667 17.6597 14.8728 18.273 15.2263 18.7833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MailSetting01Icon;
