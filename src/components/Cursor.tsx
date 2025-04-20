import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    // Only add cursor on desktop devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      addEventListeners();
      setHidden(false);
    }

    return () => {
      removeEventListeners();
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <div 
      className={`fixed top-0 left-0 z-50 pointer-events-none ${hidden ? 'opacity-0' : 'opacity-100'}`}
      style={{ 
        transition: 'opacity 0.3s ease, transform 0.2s ease'
      }}
    >
      {/* Outer circle (delayed follow) */}
      <div
        className={`w-8 h-8 rounded-full fixed border-2 ${
          linkHovered 
            ? 'border-purple-400 scale-150' 
            : clicked 
              ? 'border-blue-400 scale-75' 
              : 'border-white'
        } transition-transform duration-300 ease-out mix-blend-difference`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
      
      {/* Inner dot (follows cursor exactly) */}
      <div
        className={`w-2 h-2 rounded-full fixed bg-white ${
          linkHovered 
            ? 'opacity-0' 
            : clicked 
              ? 'opacity-0' 
              : 'opacity-100'
        } transition-opacity duration-300 ease-out mix-blend-difference`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </div>
  );
};