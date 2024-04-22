"use client"

import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion"
import { Tooltip } from 'react-tooltip'
import { MdLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true)
    } else if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    } else {
      try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
          const newColorScheme = event.matches ? "dark" : "light";
          if (newColorScheme == "dark") {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true)
          } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false)
          }
        });
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true)
        } else {
          document.documentElement.classList.remove('dark');
          setIsDarkMode(false)
        }
      } catch (error: any) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true)
      }
    }
  }, [])

  const changeTheme = (theme: string) => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setIsDarkMode(true)
    } else if (theme === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    } else {
      localStorage.setItem('theme', 'auto');
      try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
          const newColorScheme = event.matches ? "dark" : "light";
          if (newColorScheme == "dark") {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true)
          } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false)
          }
        });
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true)
        } else {
          document.documentElement.classList.remove('dark');
          setIsDarkMode(false)
        }
      } catch (error: any) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true)
      }
    }

    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      menu.classList.add("-translate-x-96")
      blur.classList.add("hidden")
    }
  }

  const handleClickPdf = (e: any) => {
    e.preventDefault();
    window.open("https://arashaltafi.ir/resume_en.pdf");
  }

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMenu = () => {
    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      menu.classList.remove("-translate-x-96")
      blur.classList.remove("hidden")
    }
  }

  const handleBlur = () => {
    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      menu.classList.add("-translate-x-96")
      blur.classList.add("hidden")
    }
  }

  const handleScroll = (id: string) => {
    scrollToId(id)
    const menu = document.getElementById("menu")
    const blur = document.getElementById("blur")
    if (menu && blur) {
      menu.classList.add("-translate-x-96")
      blur.classList.add("hidden")
    }
  }

  return (
    <header className='select-none fixed left-0 right-0 top-0 w-full flex flex-row items-stretch justify-between z-30 py-6 px-8'>
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
      <div onClick={handleMenu} className='md:hidden flex flex-row gap-x-8 items-center justify-center backdrop-blur-[5px]'>
        <IoMdMenu className='icon' />
      </div>

      <div
        id='menu'
        className='md:hidden transition-all duration-200 -translate-x-96 h-screen w-2/3 flex gap-14 flex-col gap-y-4 items-start justify-start absolute top-0 left-0 bg-slate-200 dark:bg-slate-800 py-8 px-6'
        style={{ zIndex: 100 }}>
        <button
          onClick={() => handleScroll('home')}
          className='header'>
          Home
        </button>

        <span className='w-full h-px bg-slate-500 rounded-full' />

        <button
          onClick={() => handleScroll('about')}
          className='header'>
          About
        </button>

        <span className='w-full h-px bg-slate-500 rounded-full' />

        <button
          onClick={() => handleScroll('skills')}
          className='header'>
          Skills
        </button>

        <span className='w-full h-px bg-slate-500 rounded-full' />

        <button
          onClick={() => handleScroll('projects')}
          className='header'>
          Projects
        </button>

        <div className='w-full flex-1 flex items-end justify-center'>
          {
            isDarkMode ?
              <MdLightMode onClick={() => changeTheme("light")} /> :
              <MdNightlightRound onClick={() => changeTheme("dark")} />
          }
        </div>
      </div>

      <div
        id='blur'
        onClick={handleBlur}
        className='md:hidden hidden w-full h-screen bg-slate-200/50 dark:bg-slate-800/50 absolute top-0 left-0 right-0 bottom-0'
      />

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