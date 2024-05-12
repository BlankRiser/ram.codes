'use client';

import { motion } from 'framer-motion';
import { FadeInText, RevealCharacter } from '~/components/shared';
import { ContactMe } from '~/components/shared/contact-me';
import { Button, Particles } from '~/components/ui';
import ShimmerButton from '~/components/ui/shimmer-button';
import { useMediaQuery } from '~/hooks/use-media-query';

export const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <motion.section className='relative flex h-[calc(100vh-56px)] flex-col items-center justify-center'>
      <Particles
        className='absolute inset-0 z-[1] bg-neutral-950'
        quantity={100}
      />
      <div className='relative z-10 flex flex-col items-center justify-center text-center'>
        <RevealCharacter
          className='pointer-events-none relative z-10 select-none py-4 font-space-grotesk text-5xl font-medium leading-[0.5] md:text-7xl lg:text-8xl'
          color={'#000'}
          text={isMobile ? 'Ram Shankar' : 'Ram Shankar Choudhary'}
          type='h1'
        />
        <FadeInText
          text={'SOFTWAR ENGINEER'}
          className='z-10'
          characterClassName={`pointer-events-none z-10 select-none font-generalSans text-2xl font-light tracking-widest `}
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: 'anticipate',
          }}
          className='my-4'
        >
          <ContactMe>
            <ShimmerButton>
              <span className='whitespace-pre-wrap text-center text-sm  leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10'>
                Contact Me
              </span>
            </ShimmerButton>
          </ContactMe>
        </motion.div>
      </div>
    </motion.section>
  );
};
