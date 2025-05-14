import React, { useEffect, useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  const [pos, setPos] = useState({ x: 20, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
  const initialY = window.innerHeight - 100; // Distance from bottom
  const initialX = window.innerWidth - 80;   // Distance from right (~60px button + 20px margin)
  setPos({ x: initialX, y: initialY });
}, []);


  useEffect(() => {
    const move = (clientX, clientY) => {
      setPos({
        x: clientX - offset.x,
        y: clientY - offset.y,
      });
    };

    const onMouseMove = (e) => dragging && move(e.clientX, e.clientY);
    const onTouchMove = (e) => {
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
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        zIndex: 9999,
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onTouchStart={(e) => {
        const t = e.touches[0];
        handleStart(t.clientX, t.clientY);
      }}
    >
      <a
        href="https://wa.me/+971522073520"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp className="w-12 h-12 md:w-16 md:h-16 text-green-500 hover:text-green-600 transition duration-300" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
