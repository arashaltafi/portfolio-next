'use client';

import { useEffect, useState } from 'react';

interface CursorProps {
  className: string
}

const Cursor = (props: CursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
  }, [])

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
  }

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <div
        className={`fixed w-[900%] h-[130%] z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ${props.className}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <div
        className={`fixed rounded-full size-12 z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch2 ${props.className}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

export default Cursor
