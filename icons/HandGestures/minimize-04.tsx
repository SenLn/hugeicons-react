import * as React from "react";
import type { SVGProps } from "react";

interface Minimize04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Minimize04Icon = (props: Minimize04IconProps) => {
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
        <path d="M14.1055 10.3328L14.9082 5.66803C15.0412 4.89514 14.5376 4.15811 13.7834 4.02183C13.0291 3.88554 12.3098 4.40162 12.1768 5.17451L10.5714 14.5041L10.4383 15.2272L8.64114 13.3193C7.98911 12.6437 6.91507 12.7053 6.33903 13.4514C5.89826 14.0223 5.88609 14.8298 6.30943 15.4147L9.06457 19.2211C9.68984 20.0849 10.0025 20.5169 10.3787 20.8526C10.9527 21.3647 11.6405 21.7211 12.3803 21.8896C12.8652 22 13.3863 22 14.4284 22H16.2456C18.6371 22 20.6938 20.3065 21.1527 17.9595L21.8984 14.1458L21.9787 13.6793C22.1117 12.9064 21.6081 12.1694 20.8538 12.0331C20.0995 11.8968 19.3803 12.4129 19.2473 13.1858L19.167 13.6523M14.1055 10.3328L13.8647 11.7323M14.1055 10.3328C14.2385 9.55994 14.9578 9.04387 15.7121 9.18015C16.4663 9.31643 16.97 10.0535 16.837 10.8264L16.6764 11.7593M16.6764 11.7593L16.5961 12.2258M16.6764 11.7593C16.8094 10.9864 17.5287 10.4703 18.2829 10.6066C19.0372 10.7429 19.5408 11.4799 19.4078 12.2528L19.3276 12.7193" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.95596 2.49064C6.95596 2.49064 6.70432 4.76405 6.95596 5.01188M6.95596 5.01188C7.28241 5.33331 9.55781 5.06274 9.55781 5.06274M6.95596 5.01188L10 2M5.04404 9.50936C5.04404 9.50936 5.29568 7.23595 5.04404 6.98812M5.04404 6.98812C4.71759 6.66669 2.44219 6.93726 2.44219 6.93726M5.04404 6.98812L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Minimize04Icon;
