import * as React from "react";
import type { SVGProps } from "react";

interface Blockchain03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Blockchain03Icon = (props: Blockchain03IconProps) => {
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
        <path d="M12 19C12.2094 19 12.4041 18.9011 12.7934 18.7032L15.9228 17.1128C17.3076 16.4091 18 16.0572 18 15.5V8.5M12 19C11.7906 19 11.5959 18.9011 11.2066 18.7032L8.07717 17.1128C6.69239 16.4091 6 16.0572 6 15.5V8.5M12 19V12M18 8.5C18 7.94278 17.3076 7.59091 15.9228 6.88716L12.7934 5.29679C12.4041 5.09893 12.2094 5 12 5C11.7906 5 11.5959 5.09893 11.2066 5.29679L8.07717 6.88716C6.69239 7.59091 6 7.94278 6 8.5M18 8.5C18 9.05722 17.3076 9.40909 15.9228 10.1128L12.7934 11.7032C12.4041 11.9011 12.2094 12 12 12M6 8.5C6 9.05722 6.69239 9.40909 8.07717 10.1128L11.2066 11.7032C11.5959 11.9011 11.7906 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.1901 21.576L17.8842 19.3041C19.9614 18.2987 21 17.796 21 17V7C21 6.20397 19.9614 5.70129 17.8842 4.69594L13.1901 2.42399L13.1901 2.42398C12.6061 2.14133 12.3141 2 12 2C11.6859 2 11.3939 2.14133 10.8099 2.42399L6.11576 4.69594C4.03859 5.70129 3 6.20397 3 7V17C3 17.796 4.03858 18.2987 6.11572 19.304L6.11576 19.3041L10.8099 21.576C11.3939 21.8587 11.6859 22 12 22C12.3141 22 12.6061 21.8587 13.1901 21.576Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Blockchain03Icon;
