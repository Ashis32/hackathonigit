"use client";
import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  transition?: object;
  initial?: object;
  animate?: object;
  exit?: object;
  animatePresenceMode?: 'wait' | 'popLayout' | 'sync';
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last' | 'center' | 'random' | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: 'characters' | 'words' | 'lines';
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = forwardRef<{ 
  next: () => void; 
  previous: () => void; 
  jumpTo: (index: number) => void; 
  reset: () => void 
}, RotatingTextProps>((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitText = useCallback((text: string) => {
    switch (splitBy) {
      case 'words':
        return text.split(' ');
      case 'lines':
        return text.split('\n');
      default:
        return text.split('');
    }
  }, [splitBy]);

  const calculateStagger = useCallback(
    (index: number, total: number) => {
      switch (staggerFrom) {
        case 'first':
          return index * staggerDuration;
        case 'last':
          return (total - 1 - index) * staggerDuration;
        case 'center':
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        case 'random':
          return Math.random() * staggerDuration;
        default:
          return Math.abs(
            (typeof staggerFrom === 'number' ? staggerFrom : 0) - index
          ) * staggerDuration;
      }
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      setCurrentTextIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  const next = useCallback(() => {
    const nextIndex =
      currentTextIndex === texts.length - 1
        ? loop
          ? 0
          : currentTextIndex
        : currentTextIndex + 1;
    handleIndexChange(nextIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex =
      currentTextIndex === 0
        ? loop
          ? texts.length - 1
          : currentTextIndex
        : currentTextIndex - 1;
    handleIndexChange(prevIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < texts.length) {
        handleIndexChange(index);
      }
    },
    [texts.length, handleIndexChange]
  );

  const reset = useCallback(() => {
    handleIndexChange(0);
  }, [handleIndexChange]);

  useImperativeHandle(ref, () => ({
    next,
    previous,
    jumpTo,
    reset,
  }));

  const elements = splitText(texts[currentTextIndex]);

  return (
    <motion.span className={mainClassName}>
      <AnimatePresence initial={animatePresenceInitial} mode={animatePresenceMode}>
        <motion.div
          key={currentTextIndex}
          initial={initial as { y: string, opacity: number }}
animate={animate as { y: number, opacity: number }}
exit={exit as { y: string, opacity: number }}
          transition={transition}
        >
          {elements.map((element, index) => (
            <motion.span
              key={index}
              className={elementLevelClassName}
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: calculateStagger(index, elements.length) }}
            >
              {element}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;