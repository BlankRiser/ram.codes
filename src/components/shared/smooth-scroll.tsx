'use client';

import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label='Scroll To Top'
      onClick={handleClick}
      style={{ opacity: show ? 1 : 0 }}
      className='fixed bottom-8 right-8 hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-2 text-neutral-100 transition-opacity hover:from-neutral-800/80 active:from-neutral-900 md:inline-block'
    >
      <svg
        className='size-4'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </button>
  );
};
