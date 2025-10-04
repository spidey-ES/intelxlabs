'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  duration?: number;
}

const PercentageCircle: React.FC<CircleProps> = ({
  percentage,
  size = 80,
  strokeWidth = 4,
  duration = 1500,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const progressPercentage = Math.min(
        (elapsed / duration) * percentage,
        percentage
      );

      setProgress(progressPercentage);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, percentage, duration]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className='flex items-center justify-center relative'>
      <svg width={size} height={size} className='rotate-[-90deg]'>
        <circle
          stroke='#e5e7eb'
          fill='transparent'
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke='#10b981'
          fill='transparent'
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: 'stroke-dashoffset 0.2s ease-out' }}
        />
      </svg>

      <span className='absolute text-lg font-semibold text-gray-800'>
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default PercentageCircle;
