import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [variant, setVariant] = useState<'default' | 'link'>('default');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8); // Center the dot
      mouseY.set(e.clientY - 8);
    };

    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button');
    const enter = () => setVariant('link');
    const leave = () => setVariant('default');

    links.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        height: variant === 'link' ? 30 : 16,
        width: variant === 'link' ? 30 : 16,
        backgroundColor: variant === 'link' ? '#f59e0b' : '#fff',
        borderRadius: '9999px',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CustomCursor;
