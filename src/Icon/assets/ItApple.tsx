import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d='M14.528 5.758c.593-.743.996-1.74.89-2.758-.869.043-1.93.573-2.543 1.316-.551.636-1.04 1.675-.912 2.65.975.085 1.95-.487 2.565-1.208ZM15.407 7.157c-1.417-.084-2.62.804-3.297.804s-1.713-.761-2.833-.74c-1.458.02-2.811.845-3.551 2.156-1.522 2.624-.402 6.515 1.078 8.65.719 1.058 1.585 2.222 2.726 2.18 1.079-.043 1.501-.698 2.812-.698 1.31 0 1.69.698 2.832.677 1.184-.021 1.924-1.058 2.643-2.116.824-1.205 1.162-2.368 1.183-2.432-.021-.021-2.283-.889-2.304-3.49-.021-2.178 1.776-3.214 1.86-3.278-1.014-1.5-2.6-1.67-3.15-1.713Z'
        fill='#000'
      />
    </svg>
  );
};
