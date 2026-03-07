import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const PageWrapper = ({ children, className = '' }) => {
    return (
        <motion.main
            className={`page-content container ${className}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {children}
        </motion.main>
    );
};

export default PageWrapper;
