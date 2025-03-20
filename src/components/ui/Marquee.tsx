"use client";

import type React from "react";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  fadeWidth?: number;
  reverse?: boolean;
  pingPong?: boolean;
}

export default function Marquee({
  children,
  direction = "horizontal",
  speed = 40,
  pauseOnHover = true,
  className = "",
  fadeWidth = 100,
  reverse = false,
  pingPong = false,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const isReversedRef = useRef(reverse);
  const isPausedRef = useRef(false);

  // Setup and cleanup animation
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let containerSize = 0;
    let contentSize = 0;
    let maxPosition = 0;

    // Function to update sizes
    const updateSizes = () => {
      if (direction === "horizontal") {
        containerSize = container.offsetWidth;
        contentSize = content.scrollWidth;
      } else {
        containerSize = container.offsetHeight;
        contentSize = content.scrollHeight;
      }
      maxPosition = Math.max(0, contentSize - containerSize);

      // Reset position if needed
      if (positionRef.current > maxPosition) {
        positionRef.current = maxPosition;
        updateTransform();
      }
    };

    // Function to update transform
    const updateTransform = () => {
      if (!content) return;
      const transform =
        direction === "horizontal"
          ? `translateX(-${positionRef.current}px)`
          : `translateY(-${positionRef.current}px)`;
      content.style.transform = transform;
    };

    // Animation function
    const animate = () => {
      if (!isPausedRef.current && maxPosition > 0) {
        // Calculate movement (pixels per frame)
        const pixelsPerSecond = speed * 10;
        const movement = pixelsPerSecond / 60; // Assuming 60fps

        if (pingPong) {
          // Ping-pong animation
          if (isReversedRef.current) {
            positionRef.current = Math.max(0, positionRef.current - movement);
            if (positionRef.current <= 0) {
              isReversedRef.current = false;
            }
          } else {
            positionRef.current = Math.min(
              maxPosition,
              positionRef.current + movement
            );
            if (positionRef.current >= maxPosition) {
              isReversedRef.current = true;
            }
          }
        } else {
          // Continuous scrolling
          if (isReversedRef.current) {
            positionRef.current -= movement;
            if (positionRef.current < 0) {
              positionRef.current = maxPosition;
            }
          } else {
            positionRef.current += movement;
            if (positionRef.current > maxPosition) {
              positionRef.current = 0;
            }
          }
        }

        updateTransform();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Setup resize observer for responsive behavior
    const resizeObserver = new ResizeObserver(updateSizes);
    resizeObserver.observe(container);
    resizeObserver.observe(content);

    // Initial setup
    updateSizes();
    positionRef.current = reverse ? maxPosition : 0;
    updateTransform();

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Event listeners for pause on hover
    const handleMouseEnter = () => {
      if (pauseOnHover) isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) isPausedRef.current = false;
    };

    if (pauseOnHover) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();

      if (pauseOnHover) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [direction, speed, pauseOnHover, reverse, pingPong, children]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          direction === "horizontal"
            ? `linear-gradient(90deg, transparent, white ${fadeWidth}px, white calc(100% - ${fadeWidth}px), transparent)`
            : `linear-gradient(0deg, transparent, white ${fadeWidth}px, white calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage:
          direction === "horizontal"
            ? `linear-gradient(90deg, transparent, white ${fadeWidth}px, white calc(100% - ${fadeWidth}px), transparent)`
            : `linear-gradient(0deg, transparent, white ${fadeWidth}px, white calc(100% - ${fadeWidth}px), transparent)`,
      }}
    >
      <div
        ref={contentRef}
        style={{
          display: "inline-flex",
          flexDirection: direction === "horizontal" ? "row" : "column",
          willChange: "transform", // Hint for browser optimization
          transform: "translate3d(0, 0, 0)", // Force GPU acceleration
        }}
      >
        {children}
      </div>
    </div>
  );
}
