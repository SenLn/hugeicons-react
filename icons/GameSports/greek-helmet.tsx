import * as React from "react";
import type { SVGProps } from "react";

interface GreekHelmetIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GreekHelmetIcon = (props: GreekHelmetIconProps) => {
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
        <path d="M9 14C7 14 5.83322 17.6296 5.99988 19C4.14859 17.1983 3 14.6877 3 11.9108C3 6.76287 6.94721 2.53019 12.001 2.03275C12.4478 1.98877 12.6712 1.96677 12.8354 2.11575C13.3348 2.56889 12.9996 4.36144 12.9996 4.96193C13.7789 4.30632 15.0114 2.72457 16.0759 2.57041C16.358 2.52957 16.58 2.62656 17.0239 2.82052C18.6063 3.51193 19.974 4.59861 21 5.95462C21 5.95462 17.5 6.48813 16.9994 8.9327" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20.1566 12.658C19.789 9.67865 17.7759 8 14.4972 8C9.90074 8 7.84028 13.0457 9.7103 17.0916C9.96239 17.6371 9.73364 18.3581 9.5865 18.907C9.10408 20.7065 8.86287 21.6063 9.08073 21.8176C9.2986 22.0289 10.0823 21.7996 11.6497 21.3409C13.0596 20.9284 15.0623 19.8633 16.5629 20.0289C17.493 20.1316 20.0349 22.4885 20.8339 21.9082C21.1025 21.7132 21.0072 21.2394 20.8167 20.2919L20.385 18.1442C20.2456 17.4512 20.0588 17.3686 19.3707 17.225C18.1757 16.9757 17.2936 16.2442 16.8599 15.7039C16.6029 15.3838 16.6536 15.1174 16.9265 14.8268C17.6835 14.0208 18.4639 13.7839 19.1785 13.716C19.9976 13.6382 20.2609 13.5026 20.1566 12.658Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default GreekHelmetIcon;
