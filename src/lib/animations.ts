import { Variants } from "framer-motion";

export const sectionVariants: Variants = {
  initial: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(10px)'
  }),
  animate: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] // Custom luxury ease (bezier)
    }
  },
  exit: (direction: number) => ({
    y: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(10px)',
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const contentFade: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: "easeOut",
      delay: 0.3
    } 
  }
};