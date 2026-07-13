import { motion } from 'framer-motion';

// Lightweight scroll-in wrapper: fades + lifts children into view once.
const Reveal = ({ children, delay = 0, y = 16, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
