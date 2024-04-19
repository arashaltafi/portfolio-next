"use client"

import Link from 'next/link';
import React, { useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import tippy from 'tippy.js';
import { motion } from "framer-motion"

const Header = () => {
  const handleClickPdf = (e: any) => {
    e.preventDefault();
    window.open("https://arashaltafi.ir/resume_en.pdf");
  }

  useEffect(() => {
    tippy('#arashaltafi', {
      content: `<b>See Resume</b>`,
      allowHTML: true,
      placement: 'bottom',
      arrow: false,
      animation: 'fade',
      duration: 500,
      theme: 'material',
    });
  }, [])

  return (
    <header className='fixed left-0 right-0 top-0 w-full flex flex-row items-stretch justify-between z-30 py-4 px-8'>
      <div className={`hidden md:flex flex-row gap-x-4 items-center justify-center *:capitalize backdrop-blur-[5px]`}>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <Link href="/" className='header'>home</Link>
        </motion.button>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0.3, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className='header'>about</Link>
        </motion.button>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0.6, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <Link href="/works" className='header'>skills</Link>
        </motion.button>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0.9, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <Link href="/resume" className='header'>projects</Link>
        </motion.button>
      </div>
      <div className='md:hidden flex flex-row gap-x-8 items-center justify-center backdrop-blur-[5px]'>
        <IoMdMenu className='icon' />
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ repeat: 0, duration: 0.5, delay: 1.2, stiffness: 400, damping: 10, type: 'tween' }}
        viewport={{ once: true }}
        id="arashaltafi"
        className={`h1 flex flex-row gap-x-2 items-center justify-center transition-all duration-100 delay-100 *:hover:text-sky-500`}
        onClick={(e) => handleClickPdf(e)}>
        <span className='text-slate-400'>Arash</span>
        <span>Altafi</span>
      </motion.button>
    </header>
  )
}

export default Header