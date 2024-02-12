import * as React from "react";
import type { SVGProps } from "react";

interface BluetoothSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BluetoothSquareIcon = (props: BluetoothSquareIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.5953 12V8.61228C11.5953 7.66908 11.5953 7.19748 11.8894 7.0428C12.1835 6.88812 12.559 7.16224 13.31 7.71046L14.1553 8.32755C14.7184 8.73866 15 8.94421 15 9.22937C15 9.51453 14.7184 9.72009 14.1553 10.1312L11.5953 12ZM11.5953 12V15.3877C11.5953 16.3309 11.5953 16.8025 11.8894 16.9572C12.1835 17.1119 12.559 16.8378 13.31 16.2895L14.1553 15.6725C14.7184 15.2613 15 15.0558 15 14.7706C15 14.4855 14.7184 14.2799 14.1553 13.8688L11.5953 12ZM11.5953 12L9 9.77778M11.5953 12L9 14.2222" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BluetoothSquareIcon;
