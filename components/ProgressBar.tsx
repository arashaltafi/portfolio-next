"use client"

import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(scrollPercentage);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-500 z-50">
            <div
                className="h-full bg-sky-500"
                style={{
                    width: `${scrollPercentage}%`,
                    transition: 'width 0.2s ease-in-out',
                }}
            />
        </div>
    )
}

export default ProgressBar