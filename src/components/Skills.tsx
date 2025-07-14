import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';

const services = [
  'Social Media Strategy',
  'Community Management',
  'Fan Engagement',
  'Content Strategy',
  'Go-To-Market Planning',
  'Web3 Marketing',
  'Video / Podcast Production',
  'Influencer and KOL Management',
  'Brand Partnership and Strategy',
];

const gridCols = 3; // 3 columns for a modern, minimal look

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 bg-white border-b border-neutral-200">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight mb-2 max-w-full break-words">
            Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 max-w-full break-words">
            What I offer for brands, creators, and communities
          </p>
        </div>
        {/* Services Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols} gap-6 bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800`}>
          {services.map((service, idx) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.04 }}
              className="flex items-center space-x-4 p-4 bg-white dark:bg-black rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-shadow"
            >
              <CheckSquare className="text-neutral-900 dark:text-white flex-shrink-0" size={28} />
              <span className="text-lg sm:text-xl font-semibold text-neutral-900 max-w-full break-words">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 