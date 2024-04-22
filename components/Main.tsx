"use client"

import Image from 'next/image'
import React from 'react'
import ParticlesComponent, { ParticlesType } from './ParticlesComponent'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"

const Main = () => {
    const customStyle = 'text-shadow: 5px 5px 20px'

    const firstSentence = `
        <strong><span style="color: #fff; ${customStyle} #fff;">I'm</span><span style="color: #F44336; ${customStyle} #C62828;"> ArashAltafi </span></strong>
    `;

    const secondSentence = `
        <strong><span style="color: #4CAF50; ${customStyle} #2E7D32;">FrontEnd</span><span style="color: #fff; ${customStyle} #fff;"> And </span><span style="color: #FFEB3B; ${customStyle} #F9A825;">Backend</span><span style="color: #fff; ${customStyle} #fff;"> Developer</span></strong>
    `;

    const thirdSentence = `
        <strong><span style="color: #AB47BC; ${customStyle} #8E24AA;">ReactJs</span><span style="color: #fff; ${customStyle} #fff;"> And </span><span style="color: #03A9F4; ${customStyle} #0277BD;">NodeJs</span></strong>
    `;

    return (
        <div id='home' className="snap-start relative select-none w-full h-screen flex items-center justify-center">
            <ParticlesComponent particlesType={ParticlesType.Links} />

            <motion.div
                className="w-full md:w-3/4 lg:w-2/3 max-h-auto mx-auto contrast-[110%] brightness-105 hover:brightness-110 drop-shadow-3xl hover:drop-shadow-4xl self-end"
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ repeat: 0, duration: 2, delay: 0 }}
                viewport={{ once: true }}>
                <Image
                    src="/images/bg1.png"
                    alt="Author Logo"
                    width={1000}
                    height={1000}
                    quality={100}
                    loading="eager"
                    style={{
                        borderBottomLeftRadius: '50% 10%',
                        borderBottomRightRadius: '50% 10%',
                    }}
                />
            </motion.div>


            <div className='text-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl absolute top-[25%] bottom-auto md:top-auto md:bottom-[25%]'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        cursor: '|',
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(firstSentence)
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(secondSentence)
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(thirdSentence)
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </div>
    )
}

export default Main