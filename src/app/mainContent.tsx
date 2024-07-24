import React, { useEffect, useRef, useState } from 'react';

const MainContent: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const updateImgHeight = () => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.offsetHeight);
      }
    };

    if (imgRef.current) {
      imgRef.current.onload = updateImgHeight;
    }
    
    window.addEventListener('resize', updateImgHeight);
    return () => window.removeEventListener('resize', updateImgHeight);
  }, []);

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100vw',
      maxWidth: '100%',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: `${imgHeight / 2}px`, 
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(180deg, rgba(25, 25, 25, 0) -100%, #262662 5%, #04042D 80%)`,
        zIndex: 0, 
      }}></div>
      <img ref={imgRef} src="/hpStuff.png" alt="Picture A" style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        position: 'relative',
        zIndex: 2, 
      }} />
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#FFFFFF',
        marginTop: `40px`,
        padding: '100px 100px 400px 100px',
        zIndex: 2,
      }}>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '48px' }}>Where Technology</h1>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '48px' }}>Placed in Kota Kembang</h2>
        <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>#VIVABNCC</p>
      </div>
    </div>
  );
};

export default MainContent;
