'use client';

import { motion } from 'framer-motion'
import { Midas } from '~/components/icons';



export default function Page() {
  return (
    <div className='max-w-7xl h-screen mx-auto'>
      <motion.div className={`h-1/2 w-full my-8`}>
        <Card />
      </motion.div>
    </div>
  );
}



function Card() {
  return <motion.div className={`rounded-2xl hover:border grid place-items-center hover:border-midas-primary/25 w-[300px] h-[300px] hover:shadow-midas bg-neutral-900/50 transition-shadow ease-in-out duration-200`}>
    <Midas className='w-1/2 h-1/2' />
  </motion.div >
}