import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolioData';

const About = () => {
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

    const { about } = portfolioData;

    return (
        <PageWrapper>
            <div className="about-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h1 className="heading-xl">{about.title.split(' ')[0]} <span className="text-gradient">{about.title.split(' ')[1] || ''}</span></h1>
            </div>

            <motion.div
                className="grid grid-cols-2"
                style={{ gap: '48px', alignItems: 'start' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="about-content">
                    <h2 className="heading-lg" style={{ marginBottom: '24px' }}>Who I am</h2>

                    {about.descriptions.map((desc, index) => (
                        <p key={index} className="text-lg" style={{ marginBottom: index === about.descriptions.length - 1 ? '32px' : '24px' }}>
                            {desc}
                        </p>
                    ))}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="glass" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <div style={{ color: 'var(--accent-1)' }}><GraduationCap size={40} /></div>
                            <div>
                                <h3 className="heading-md" style={{ marginBottom: '8px', fontSize: '1.2rem' }}>{about.education.degree}</h3>
                                <p className="text-base">{about.education.school} • {about.education.year}</p>
                            </div>
                        </div>

                        {about.achievements.map((achievement, index) => (
                            <div key={index} className="glass" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                                <div style={{ color: 'var(--accent-2)' }}><Award size={40} /></div>
                                <div>
                                    <h3 className="heading-md" style={{ marginBottom: '8px', fontSize: '1.2rem' }}>{achievement.title}</h3>
                                    <p className="text-base">{achievement.event} • {achievement.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="skills-section">
                    <h2 className="heading-lg" style={{ marginBottom: '24px' }}>My Skills</h2>
                    <div className="grid grid-cols-2" style={{ gap: '24px' }}>
                        {about.skills.map((skillGroup, index) => (
                            <div key={index} className="glass-card" style={{ padding: '24px' }}>
                                <h3 className="heading-md" style={{ marginBottom: '16px', fontSize: '1.2rem', color: 'var(--accent-1)' }}>
                                    {skillGroup.category}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <span key={skillIndex} style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            padding: '8px 16px',
                                            borderRadius: '8px',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </PageWrapper>
    );
};

export default About;
