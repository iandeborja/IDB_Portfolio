import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ian-de-borja-61954230/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/iandeborja_', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:workwithidb@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white dark:text-black">Ian de Borja</h3>
              <p className="text-neutral-300 dark:text-neutral-600 leading-relaxed">
                Senior Marketing Leader, Pop-Culture Fanatic, and All Around Nice Guy passionate about building communities 
                and creating meaningful brand experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white dark:text-black">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-neutral-300 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-neutral-300 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors duration-200">
                    Expertise
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-neutral-300 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors duration-200">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-300 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white dark:text-black">Contact</h4>
              <div className="space-y-2 text-neutral-300 dark:text-neutral-600">
                <p>workwithidb@gmail.com</p>
                <p>Seattle, WA</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 dark:border-neutral-300 pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-neutral-400 dark:text-neutral-500 text-sm">
                © {currentYear} Ian de Borja. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className="p-2 bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-700 dark:hover:bg-neutral-300 text-neutral-300 dark:text-neutral-600 hover:text-white dark:hover:text-black rounded transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center text-neutral-500 dark:text-neutral-400 text-sm">
            <p>
              Built with purpose using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 