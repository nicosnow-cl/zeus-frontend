'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Drawer } from '@/common/ui/primitives/drawer';
import { FilterForm } from '../filter-form';
import { Heading } from '@radix-ui/themes';
import { FilterCircleFillIcon } from '@/common/icons';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer
      className="left-0 top-0 z-30 mt-[74px] bg-red-5 p-3 py-2 text-gray-12"
      closeWidth={50}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <div className="relative overflow-hidden">
        <FilterCircleFillIcon className="absolute fill-gray-12" width="24" height="24" />

        <Heading className="ml-12 whitespace-nowrap">Filtros</Heading>
      </div>

      <motion.div initial="hidden" variants={variants} animate={isOpen ? 'visible' : 'hidden'}>
        <FilterForm />
      </motion.div>
    </Drawer>
  );
};
