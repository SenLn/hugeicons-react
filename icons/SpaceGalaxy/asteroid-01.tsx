import * as React from "react";
import type { SVGProps } from "react";

interface Asteroid01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Asteroid01Icon = (props: Asteroid01IconProps) => {
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
        <path d="M2.17739 12.9793L3.49456 8.58065C3.81646 7.50568 4.55249 6.61291 5.5315 6.10993L7.12731 5.29006C8.37528 4.6489 9.89325 5.10311 10.6111 6.33247L12.1043 8.88966C12.4728 9.52075 12.6571 9.8363 12.8935 9.99873C13.2261 10.2272 13.6436 10.2803 14.0199 10.142C14.2875 10.0437 14.5404 9.78383 15.0463 9.264C16.2378 8.03972 18.2215 8.24155 19.1562 9.68215L20.3273 11.4872C20.9791 12.4918 21.1687 13.7398 20.8459 14.9007L20.5037 16.1314C20.1952 17.2407 19.4479 18.1659 18.4437 18.6818L12.8309 21.5655C11.504 22.2472 9.91895 22.1195 8.71171 21.2334L3.67752 17.5386C2.27465 16.5089 1.67039 14.6724 2.17739 12.9793Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.9998 14H16.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 15.5L9.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 10.753C8.05719 10.1652 7.58579 9.87123 7.14645 10.0538C6.70711 10.2365 6.4714 10.8243 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.9559 2H18.2338C17.9628 2 17.8273 2 17.7012 2.01974C17.4003 2.06683 17.1242 2.19626 16.9126 2.38941C16.8239 2.47039 16.7487 2.56914 16.5984 2.76663C16.2751 3.19139 16.1134 3.40378 16.0517 3.60076C15.9024 4.07694 16.0828 4.58571 16.5138 4.90401C16.6921 5.03568 16.9627 5.13048 17.5038 5.32008L18.5185 5.67557C19.1652 5.90215 19.4886 6.01543 19.8119 5.99831C19.9487 5.99106 20.0837 5.96679 20.2128 5.92623C20.5177 5.83042 20.7639 5.61473 21.2564 5.18334L21.4013 5.05647C21.5737 4.90543 21.66 4.82991 21.7287 4.74608C21.8585 4.58767 21.9449 4.40513 21.9809 4.21269C22 4.11085 22 4.00405 22 3.79044C22 3.30232 22 3.05826 21.9242 2.86139C21.7799 2.48681 21.4442 2.19275 21.0166 2.06641C20.7918 2 20.5131 2 19.9559 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Asteroid01Icon;
