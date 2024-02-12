import * as React from "react";
import type { SVGProps } from "react";

interface SmartphoneLostWifiIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SmartphoneLostWifiIcon = (props: SmartphoneLostWifiIconProps) => {
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
        <path d="M8 6C6.37274 6.02975 5.43781 6.1682 4.80546 6.81237C4 7.63289 4 8.9535 4 11.5947V16.3971C4 19.0384 4 20.359 4.80546 21.1795C5.61091 22 6.90728 22 9.5 22C12.0927 22 13.3891 22 14.1945 21.1795C15 20.359 15 19.0384 15 16.3971V13.4958" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 19H9.50898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.4733 3.2654C20.7946 3.5268 20.8432 3.99919 20.5818 4.3205C20.3204 4.64182 19.848 4.69039 19.5267 4.42899L20.4733 3.2654ZM10.4744 4.43916C10.1536 4.70117 9.68111 4.65349 9.41911 4.33267C9.1571 4.01185 9.20477 3.53938 9.52559 3.27737L10.4744 4.43916ZM12.679 7.6364C12.3275 7.85558 11.8649 7.74833 11.6458 7.39685C11.4266 7.04537 11.5338 6.58277 11.8853 6.3636L12.679 7.6364ZM14.5509 2.76548C14.1377 2.79361 13.7799 2.48141 13.7517 2.06815C13.7236 1.6549 14.0358 1.29708 14.4491 1.26894L14.5509 2.76548ZM11.2701 2.14359C11.6407 1.95844 12.0911 2.10873 12.2763 2.47926C12.4614 2.84979 12.3111 3.30026 11.9406 3.4854L11.2701 2.14359ZM15.0068 1.25C17.0406 1.25 18.9193 2.00117 20.4733 3.2654L19.5267 4.42899C18.2086 3.35669 16.6572 2.75 15.0068 2.75V1.25ZM11.8853 6.3636C12.8149 5.7839 13.8765 5.45085 15.0068 5.45085V6.95085C14.1788 6.95085 13.3897 7.19327 12.679 7.6364L11.8853 6.3636ZM14.4491 1.26894C14.6338 1.25637 14.8197 1.25 15.0068 1.25V2.75C14.8538 2.75 14.7018 2.75521 14.5509 2.76548L14.4491 1.26894ZM9.52559 3.27737C10.0692 2.83339 10.6529 2.45199 11.2701 2.14359L11.9406 3.4854C11.4276 3.74176 10.9366 4.06166 10.4744 4.43916L9.52559 3.27737Z" fill="currentColor" />
        <path d="M11 2L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 10H15.0064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SmartphoneLostWifiIcon;
