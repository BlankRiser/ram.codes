import { SVGProps } from 'react';

export const LongArrowDownRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      >
        <path d='m13.25 19.25l3.5-3.5l-3.5-3.5'></path>
        <path d='M16.75 15.75h-6a4 4 0 0 1-4-4v-7'></path>
      </g>
    </svg>
  );
};

export const ArrowOutward = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='m16.288 7.208l-9.765 9.746q-.14.14-.344.13q-.204-.009-.344-.15q-.14-.14-.14-.334t.14-.335L15.58 6.5H6.788q-.212 0-.356-.144t-.144-.357t.144-.356q.144-.143.356-.143h9.693q.343 0 .575.232q.232.232.232.576V16q0 .213-.143.356t-.357.144q-.213 0-.356-.144T16.288 16V7.208Z'
      ></path>
    </svg>
  );
};

export function LightArrowCircleRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21Zm1.409-8.5l-1.766 1.765q-.14.14-.13.335q.009.194.15.335q.14.14.347.14t.34-.14l2.37-2.37q.242-.242.242-.565q0-.323-.242-.565l-2.388-2.389q-.14-.14-.335-.14t-.335.14q-.14.14-.14.348q0 .207.14.34l1.747 1.766H9q-.213 0-.356.144q-.144.144-.144.357t.144.356q.143.143.356.143h4.412Z'
      ></path>
    </svg>
  );
}
