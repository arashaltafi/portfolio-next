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
    <header className='w-full flex flex-row items-stretch justify-between'>
      <div className={`hidden md:flex flex-row gap-x-8 items-center justify-center`}>
        <Link
          className={`h1 hover:text-sky-500 hover:custom-animation transition-all duration-100 delay-100 py-8 px-4`}
          href="/contact">contact
        </Link>
        <Link
          className={`h1 hover:text-sky-500 hover:custom-animation transition-all duration-100 delay-100 py-8 px-4`}
          href="/works">works
        </Link>
        <Link
          className={`h1 hover:text-sky-500 hover:custom-animation transition-all duration-100 delay-100 py-8 px-4`}
          href="/resume">resume
        </Link>
        <Link
          className={`h1 hover:text-sky-500 hover:custom-animation transition-all duration-100 delay-100 py-8 px-4`}
          href="/">home
        </Link>
      </div>
      <div className='md:hidden flex flex-row gap-x-8 items-center justify-center'>
        <IoMdMenu className='icon' />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.2, transform: 'rotate(360deg)' }}
        transition={{ repeat: 0, duration: 0.5, delay: 0.1, stiffness: 400, damping: 10, type: 'tween' }}
        viewport={{ once: true }}
        id="arashaltafi"
        className={`h1 flex flex-row gap-x-2 items-center justify-center transition-all duration-100 delay-100 *:hover:text-sky-500`}
        onClick={(e) => handleClickPdf(e)}>
        <span className='text-slate-400'>Arash</span>
        <span>Altafi</span>
      </motion.div>
    </header>
  )
}

export default Header