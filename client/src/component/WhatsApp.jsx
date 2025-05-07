import React, { useEffect, useState } from 'react';
import whatsappimg from '../assets/whatsapp-icon.png'

const WhatsAppButton = () => {
      const [pos, setPos] = useState({ x: 20, y: 0 });
      const [dragging, setDragging] = useState(false);
      const [offset, setOffset] = useState({ x: 0, y: 0 });
  
      // set initial Y based on viewport height
      useEffect(() => {
          const initialY = window.innerHeight - (window.innerHeight > 600 ? 150 : 100);
          setPos({ x: 20, y: initialY });
      }, []);
  
      // mouse + touch move/up
      useEffect(() => {
          const move = (clientX, clientY) => {
              setPos({
                  x: clientX - offset.x,
                  y: clientY - offset.y,
              });
          };
  
          const onMouseMove = e => dragging && move(e.clientX, e.clientY);
          const onTouchMove = e => {
              if (!dragging) return;
              const t = e.touches[0];
              move(t.clientX, t.clientY);
          };
          const end = () => setDragging(false);
  
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', end);
          window.addEventListener('touchmove', onTouchMove);
          window.addEventListener('touchend', end);
  
          return () => {
              window.removeEventListener('mousemove', onMouseMove);
              window.removeEventListener('mouseup', end);
              window.removeEventListener('touchmove', onTouchMove);
              window.removeEventListener('touchend', end);
          };
      }, [dragging, offset]);
  
      const handleStart = (clientX, clientY) => {
          setOffset({ x: clientX - pos.x, y: clientY - pos.y });
          setDragging(true);
      };
  
  return (
    <div
                    // inline fixed so it stays on top
                    style={{
                        position: 'fixed',
                        left: pos.x,
                        top: pos.y,
                        zIndex: 9999,
                        cursor: dragging ? 'grabbing' : 'grab',
                    }}
                    onMouseDown={e => handleStart(e.clientX, e.clientY)}
                    onTouchStart={e => {
                        const t = e.touches[0];
                        handleStart(t.clientX, t.clientY);
                    }}
                >
                    <a
                        href="https://wa.me/+971522073520"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={whatsappimg}
                            alt="WhatsApp"
                            className="w-12 md:w-20"
                        />
                    </a>
                </div>
  );
};

export default  WhatsAppButton