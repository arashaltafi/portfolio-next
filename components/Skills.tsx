"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Player } from '@lottiefiles/react-lottie-player';
const animation = "/lotties/frontend.json";
import { FaCode } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import Image from 'next/image';

const Skills = () => {
    const [skills, setSkills] = useState<{
        id: number,
        name: string,
        icon: JSX.Element
    }[]>([])

    useEffect(() => {
        setSkills([
            {
                id: 1,
                name: "HTML",
                icon: <FaHtml5 className="text-4xl text-orange-500" />
            }, {
                id: 2,
                name: "CSS",
                icon: <FaCss3Alt className="text-4xl text-blue-500" />
            }, {
                id: 3,
                name: "JavaScript",
                icon: <IoLogoJavascript className="text-4xl text-yellow-500" />
            }, {
                id: 4,
                name: "TypeScript",
                icon: <SiTypescript className="text-4xl text-blue-500" />
            }, {
                id: 5,
                name: "NodeJs",
                icon: <FaNodeJs className="text-4xl text-green-500" />
            }, {
                id: 6,
                name: "React",
                icon: <FaReact className="text-4xl text-sky-500" />
            }, {
                id: 7,
                name: "NextJs",
                icon: <SiNextdotjs className="text-4xl" />
            }, {
                id: 8,
                name: "Redux",
                icon: <SiRedux className="text-4xl text-purple-500" />
            }, {
                id: 9,
                name: "Express",
                icon: <SiExpress className="text-4xl" />
            }, {
                id: 10,
                name: "Database",
                icon: <FaDatabase className="text-4xl text-yellow-500" />
            }, {
                id: 11,
                name: "TailwindCss",
                icon: <SiTailwindcss className="text-4xl text-teal-500" />
            }, {
                id: 12,
                name: "Bootstrap",
                icon: <FaBootstrap className="text-4xl text-purple-500" />
            }, {
                id: 13,
                name: "Sass",
                icon: <FaSass className="text-4xl text-pink-500" />
            }, {
                id: 14,
                name: "SocketIo",
                icon: <SiSocketdotio className="text-4xl" />
            }, {
                id: 15,
                name: "Kotlin",
                icon: <SiKotlin className="text-4xl text-purple-500" />
            }, {
                id: 16,
                name: "Android",
                icon: <FaAndroid className="text-4xl text-green-500" />
            },
        ])
    }, [])

    return (
        <div id='skills' className='snap-start select-none relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-12 sm:px-16 md:px-24 lg:px-32 xl:px-32'>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ repeat: 0, duration: 1, delay: 0.1, stiffness: 400, damping: 10, type: 'tween' }}
                viewport={{ once: true }}
                className='h-1/3 pt-16 md:p-0 md:h-full md:w-full md:flex-1 flex items-center justify-center'
            >
                <Player
                    className='w-full'
                    src={animation}
                    autoplay
                    loop
                    speed={1}
                />
            </motion.div>

            <div className='flex-1 w-full flex flex-col gap-8 items-center justify-center'>
                <motion.h2
                    className='flex flex-row items-center justify-center gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ repeat: 0, duration: 0.5, delay: 0.3, stiffness: 400, damping: 10, type: 'tween' }}
                    viewport={{ once: true }}
                >
                    <p>Skills</p>
                    <FaCode className='text-sky-500' />
                </motion.h2>
                <div className='grid grid-cols-3 sm:grid-cols-4 items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 md:gap-x-8 md:gap-y-4'>
                    {
                        skills.map((skill) => (
                            <motion.div
                                key={skill.id}
                                className='flex flex-row items-center justify-center gap-2 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ repeat: 0, duration: 0.5 + skill.id * 0.1, delay: 0.6, stiffness: 400, damping: 10, type: 'tween' }}
                                viewport={{ once: true }}
                            >
                                <Tooltip anchorSelect={`#${skill.name}`} place="top" className='text-sm'>{skill.name}</Tooltip>
                                <div id={skill.name} className='bg-slate-400 dark:bg-slate-800 hover:bg-slate-300 hover:dark:bg-slate-700 transition-all p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-full'>
                                    {skill.icon}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>

            <Image
                className='absolute bottom-0 left-0 ml-[-12rem] sm:ml-[-8rem] md:ml-[-6rem] lg:ml-[-4rem] -z-10'
                src="/images/pattern-l.svg"
                height={700}
                width={320}
                loading='lazy'
                alt="pattern"
            />
        </div>
    )
}

export default Skills