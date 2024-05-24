'use client';

import { motion } from 'framer-motion';
import { CoffeeCup } from 'iconoir-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LINKS } from '~/constants/links';
import { cn } from '~/utils/text-transforms';
import { ContactMe } from '../shared/contact-me';
import { Button } from '../ui';

export const Navbar = () => {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      className={'fixed top-0 z-[9999] w-full px-4 backdrop-blur-md'}
    >
      <div className={'relative z-[999] mx-auto max-w-7xl py-4'}>
        <nav
          className={cn([
            `flex h-full items-center`,
            isHomePage ? 'justify-end' : 'justify-between',
          ])}
        >
          {isHomePage ? null : (
            <Link
              href={'/'}
              className={
                'flex size-8 flex-col items-center justify-center rounded-full text-center font-semibold'
              }
              style={{
                background: `linear-gradient(to right, #0f2027, #203a43, #2c5364)`,
              }}
            >
              <span className='block shadow-lg'>R</span>
            </Link>
          )}
          <div className='flex items-center gap-2'>
            <PriorityLinks />
            <ContactMe>
              <Button variant={'ghost'} size={'icon'} rounded={'full'}>
                <CoffeeCup />
              </Button>
            </ContactMe>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

/**
 * mt-14 is used to offset the height of navbar
 **/
export const NavbarOffset = ({ className }: { className?: string }) => (
  <div className={cn(className ? className : 'mt-[3.75rem]')} />
);

const PriorityLinks = () => {
  const pathname = usePathname();
  return (
    <ul className='flex items-center justify-between gap-2 rounded-full border border-neutral-800 p-1'>
      {Object.entries(LINKS).map(([key, value], index) => {
        return (
          <li key={index}>
            <Link
              href={value}
              className={cn(
                'relative block z-10 hover:bg-neutral-800 active:bg-neutral-800/50 px-4 py-1 rounded-full text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devhaven-500',
                pathname.startsWith(value) &&
                  'outline outline-1 outline-neutral-900 text-neutral-200',
                'transition-colors duration-150 ease-in-out',
              )}
            >
              {pathname.startsWith(value) && (
                <motion.div
                  layoutId='underline'
                  transition={{
                    layout: {
                      duration: 0.2,
                      ease: 'easeOut',
                    },
                  }}
                  className='absolute inset-0 z-0 rounded-full bg-neutral-900 px-4 py-1 text-neutral-400'
                />
              )}
              <span className='relative'>{key}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
