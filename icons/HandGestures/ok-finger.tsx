import * as React from "react";
import type { SVGProps } from "react";

interface OkFingerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OkFingerIcon = (props: OkFingerIconProps) => {
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
        <path d="M6.375 22V20.7166C6.375 19.6817 6.1378 18.6609 5.68218 17.7352L5.39077 17.1432C4.80497 15.953 4.5 14.6406 4.5 13.3099V8.19048C4.5 7.4015 5.1296 6.76191 5.90625 6.76191C6.6829 6.76191 7.3125 7.4015 7.3125 8.19048M14.8125 22C14.8125 21.5674 14.8117 21.1365 14.8125 20.7212C14.8146 19.5775 16.0083 18.9963 16.9844 18.4266C18.0998 17.7757 18.9943 16.7254 19.4068 15.4608C19.678 14.6293 18.9266 13.9057 18.0293 13.9057C17.132 13.9057 16.3696 14.6903 15.7189 15.291C15.617 15.3851 15.5203 15.4586 15.4424 15.5084C14.1737 16.317 12.4807 15.3439 12.4807 13.9057C12.4807 12.4676 14.1737 11.4945 15.4424 12.3031C15.7584 12.469 16.019 12.6894 16.2273 12.9183C16.6998 13.4375 17.3234 13.9057 18.0364 13.9057C18.9501 13.9057 19.716 13.1694 19.4445 12.3212C18.7666 10.2034 16.766 8.66863 14.4034 8.66863C13.4062 8.66863 12.9375 8.95085 12.9375 8.95085L15.0823 3.94719C15.4571 3.01828 14.7846 2 13.7964 2C13.27 2 12.7888 2.30213 12.5534 2.78042L10.125 7.71429M10.125 7.71429L9.67741 8.62368M10.125 7.71429V4.38095C10.125 3.59197 9.4954 2.95238 8.71875 2.95238C7.9421 2.95238 7.3125 3.59197 7.3125 4.38095V8.19048M7.3125 8.19048V11.5238" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default OkFingerIcon;
