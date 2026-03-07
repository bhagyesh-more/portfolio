import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, User, Mail } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
        { name: 'About', path: '/about', icon: <User size={20} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
    ];

    return (
        <motion.nav
            className="navbar glass"
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        >
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    {item.icon}
                    <span className="hidden sm:inline">{item.name}</span>
                </NavLink>
            ))}
        </motion.nav>
    );
};

export default Navbar;
