import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      // Animation complete, no further updates needed
      // You can add a callback here if needed for parent component notification
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;

