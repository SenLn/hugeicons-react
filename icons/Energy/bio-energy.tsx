import * as React from "react";
import type { SVGProps } from "react";

interface BioEnergyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BioEnergyIcon = (props: BioEnergyIconProps) => {
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
        <path d="M7.51691 12H3.8974C3.46866 12 3.25429 12 3.12182 12.1371C2.98934 12.2742 2.99444 12.4858 3.00462 12.9091C3.01499 13.34 3.03966 13.7692 3.09832 14.1975C3.12255 14.3744 3.13466 14.4628 3.1927 14.5082C3.25075 14.5536 3.35607 14.5413 3.56672 14.5167C4.73441 14.3801 5.86167 15.3326 5.86167 16.5839C5.86167 17.2074 5.59266 17.767 5.16638 18.1489C5.01046 18.2885 4.9325 18.3584 4.92694 18.4317C4.92138 18.505 4.97764 18.5735 5.09015 18.7106C5.49816 19.2075 5.9569 19.6597 6.45825 20.059C6.57718 20.1537 6.63664 20.2011 6.70196 20.1992C6.76728 20.1973 6.83399 20.1376 6.96741 20.0183C7.32763 19.6962 7.79991 19.5009 8.317 19.5009C9.42587 19.5009 10.3136 20.4293 10.3606 21.5054C10.3684 21.684 10.3723 21.7732 10.4156 21.8217C10.4589 21.8703 10.533 21.8813 10.6812 21.9035C11.5421 22.0322 12.4579 22.0322 13.3188 21.9035C13.467 21.8813 13.5411 21.8703 13.5844 21.8217C13.6277 21.7732 13.6316 21.684 13.6394 21.5054C13.6864 20.4293 14.5741 19.5009 15.683 19.5009C16.2001 19.5009 16.6724 19.6962 17.0326 20.0183C17.166 20.1376 17.2327 20.1973 17.298 20.1992C17.3634 20.2011 17.4228 20.1537 17.5417 20.059C18.0431 19.6597 18.5018 19.2075 18.9098 18.7106C19.0224 18.5735 19.0786 18.505 19.0731 18.4317C19.0675 18.3584 18.9895 18.2885 18.8336 18.1489C18.4073 17.767 18.1383 17.2074 18.1383 16.5839C18.1383 15.3326 19.2656 14.3801 20.4333 14.5167C20.6439 14.5413 20.7493 14.5536 20.8073 14.5082C20.8653 14.4628 20.8775 14.3744 20.9017 14.1975C20.9603 13.7692 20.985 13.34 20.9954 12.9091C21.0056 12.4858 21.0107 12.2742 20.8782 12.1371C20.7457 12 20.5313 12 20.1026 12H16.4831C16.2763 14.3363 14.3481 16.1671 12 16.1671C9.65187 16.1671 7.72366 14.3363 7.51691 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.7412 7.7412C12.2899 6.20331 11.9672 4.44278 10.7622 3.2378C9.55722 2.03282 7.79669 1.71006 6.2588 2.2588C5.71007 3.79669 6.03282 5.55722 7.2378 6.7622C8.44278 7.96718 10.2033 8.28993 11.7412 7.7412Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.2157 9.78433C11.7584 8.50276 12.0274 7.03565 13.0315 6.0315C14.0356 5.02735 15.5028 4.75839 16.7843 5.21567C17.2416 6.49725 16.9726 7.96435 15.9685 8.9685C14.9644 9.97265 13.4972 10.2416 12.2157 9.78433Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BioEnergyIcon;
