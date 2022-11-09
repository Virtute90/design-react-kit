import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      enableBackground='new 0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M12 2c-4.9 0-9.1 3.6-9.9 8.4s2.1 9.5 6.7 11.1c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.1-.6-.6-1.2-1.1-1.5-.9-.6.1-.6.1-.6.6.1 1.2.5 1.5 1 .6 1 1.9 1.4 2.9.8 0-.5.3-1 .6-1.3-2.1-.2-4.5-1.1-4.5-4.9 0-1 .3-2 1-2.7-.3-.9-.2-1.8.1-2.6 0 0 .8-.3 2.8 1 1.6-.4 3.4-.4 5 0 1.9-1.3 2.7-1 2.7-1 .4.8.4 1.8.1 2.6.7.7 1 1.7 1 2.7 0 3.8-2.3 4.7-4.6 4.9.5.5.7 1.2.7 1.9v2.8c0 .4.2.6.7.5 4.7-1.5 7.5-6.2 6.7-11.1S16.9 2 12 2z' />
    </svg>
  );
};
