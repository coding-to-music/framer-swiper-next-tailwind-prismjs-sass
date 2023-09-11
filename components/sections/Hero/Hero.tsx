import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';

import { Calendy } from '@components/common';
import { Box, Button, Container, Link, Text } from '@components/ui';

export const Hero = () => {
  return (
    <Box className='mb-10 grid md:mb-40 md:h-screen md:grid-cols-2' id='top'>
      <Container className='md:order-0 order-1 flex w-full flex-col justify-between pb-12 pt-5'>
        <Box className='md:mb-10' />
        <Box className='order-1 mt-5 max-w-xl md:order-2 md:mt-10'>
          <Text as='h1' className='mb-5' fontSize='5xl'>
            <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Hi 👋🏼, I’m Blogger-Name. <br /> Writer, Software Engineer, DevOps
              Enthusiast.
            </motion.span>
          </Text>
          <Text className='mb-6 2xl:mb-10'>
            <motion.span
              className='block'
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Hello there! It&lsquo;s a pleasure to meet you. This space is
              where I immerse myself in the latest advancements in technology.
              You&lsquo;ll find a mix of enlightening pieces on Software
              Development and thorough examinations of Cloud Native
              Technologies. I&lsquo;m genuinely excited to have you join me on
              this adventure. 🚀
            </motion.span>
          </Text>
          <Box className='flex'>
            <motion.div
              initial={{ x: -10 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileInView={{ x: 0 }}
            >
              <Button
                variant='primary'
                size='lg'
                href='/blog'
                className='font-heading mr-3 text-sm uppercase'
              >
                Read my blog
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 10 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileInView={{ x: 0 }}
            >
              <Calendy>Schedule meeting</Calendy>
            </motion.div>
          </Box>
        </Box>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='order-2 hidden md:order-3 md:block'
        >
          <Link
            className='font-heading flex animate-bounce gap-1 text-sm uppercase text-slate-900 hover:text-rose-500 dark:text-slate-200 dark:hover:text-rose-500'
            href='#latest'
          >
            <AiOutlineArrowDown className='h-5 w-auto' /> scroll down
          </Link>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='relative mt-[53px] h-[60vh] md:hidden bg-[url(/images/jose.jpg)] bg-cover bg-left-top'
      />

      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='order-1 mt-0 hidden bg-slate-300 dark:bg-slate-800 h-full bg-[url(/images/jose.jpg)] bg-cover bg-center md:block'
      />
    </Box>
  );
};
