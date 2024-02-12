import * as React from "react";
import type { SVGProps } from "react";

interface MessageFavourite01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MessageFavourite01Icon = (props: MessageFavourite01IconProps) => {
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
        <path d="M8.5 15H15.5M8.5 10H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9598 10.9707C21.9711 11.146 21.98 11.3226 21.9866 11.4999C22.011 12.1626 22.0021 12.8359 21.9598 13.4908C21.6856 17.7332 18.3536 21.1124 14.1706 21.3905C12.7435 21.4853 11.2536 21.4851 9.8294 21.3905C9.33896 21.3579 8.8044 21.2408 8.34401 21.0512C7.83177 20.8403 7.5756 20.7347 7.44544 20.7508C7.31527 20.7668 7.1264 20.906 6.74868 21.1846C6.08268 21.6757 5.24367 22.0284 3.99943 21.9981C3.37026 21.9828 3.05568 21.9752 2.91484 21.735C2.77401 21.4949 2.94941 21.1625 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4665 2.1401 15.0359 2.04024 13.4908C1.98659 12.6606 1.98659 11.8009 2.04024 10.9707C2.31441 6.72832 5.64639 3.34908 9.8294 3.07102C10.3789 3.03449 10.4383 3.01203 11 3.00366" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.015 2.38661C16.0876 1.74692 17.0238 2.00471 17.5863 2.41534C17.8169 2.58371 17.9322 2.66789 18 2.66789C18.0678 2.66789 18.1831 2.58371 18.4137 2.41534C18.9762 2.00471 19.9124 1.74692 20.985 2.38661C22.3928 3.22614 22.7113 5.99577 19.4642 8.33241C18.8457 8.77747 18.5365 9 18 9C17.4635 9 17.1543 8.77747 16.5358 8.33241C13.2887 5.99577 13.6072 3.22614 15.015 2.38661Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MessageFavourite01Icon;
