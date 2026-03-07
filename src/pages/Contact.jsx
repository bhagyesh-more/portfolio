import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const { contact } = portfolioData;

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
            <div className="contact-header" style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h1 className="heading-xl">{contact.title.split(' ')[0]} <span className="text-gradient">{contact.title.split(' ')[1] || ''}</span></h1>
                <p className="text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {contact.subtitle}
                </p>
            </div>

            <motion.div
                className="grid grid-cols-2"
                style={{ gap: '64px', alignItems: 'start', maxWidth: '1000px', margin: '0 auto' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="contact-info">
                    <h2 className="heading-lg" style={{ marginBottom: '32px' }}>Get In Touch</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <div className="glass" style={{ padding: '16px', borderRadius: '50%', color: 'var(--accent-1)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="heading-md" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Email</h3>
                                <a href={`mailto:${contact.email}`} className="text-base" style={{ transition: 'color 0.3s' }}>
                                    {contact.email}
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <div className="glass" style={{ padding: '16px', borderRadius: '50%', color: 'var(--accent-2)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="heading-md" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Phone</h3>
                                <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="text-base" style={{ transition: 'color 0.3s' }}>
                                    {contact.phone}
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <div className="glass" style={{ padding: '16px', borderRadius: '50%', color: 'var(--accent-3)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="heading-md" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Location</h3>
                                <p className="text-base">{contact.location}</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px' }}>
                        <h3 className="heading-md" style={{ fontSize: '1.2rem', marginBottom: '24px' }}>Social Profiles</h3>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            {contact.socials.map((social, index) => (
                                <a key={index} href={social.url} className="glass" style={{ padding: '16px', borderRadius: '50%', color: 'var(--text-primary)', transition: 'transform 0.3s' }}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="contact-form glass-card" style={{ padding: '40px' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label htmlFor="name" className="text-base">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" style={{
                                padding: '16px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontFamily: 'inherit',
                                fontSize: '1rem',
                                outline: 'none'
                            }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label htmlFor="email" className="text-base">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" style={{
                                padding: '16px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontFamily: 'inherit',
                                fontSize: '1rem',
                                outline: 'none'
                            }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label htmlFor="message" className="text-base">Message</label>
                            <textarea id="message" rows="5" placeholder="How can I help you?" style={{
                                padding: '16px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontFamily: 'inherit',
                                fontSize: '1rem',
                                outline: 'none',
                                resize: 'none'
                            }}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '16px' }}>
                            Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </PageWrapper>
    );
};

export default Contact;
