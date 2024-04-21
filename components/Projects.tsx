"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { RiComputerLine } from "react-icons/ri";

const Projects = () => {
    const [projects, setProjects] = useState<{
        id: number,
        title: string,
        desc: string,
        image: string
    }[]>([])

    useEffect(() => {
        setProjects([
            {
                id: 1,
                title: "Lorem",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                image: "https://arashaltafi.ir/arash.jpg"
            }
        ])
    }, [])

    return (
        <div id='projects' className='snap-start select-none relative w-full h-screen flex flex-col items-center justify-center gap-16'>
            <motion.h2
                className='flex flex-row items-center justify-center gap-4 text-6xl'
                initial={{ opacity: 0, scale: 0.8, x: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ repeat: 0, duration: 0.5, delay: 0.3, stiffness: 400, damping: 10, type: 'tween' }}
                viewport={{ once: true }}
            >
                <h3>Projects</h3>
                <RiComputerLine className='text-sky-500' />
            </motion.h2>

            <div className='w-full flex flex-row gap-8 items-center justify-center'>
                {
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className={`overflow-hidden relative w-1/2 h-[500px] rounded-xl border border-solid border-sky-500 flex flex-col items-center justify-center gap-4 hover:scale-[101%] active:scale-[99%] transition-all duration-200`}
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundOrigin: "content-box",
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                boxShadow: "5px 5px 25px 5px rgba(255, 255, 255, 0.4)"
                            }}
                        >
                            <div className='absolute inset-0 rounded-xl p-1 opacity-30 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-500 to-slate-200 dark:from-slate-800 dark:to-slate-500' />

                            <div className='w-full h-full flex flex-col items-start justify-between'>
                                <h2
                                    className='text-4xl text-white bg-black/50 w-full p-3 line-clamp-1 text-ellipsis text-nowrap'
                                    style={{
                                        textShadow: "rgb(0, 0, 0) 2px 2px 0px, rgba(255, 255, 255, 0.15) 5px 4px 0px",
                                        borderRadius: "0% 100% 100% 0% / 0% 0% 80% 0%"
                                    }}
                                >
                                    {project.title}
                                </h2>
                                <p
                                    className='text-2xl text-white bg-black/50 w-full p-3 line-clamp-1 text-ellipsis text-nowrap'
                                    style={{
                                        textShadow: "rgb(0, 0, 0) 2px 2px 0px, rgba(255, 255, 255, 0.15) 5px 4px 0px",
                                        borderRadius: "50% 50% 0% 0% / 10% 10% 0% 0%"
                                    }}
                                >
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects