'use client';

import { LightArrowCircleRight } from '~/components/icons/misc';
import { FadeInText, RevealCharacter } from '~/components/shared';
import { ContactMe } from '~/components/shared/contact-me';
import { Button, Particles } from '~/components/ui';

export const Hero = () => {
  return (
    <section className='relative flex h-[calc(100vh-56px)] flex-col items-center justify-center'>
      <Particles
        className='absolute inset-0 z-[1] bg-neutral-950'
        quantity={100}
      />
      <div className='relative z-10 flex flex-col items-center justify-center text-center'>
        <RevealCharacter
          className='pointer-events-none relative z-10 select-none py-4 font-space-grotesk text-5xl font-medium leading-[0.5] md:text-7xl lg:text-8xl'
          color={'#000'}
          text={'Ram Shankar Choudhary'}
          type='h1'
        />
        <FadeInText
          text={'SOFTWAR ENGINEER'}
          className='z-10'
          characterClassName={`pointer-events-none z-10 select-none font-generalSans text-2xl font-light tracking-widest `}
        />
        <div className='my-4'>
          <ContactMe>
            <Button variant='outline' rounded='full'>
              Contact Me
            </Button>
          </ContactMe>
        </div>
      </div>
    </section>
  );
};

// const ButtonWithIcon = () => {
//   return (
//     <button className='group relative flex items-center gap-4 rounded-full border bg-transparent px-4 py-2 text-white transition-all duration-500 hover:bg-neutral-800/70'>
//       Contact Me
//       <span className='inline-flex h-0 w-0 -rotate-180 rounded-full p-0 transition-all duration-500 group-hover:h-fit group-hover:w-fit group-hover:-rotate-45'>
//         <LightArrowCircleRight width={32} height={32} />
//       </span>
//     </button>
//   );
// };
