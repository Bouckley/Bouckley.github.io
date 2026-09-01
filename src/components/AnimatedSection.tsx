import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance travelled on entrance, in px. */
  distance?: number;
  as?: "div" | "section" | "li";
}

/**
 * Fades content up as it enters the viewport. Respects prefers-reduced-motion
 * by rendering the final state immediately rather than animating to it.
 */
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  distance = 12,
  as = "div",
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0, 0, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedSection;
