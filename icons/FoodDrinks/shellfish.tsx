import * as React from "react";
import type { SVGProps } from "react";

interface ShellfishIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShellfishIcon = (props: ShellfishIconProps) => {
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
        <path d="M14.5457 4.95548C14.6207 5.26464 14.6405 5.59372 14.5947 5.93067L13.7727 11.975M14.5457 4.95548C13.9137 2.34817 10.0863 2.34817 9.45425 4.95548M14.5457 4.95548C16.113 3.34704 18.9261 4.94832 19 6.95915M19 6.95915C20 7.12691 22 8.0641 22 10.4708C22 12.6443 19.3928 14.94 16.8169 16.7647C16.2348 17.1771 15.9437 17.3833 15.7575 17.5326C15.1829 17.9935 14.8201 18.3672 14.3765 18.9552C14.2328 19.1457 14.0838 19.3697 13.786 19.8177L13.5536 20.1673C13.2078 20.6874 12.6246 21 12 21C11.3754 21 10.7922 20.6874 10.4464 20.1673L10.214 19.8177C9.91617 19.3697 9.76725 19.1457 9.62352 18.9552C9.1799 18.3672 8.81709 17.9935 8.2425 17.5326C8.05634 17.3833 7.76522 17.1771 7.18308 16.7647C4.60719 14.94 2 12.6443 2 10.4708C2 8.0641 4 7.12691 5 6.95915M19 6.95915C19.0676 8.79881 17.8104 11.2684 16.6976 12.9777M9.45425 4.95548C9.37931 5.26464 9.35952 5.59372 9.40534 5.93067L10.2273 11.975M9.45425 4.95548C7.88696 3.34704 5.07389 4.94832 5 6.95915M5 6.95915C4.93239 8.79881 6.18965 11.2684 7.30238 12.9777" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 16L17.2412 19.7942C17.1009 20.4953 16.4853 21 15.7703 21H8.22971C7.51468 21 6.89906 20.4953 6.75883 19.7942L6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ShellfishIcon;
