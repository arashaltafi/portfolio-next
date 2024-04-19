"use client"

import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react'
const animation = "/lotties/coding.json";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div id='about' className='relative w-full h-screen flex flex-row items-center justify-center'>
            <div className='w-1/2 flex flex-col gap-4 items-start justify-center ps-32'>
                <motion.h2
                    className='text-5xl'
                    initial={{ opacity: 0, scale: 0.8, x: -200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 0.3, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    Hello 👋🏻
                </motion.h2>
                <motion.div
                    className='flex flex-row items-center justify-center gap-2 text-4xl'
                    initial={{ opacity: 0, scale: 0.8, x: -200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ repeat: 0, duration: 1, delay: 0.6, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    <h3>I'm Arash Altafi</h3>
                    <IoMdPerson />
                </motion.div>
                <motion.div
                    className='mt-8 flex flex-row items-center justify-center gap-2 text-2xl'
                    initial={{ opacity: 0, scale: 0.8, x: -200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ repeat: 0, duration: 1, delay: 0.9, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    <h4>Frontend Developer</h4>
                    <FaReact />
                </motion.div>
                <motion.div
                    className='flex flex-row items-center justify-center gap-2 text-2xl'
                    initial={{ opacity: 0, scale: 0.8, x: -200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ repeat: 0, duration: 1, delay: 1.2, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    <h4>Backend Developer</h4>
                    <FaNodeJs />
                </motion.div>
                <motion.div
                    className='flex flex-row items-center justify-center gap-2 text-2xl'
                    initial={{ opacity: 0, scale: 0.8, x: -200 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ repeat: 0, duration: 1, delay: 1.5, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    <h4>Android Developer</h4>
                    <FaAndroid />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ repeat: 0, duration: 1, delay: 0.1, stiffness: 400, damping: 10, type: 'tween' }}
                viewport={{ once: true }}
            >
                <Player
                    className='w-2/3'
                    src={animation}
                    autoplay
                    loop
                    speed={1}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ repeat: 0, duration: 1, delay: 2, stiffness: 400, damping: 10, type: 'tween' }}
                viewport={{ once: true }}
                className='absolute w-full h-full'
            >
                <FaNodeJs className='text-sky-500 size-12 absolute top-20 left-1/2 shake1' />
                <FaAndroid className='text-sky-500 size-12 absolute top-1/3 left-1/3 shake2' />
                <FaReact className='text-sky-500 size-12 absolute bottom-20 left-1/2 shake3' />
            </motion.div>
        </div>
    )
}

export default About