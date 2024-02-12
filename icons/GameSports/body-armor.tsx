import * as React from "react";
import type { SVGProps } from "react";

interface BodyArmorIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BodyArmorIcon = (props: BodyArmorIconProps) => {
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
        <path d="M13.5042 2.63763L13.2523 2.84528C12.6518 3.34018 12.3516 3.58763 12 3.58763C11.6484 3.58763 11.3482 3.34018 10.7477 2.84528L10.4958 2.63763C10.0093 2.23667 9.76608 2.03618 9.4745 2.00436C9.18293 1.97253 8.90431 2.11606 8.34708 2.40311L8.04374 2.55937C7.76658 2.70214 7.62799 2.77353 7.55282 2.91883C7.47764 3.06412 7.49496 3.20316 7.52961 3.48123C7.80639 5.70292 9.49137 7.79731 11.6105 8.4264C11.7758 8.47547 11.8585 8.5 12 8.5C12.1415 8.5 12.2242 8.47547 12.3895 8.4264C14.5086 7.79731 16.1936 5.70292 16.4704 3.48123C16.505 3.20316 16.5224 3.06412 16.4472 2.91883C16.372 2.77353 16.2334 2.70214 15.9563 2.55937L15.6529 2.40311C15.0957 2.11606 14.8171 1.97253 14.5255 2.00436C14.2339 2.03618 13.9907 2.23667 13.5042 2.63763Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.47845 4C5.39181 4.40673 3.99587 5.15004 2.71906 6.22994C2.34598 6.54548 2.15944 6.70325 2.07149 6.95405C1.78191 7.77982 2.41507 10.6215 3.1969 10.9489C3.68378 11.1528 4.36534 10.7348 5.72847 9.89886C6.96545 9.14023 8.48273 8.35455 10 7.93205" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5215 4C18.6082 4.40673 20.0041 5.15004 21.2809 6.22994C21.654 6.54548 21.8406 6.70325 21.9285 6.95405C22.2181 7.77982 21.5849 10.6215 20.8031 10.9489C20.3162 11.1528 19.6347 10.7348 18.2715 9.89886C17.0345 9.14023 15.5173 8.35455 14 7.93205" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 10L17.3954 15.4417C17.2073 17.1343 17.1133 17.9805 16.5438 18.4903C15.9742 19 15.1228 19 13.4198 19H10.5802C8.87723 19 8.02576 19 7.45624 18.4903C6.88672 17.9805 6.79269 17.1343 6.60464 15.4417L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3851 19H8.61489C8.36045 19 8.23323 19 8.11238 19.0141C7.67638 19.065 7.26868 19.2517 6.94957 19.5465C6.86112 19.6282 6.77968 19.7238 6.61679 19.9149C6.29629 20.2908 6.13605 20.4788 6.07619 20.6222C5.85054 21.1628 6.14463 21.7765 6.7139 21.9532C6.8649 22 7.11522 22 7.61584 22H16.3842C16.8848 22 17.1351 22 17.2861 21.9532C17.8554 21.7765 18.1495 21.1628 17.9238 20.6222C17.864 20.4788 17.7037 20.2908 17.3832 19.9149C17.2203 19.7238 17.1389 19.6282 17.0504 19.5465C16.7313 19.2517 16.3236 19.065 15.8876 19.0141C15.7668 19 15.6396 19 15.3851 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BodyArmorIcon;
