"use client";

import React, { JSX, useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
} & Record<string, any>;

export default function Reveal({
  as = "div",
  className,
  children,
  threshold = 0.2,
  rootMargin = "0px",
  once = true,
  ...rest
}: RevealProps) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          entry.isIntersecting || (entry.intersectionRatio ?? 0) > 0;
        setVisible(isVisible);
        if (isVisible && once) observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className ?? ""} ${visible ? "is-visible" : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}