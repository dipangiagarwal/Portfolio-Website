import { useRef } from 'react';

/**
 * TiltCard — adds a subtle 3D tilt that follows the mouse.
 * Respects prefers-reduced-motion (disabled via CSS).
 */
export default function TiltCard({ children, className = '', max = 8, scale = 1.015 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(1000px) rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(${scale})`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
