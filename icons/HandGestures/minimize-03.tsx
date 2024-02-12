import * as React from "react";
import type { SVGProps } from "react";

interface Minimize03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Minimize03Icon = (props: Minimize03IconProps) => {
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
        <path d="M14.9281 7.78146L15.818 8.02144C16.8009 8.28651 17.3843 9.30336 17.1209 10.2926M17.1209 10.2926L16.8824 11.1882M17.1209 10.2926C17.2526 9.798 17.7577 9.50446 18.2492 9.63699C19.2321 9.90207 19.8155 10.9189 19.5521 11.9082M19.5521 11.9082L19.3136 12.8038M19.5521 11.9082C19.6769 11.4394 20.1901 11.1955 20.6291 11.3965L20.9202 11.5298C21.74 11.9052 22.1701 12.8221 21.937 13.6977L21.5855 15.0165C21.0673 16.963 20.8081 17.9362 20.3072 18.6316C20.0167 19.035 19.4132 19.4866 18.9425 19.8036C18.5353 20.0778 18.2232 20.4807 18.0964 20.957L17.8187 22M14.451 9.57264L16.0009 3.75113C16.1985 3.00918 15.761 2.24654 15.0238 2.04774C14.2866 1.84893 13.5288 2.28924 13.3313 3.03119L10.9556 11.9537L9.90131 10.1091C9.43871 9.29977 8.3811 9.07701 7.63441 9.63163C7.06306 10.056 6.84799 10.8163 7.11154 11.48L9.21843 16.4621C9.62153 17.4153 9.6312 18.7195 9.3648 19.7202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.95596 2.49064C6.95596 2.49064 6.70432 4.76405 6.95596 5.01188M6.95596 5.01188C7.28241 5.33331 9.55781 5.06274 9.55781 5.06274M6.95596 5.01188L10 2M5.04404 9.50936C5.04404 9.50936 5.29568 7.23595 5.04404 6.98812M5.04404 6.98812C4.71759 6.66669 2.44219 6.93726 2.44219 6.93726M5.04404 6.98812L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Minimize03Icon;
