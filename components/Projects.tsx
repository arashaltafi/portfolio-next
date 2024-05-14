"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { RiComputerLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { getDeviceSize } from '@/utils/Helper';

const Projects = () => {
    const [projects, setProjects] = useState<{
        id: number,
        title: string,
        desc: string,
        image: string,
        link: string
    }[]>([])

    useEffect(() => {
        setProjects([
            {
                id: 1,
                title: "coffee Shop Next",
                desc: "NextJs, Ts, Tailwind, Mui",
                image: "/images/coffee2.jpg",
                link: "https://online-shops.ir/"
            }, {
                id: 1,
                title: "Chat App",
                desc: "Mern Stack, SocketIo",
                image: "/images/chat.jpg",
                link: "https://mychats.ir"
            }, {
                id: 3,
                title: "Tv Online",
                desc: "React, Ts, ExpressJs, Mysql",
                image: "/images/tv.jpg",
                link: "https://tv.arashaltafi.ir/"
            }, {
                id: 4,
                title: "English Teacher",
                desc: "React, Ts, Php, Mysql",
                image: "/images/english.jpg",
                link: "https://englishteacher.arashaltafi.ir/"
            }, {
                id: 5,
                title: "Portfolio 1",
                desc: "React, Ts",
                image: "/images/app1.jpg",
                link: "https://app.arashaltafi.ir/"
            }, {
                id: 6,
                title: "Portfolio 2",
                desc: "Next, Ts, Tailwind",
                image: "/images/app2.jpg",
                link: "https://app2.arashaltafi.ir/"
            }, {
                id: 7,
                title: "ShortLink",
                desc: "NodeJs, ExpressJs, Mysql",
                image: "/images/shortlink.jpg",
                link: "https://shortlink.arashaltafi.ir/"
            }, {
                id: 8,
                title: "Meditation",
                desc: "React, Ts, TailwindCss",
                image: "/images/meditation.jpg",
                link: "https://meditation.arashaltafi.ir/"
            }, {
                id: 9,
                title: "Coffee Shop",
                desc: "TailwindCss",
                image: "/images/coffee.jpg",
                link: "https://coffee.arashaltafi.ir/"
            }, {
                id: 10,
                title: "DigiKala",
                desc: "ReactJs, Sass",
                image: "/images/digikala.jpg",
                link: "https://digikala.arashaltafi.ir/"
            }, {
                id: 11,
                title: "Calculator",
                desc: "ReactJs, TailwindCss",
                image: "/images/calculator.jpg",
                link: "https://calculator.arashaltafi.ir/"
            }, {
                id: 12,
                title: "Todo",
                desc: "React, Ts, IndexDb, MUI",
                image: "/images/todo.jpg",
                link: "https://todo.arashaltafi.ir/"
            }
        ])
    }, [])

    const handleClick = (e: MouseEvent | TouchEvent | PointerEvent) => {
        const id = Number((e.target as HTMLElement)?.id || 0);
        if (id === 0 || isNaN(id)) return

        const link = projects[id - 1].link || ""
        if (link === "") return

        window.open(link, "_blank")
    }

    return (
        <div id='projects' className='relative snap-start select-none w-full h-screen flex flex-col items-center justify-center gap-16 px-12 sm:px-16 md:px-24 lg:px-32 xl:px-32'>
            <motion.h2
                className='flex flex-row items-center justify-center gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ repeat: 0, duration: 0.5, delay: 0.3, stiffness: 400, damping: 10, type: 'tween' }}
                viewport={{ once: true }}
            >
                <p>Projects</p>
                <RiComputerLine className='text-sky-500' />
            </motion.h2>

            <Swiper
                className="w-full h-1/3 mx-auto mySwiper"
                style={{
                    padding: '16px 46px',
                }}
                centeredSlides={true}
                centeredSlidesBounds={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={getDeviceSize() === 'xm' ? 5 : getDeviceSize() === 'sm' ? 10 : getDeviceSize() === 'md' ? 15 : 20}
                slidesPerView={getDeviceSize() === 'xm' ? 1 : getDeviceSize() === 'sm' ? 1 : getDeviceSize() === 'md' ? 2 : 2}
                loop={true}
                effect={'coverflow'}
                onClick={(_, e) => {handleClick(e)}}
            >
                {
                    projects.map((project) => (
                        <SwiperSlide
                            key={project.id}
                            className="w-full h-full rounded-lg md:rounded-xl hover:scale-[101%] active:scale-[99%] transition-all duration-200">
                            <div
                                id={`${project.id}`}
                                className={`overflow-hidden relative w-full h-full rounded-lg md:rounded-xl border border-solid border-sky-500 flex flex-col items-center justify-center gap-4`}
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundOrigin: "content-box",
                                    backgroundPosition: "center center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    boxShadow: "2px 2px 20px 2px rgba(255, 255, 255, 0.4)"
                                }}
                            >
                                <div id={`${project.id}`} className='absolute inset-0 rounded-lg md:rounded-xl p-1 opacity-30 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-500 to-slate-200 dark:from-slate-800 dark:to-slate-500' />

                                <div id={`${project.id}`} className='w-full h-full flex flex-col items-start justify-between'>
                                    <h2
                                        className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white bg-black/50 w-full p-3 line-clamp-1 text-ellipsis text-nowrap'
                                        style={{
                                            textShadow: "rgb(0, 0, 0) 2px 2px 0px, rgba(255, 255, 255, 0.15) 5px 4px 0px",
                                            borderRadius: "0% 100% 100% 0% / 0% 0% 80% 0%"
                                        }}
                                    >
                                        {project.title}
                                    </h2>
                                    <p
                                        className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-white bg-black/50 w-full p-3 line-clamp-1 text-ellipsis text-nowrap'
                                        style={{
                                            textShadow: "rgb(0, 0, 0) 2px 2px 0px, rgba(255, 255, 255, 0.15) 5px 4px 0px",
                                            borderRadius: "50% 50% 0% 0% / 10% 10% 0% 0%"
                                        }}
                                    >
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <footer className='absolute bottom-0'>
                <h2 className='text-center text-sm sm:text-md md:text-lg lg:text-xl font-bold hover:text-sky-500 transition-all'>❤️Code By Arash❤️</h2>
            </footer>
        </div>
    )
}

export default Projects