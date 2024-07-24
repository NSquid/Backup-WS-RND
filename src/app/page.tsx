'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './navBar';
import Content from './mainContent';
import Footer from './footer';
import BaseBG from './background';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isScrollPaused, setIsScrollPaused] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1); 

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight && !isScrollPaused) {
      setIsScrollPaused(true);
      setTimeout(() => {
        setIsScrollPaused(false);
      }, 2000);
    }

    if (!isScrollPaused) {
      setOffsetY(scrollPosition);
      const fadeStart = 100; 
      const fadeEnd = 500; 
      const opacity = 1 - Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
      setTextOpacity(opacity);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollPaused]);

  const scale = Math.max(1, 2 - offsetY / 250);
  const topPosition = Math.min(50, 35 + offsetY / 40);
  const blur = Math.min(5, offsetY / 100);

  return (
    <main className="flex min-h-screen flex-col text-white">
      <BaseBG />
      <div style={{ flexGrow: 1, padding: '700px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{
          position: 'fixed',
          top: `${topPosition}%`,
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          filter: `blur(${blur}px)`,
          fontWeight: 'bold',
          fontSize: '2rem',
          zIndex: 1,
          opacity: textOpacity,
        }}>
          Bina Nusantara Computer Club
        </div>
        <Navbar />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', width: 'auto', margin: '0 auto', boxSizing: 'border-box'}}>
          <Content />
        </div>
        {/* <Footer /> */}
      </div>
    </main>
  );
}