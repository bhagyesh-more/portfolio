import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
    const { projects } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <PageWrapper>
            <div className="projects-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h1 className="heading-xl">{projects.title.split(' ')[0]} <span className="text-gradient">{projects.title.split(' ')[1] || ''}</span></h1>
                <p className="text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {projects.subtitle}
                </p>
            </div>

            <motion.div
                className="grid grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.list.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card project-card"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: `linear-gradient(90deg, ${project.color}, transparent)`
                        }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                            <div className="glass" style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)' }}>
                                {project.icon}
                            </div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <a href={project.github} className="glass" style={{ padding: '8px', borderRadius: '50%', color: 'var(--text-primary)' }}><Github size={20} /></a>
                                <a href={project.demo} className="glass" style={{ padding: '8px', borderRadius: '50%', color: 'var(--text-primary)' }}><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <h3 className="heading-md" style={{ marginBottom: '16px' }}>{project.title}</h3>
                        <p className="text-base" style={{ marginBottom: '24px', flexGrow: 1 }}>{project.description}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="glass" style={{
                                    padding: '4px 12px',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    color: project.color,
                                    background: `rgba(255,255,255,0.03)`
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </PageWrapper>
    );
};

export default Projects;
