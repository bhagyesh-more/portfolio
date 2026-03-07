import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolioData';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <PageWrapper>
            <motion.div
                className="home-content grid"
                style={{ gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', alignItems: 'center', gap: '48px', minHeight: '80vh' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="hero-text">
                    <motion.div variants={itemVariants} className="badge glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px' }}>
                        <span className="text-gradient" style={{ fontWeight: 600 }}>{portfolioData.home.badgeText}</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="heading-xl">
                        {portfolioData.home.titlePrefix} <br />
                        <span className="text-gradient">{portfolioData.home.titleHighlight}</span> <br />
                        {portfolioData.home.titleSuffix}
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg" style={{ marginBottom: '40px', maxWidth: '600px' }}>
                        {portfolioData.home.description}
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px' }}>
                        <Link to="/projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="hero-visuals glass-card" style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                    <div className="tech-stack-row" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {portfolioData.home.techIcons.slice(0, 2).map((iconObj) => (
                            <div key={iconObj.id} className="glass" style={{ padding: '24px', borderRadius: '50%', color: iconObj.colorClass, transform: iconObj.transform || 'none' }}>
                                {iconObj.icon}
                            </div>
                        ))}
                    </div>
                    <div className="tech-stack-row" style={{ display: 'flex', justifyContent: 'center' }}>
                        {portfolioData.home.techIcons.slice(2, 3).map((iconObj) => (
                            <div key={iconObj.id} className="glass" style={{ padding: '24px', borderRadius: '50%', color: iconObj.colorClass, transform: iconObj.transform || 'none' }}>
                                {iconObj.icon}
                            </div>
                        ))}
                    </div>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.2), transparent)', borderRadius: 'inherit', zIndex: -1 }}></div>
                </motion.div>
            </motion.div>
        </PageWrapper>
    );
};

export default Home;
