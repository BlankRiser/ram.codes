'use client';

import { motion } from 'framer-motion';
import React from 'react';

export function Global({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.25,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      className='z-10'
    >
      {children}
    </motion.main>
  );
}
