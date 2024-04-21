"use client"

import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion"
import { Tooltip } from 'react-tooltip'

const Header = () => {
  const handleClickPdf = (e: any) => {
    e.preventDefault();
    window.open("https://arashaltafi.ir/resume_en.pdf");
  }

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className='select-none fixed left-0 right-0 top-0 w-full flex flex-row items-stretch justify-between z-30 py-4 px-8'>
      <div className={`hidden md:flex flex-row gap-x-4 items-center justify-center backdrop-blur-[5px]`}>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <button onClick={() => scrollTo(0, 0)} className='header'>Home</button>
        </motion.button>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0.3, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <button onClick={() => scrollToId('about')} className='header'>About</button>
        </motion.button>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0.6, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <button onClick={() => scrollToId('skills')} className='header'>Skills</button>
        </motion.button>
        <motion.button
          className='py-8 px-4'
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ repeat: 0, duration: 0.5, delay: 0.9, stiffness: 400, damping: 10, type: 'tween' }}
          viewport={{ once: true }}
        >
          <button onClick={() => scrollToId('projects')} className='header'>Projects</button>
        </motion.button>
      </div>
      <div className='md:hidden flex flex-row gap-x-8 items-center justify-center backdrop-blur-[5px]'>
        <IoMdMenu className='icon' />
      </div>

      <Tooltip anchorSelect="#arashaltafi" place="bottom">
        <b>See Resume</b>
      </Tooltip>

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