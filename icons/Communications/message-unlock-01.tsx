import * as React from "react";
import type { SVGProps } from "react";

interface MessageUnlock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MessageUnlock01Icon = (props: MessageUnlock01IconProps) => {
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
        <path d="M22 13.4909C21.7253 17.7332 18.3866 21.1125 14.1951 21.3905C12.7652 21.4854 11.2722 21.4852 9.84518 21.3905C9.35376 21.3579 8.81812 21.2409 8.3568 21.0513C7.84352 20.8403 7.58684 20.7348 7.45641 20.7508C7.32598 20.7668 7.13674 20.9061 6.75825 21.1846C6.09091 21.6757 5.25021 22.0285 4.00346 21.9982C3.37302 21.9829 3.0578 21.9752 2.91669 21.7351C2.77557 21.495 2.95132 21.1626 3.30283 20.4978C3.79035 19.5758 4.09923 18.5203 3.63119 17.6746C2.82509 16.4666 2.14038 15.036 2.04032 13.4909C1.98656 12.6607 1.98656 11.8009 2.04032 10.9707C2.31504 6.72838 5.65374 3.34913 9.84518 3.07107C10.7223 3.01289 11.6242 2.99039 12.5212 3.00372" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5312 5.35997V3.95232C16.5312 2.87408 17.4127 2 18.5 2C18.9887 2 19.4359 2.1766 19.7801 2.46895M17.8437 11H19.1563C20.1777 11 20.6884 11 21.0749 10.7951C21.3802 10.6333 21.6302 10.3854 21.7934 10.0827C22 9.6993 22 9.19286 22 8.17998C22 7.16711 22 6.66067 21.7934 6.2773C21.6302 5.9746 21.3802 5.72668 21.0749 5.56488C20.6884 5.35997 20.1777 5.35997 19.1563 5.35997H17.8437C16.8223 5.35997 16.3116 5.35997 15.9251 5.56488C15.6198 5.72668 15.3698 5.9746 15.2066 6.2773C15 6.66067 15 7.16711 15 8.17998C15 9.19286 15 9.6993 15.2066 10.0827C15.3698 10.3854 15.6198 10.6333 15.9251 10.7951C16.3116 11 16.8223 11 17.8437 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 15H15.5M8.5 10H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MessageUnlock01Icon;
