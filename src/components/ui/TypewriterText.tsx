import { motion } from "framer-motion";

const text = "The Essence of Luxury Perfume";

const TypewriterText = () => {
  return (
    <motion.div
      className="relative z-20 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <p className="mb-[15%] text-3xl text-[#f8f5f0] uppercase" style={{
              textShadow: `
      0 0 1px #f8f5f0,
      0 0 2px #f8f5f0,
      0 0 4px #f8f5f0,
      0 0 4px #f8f5f0 
    `,
            }}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: index * 0.1, // stagger each character
            }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default TypewriterText;
