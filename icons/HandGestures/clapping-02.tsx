import * as React from "react";
import type { SVGProps } from "react";

interface Clapping02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Clapping02Icon = (props: Clapping02IconProps) => {
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
        <path d="M20.2946 16.5969L17.6443 19.3752C16.41 20.669 15.7928 21.316 15.1135 21.6339C14.0746 22.1201 12.8892 22.1221 11.8518 21.6393C11.1734 21.3236 10.5581 20.6787 9.32771 19.3889C8.68241 18.7124 8.35976 18.3742 8.12569 17.99C7.7686 17.4039 7.55631 16.7335 7.50792 16.0391C7.4762 15.5839 7.54154 15.1096 7.67222 14.1608L8.24806 9.98046C8.33654 9.33812 8.8282 8.83854 9.44338 8.76589C10.2474 8.67094 10.9494 9.32937 10.9481 10.1772L10.9452 12.1108L15.4678 7.36989C15.9383 6.8767 16.7011 6.8767 17.1716 7.36989C17.6421 7.86309 17.6421 8.66271 17.1716 9.1559M17.1716 9.1559L18.3075 7.96523C18.778 7.47204 19.5408 7.47204 20.0113 7.96523C20.4818 8.45842 20.4818 9.25804 20.0113 9.75123L18.8754 10.9419M17.1716 9.1559L14.6159 11.8349M18.8754 10.9419C19.3459 10.4487 20.1087 10.4487 20.5792 10.9419C21.0497 11.4351 21.0497 12.2347 20.5792 12.7279L19.4433 13.9186M18.8754 10.9419L16.3197 13.6209M19.7273 17.1929L21.1471 15.7046C21.6176 15.2114 21.6176 14.4118 21.1471 13.9186C20.6766 13.4254 19.9138 13.4254 19.4433 13.9186M19.4433 13.9186L18.0235 15.4069" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.2738 4.19379C12.7492 3.69193 12.7492 2.87825 12.2738 2.37639C11.7983 1.87454 11.0274 1.87454 10.552 2.37639L5.9816 7.20059L5.98452 5.23302C5.9858 4.37031 5.27637 3.7003 4.4639 3.79692C3.84223 3.87085 3.34538 4.37921 3.25596 5.03284L2.67404 9.2867C2.54198 10.2521 2.47595 10.7348 2.508 11.198C2.5569 11.9046 2.77143 12.5868 3.1323 13.1832C3.36884 13.5741 3.69489 13.9183 4.34701 14.6066C4.47803 14.7449 4.60216 14.8759 4.72018 15M12.2738 4.19379L13.4216 2.98219C13.8971 2.48033 14.668 2.48033 15.1434 2.98219C15.6189 3.48405 15.6189 4.29773 15.1434 4.79959M12.2738 4.19379L10.5114 6.054" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Clapping02Icon;
