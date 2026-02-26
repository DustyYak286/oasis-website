"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

interface ScrollScrubWord {
  text: string;
  className?: string;
}

interface ScrollScrubTypewriterProps {
  words: ScrollScrubWord[];
  className?: string;
  caretClassName?: string;
}

interface CharacterToken {
  char: string;
  className?: string;
}

export function ScrollScrubTypewriter({
  words,
  className,
  caretClassName,
}: ScrollScrubTypewriterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const characters = useMemo<CharacterToken[]>(() => {
    return words.flatMap((word, wordIndex) => {
      const tokens = word.text.split("").map((char) => ({
        char,
        className: word.className,
      }));

      if (wordIndex < words.length - 1) {
        tokens.push({ char: " ", className: word.className });
      }

      return tokens;
    });
  }, [words]);

  const totalCharacters = characters.length;
  const fullText = useMemo(() => words.map((word) => word.text).join(" "), [words]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92%", "start 30%"],
  });

  const [visibleCharacters, setVisibleCharacters] = useState(() => {
    const initialProgress = Math.min(1, Math.max(0, scrollYProgress.get()));
    return Math.round(initialProgress * totalCharacters);
  });
  const visibleCharactersRef = useRef(visibleCharacters);

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      const currentProgress = Math.min(1, Math.max(0, scrollYProgress.get()));
      const nextCharacterCount = shouldReduceMotion
        ? totalCharacters
        : Math.round(currentProgress * totalCharacters);

      visibleCharactersRef.current = nextCharacterCount;
      setVisibleCharacters((previousValue) =>
        previousValue === nextCharacterCount ? previousValue : nextCharacterCount
      );
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [shouldReduceMotion, totalCharacters, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latestProgress) => {
    if (shouldReduceMotion) return;

    const clampedProgress = Math.min(1, Math.max(0, latestProgress));
    const nextCharacterCount = Math.round(clampedProgress * totalCharacters);

    if (nextCharacterCount === visibleCharactersRef.current) return;

    visibleCharactersRef.current = nextCharacterCount;
    setVisibleCharacters(nextCharacterCount);
  });

  const resolvedVisibleCharacters = shouldReduceMotion
    ? totalCharacters
    : visibleCharacters;
  const showCaret = !shouldReduceMotion;

  return (
    <div ref={containerRef} className={className}>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true" className="whitespace-pre-wrap">
        {characters.map((token, index) => (
          <span key={`char-${index}`}>
            {showCaret && resolvedVisibleCharacters === index && (
              <span
                className={cn(
                  "inline-block h-[1em] w-[2px] translate-y-[0.08em] align-baseline bg-blue-500",
                  caretClassName
                )}
              />
            )}
            <span
              className={cn(
                "transition-opacity duration-75",
                token.className,
                index < resolvedVisibleCharacters ? "opacity-100" : "opacity-0"
              )}
            >
              {token.char}
            </span>
          </span>
        ))}
        {showCaret && resolvedVisibleCharacters === totalCharacters && (
          <span
            className={cn(
              "inline-block h-[1em] w-[2px] translate-y-[0.08em] align-baseline bg-blue-500",
              caretClassName
            )}
          />
        )}
      </span>
    </div>
  );
}
