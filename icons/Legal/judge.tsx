import * as React from "react";
import type { SVGProps } from "react";

interface JudgeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const JudgeIcon = (props: JudgeIconProps) => {
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
        <path d="M16.6582 13L19.4303 15.3806C20.0131 15.8811 20.3045 16.1313 20.5492 16.4136C20.9409 16.8655 21.2468 17.3808 21.4528 17.9356C21.5815 18.2821 21.658 18.6515 21.8109 19.3902C21.9648 20.1337 22 21.5 22 22M7.34236 13L4.57021 15.3806C3.98742 15.8811 3.69601 16.1313 3.45133 16.4136C3.05962 16.8655 2.75371 17.3808 2.54771 17.9356C2.41903 18.2821 2.34257 18.6515 2.18965 19.3902C2.03573 20.1337 2 21.5 2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.5 11C16.5 13.7615 14.4853 16 12 16C9.51472 16 7.5 13.7614 7.5 11M16.5 11C16.5 8.94231 15.7173 6.40776 14 6.40776C13.2173 6.40776 13 7.49994 12 7.49994C11 7.49994 10.7825 6.40771 10 6.40771C8.28254 6.40771 7.50001 8.94218 7.5 11M16.5 11V12C16.5 13.1046 17.3954 14 18.5 14C19.6046 14 20.5 13.1046 20.5 12C20.5 11.3276 20.1681 10.7326 19.6592 10.37C20.175 9.91208 20.5 9.24399 20.5 8.5C20.5 7.11929 19.3807 6 18 6C18 3.79086 15.5 2 12 2C8.5 2 6 3.79086 6 6C4.61929 6 3.5 7.11929 3.5 8.5C3.5 9.24399 3.82499 9.91208 4.34075 10.37C3.83187 10.7326 3.5 11.3276 3.5 12C3.5 13.1046 4.39543 14 5.5 14C6.60457 14 7.5 13.1046 7.5 12V11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14.0291 16L15.168 19.3675C15.8775 21.4655 15.5443 22 13.243 22H10.757C8.45571 22 8.12254 21.4655 8.83205 19.3675L9.9709 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default JudgeIcon;
