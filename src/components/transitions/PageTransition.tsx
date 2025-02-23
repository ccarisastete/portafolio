import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  return (
    <AnimatePresence
      mode='wait'
      initial={false}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3 },
        }}
        className='page-transition'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
