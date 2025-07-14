import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightbox, setLightbox] = useState<{ src: string; alt?: string } | null>(null);

  const projects = [
    {
      title: 'ApeFest',
      description: 'ApeFest is the annual global event for Bored Ape Yacht Club members, the iconic NFT collection that exploded in 2021. I led the multi-month social media, video production, and community strategy for the 2023 and 2024 editions, which featured major brand partnerships with BAPE, BMW, Michelin,and more.',
      media: [
        { type: 'image' as const, src: '/bayc1.png', alt: 'ApeFest Photo 1' },
        { type: 'image' as const, src: '/bayc2.png', alt: 'ApeFest Photo 2' },
        { type: 'image' as const, src: '/bayc3.png', alt: 'ApeFest Photo 3' },
        { type: 'image' as const, src: '/bayc4.png', alt: 'ApeFest Photo 4' }
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'IMDb Podcast Network Launch',
      description: 'Developed and launched IMDb\'s first podcast network, including the Webby nominated "Movies That Changed My Life" and "That Scene with Dan Patrick". Established new content verticals for the entertainment platform.',
      media: [
        { type: 'image' as const, src: '/mtcml.png', alt: 'Movies That Changed My Life' },
        { type: 'image' as const, src: '/isobsessed.png', alt: 'IMDb Is Obsessed' },
        { type: 'image' as const, src: '/thatscene.png', alt: 'That Scene with Dan Patrick' }
      ],
      liveUrl: '#',
      githubUrl: '#',
    }
  ];

  return (
    <section id="projects" className="py-8 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-4"
            >
              Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-none"
            >
              Featured
              <br />
              Work
            </motion.h2>
          </div>

          {/* Projects List */}
          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-lg shadow-sm p-8"
              >
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">{project.title}</h3>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">{project.description}</p>
                {/* Image Grid for ApeFest and IMDb Podcast Network Launch */}
                {project.title === 'ApeFest' ? (
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-4">
                    {project.media.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                        className="w-full aspect-[4/3] bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label={item.alt || 'View image'}
                      >
                        <img
                          src={item.src}
                          alt={item.alt || ''}
                          className="object-contain w-full h-full"
                        />
                        <span className="absolute top-2 right-2 bg-white/80 rounded-full p-1"><Eye size={18} /></span>
                      </button>
                    ))}
                  </div>
                ) : project.title === 'IMDb Podcast Network Launch' ? (
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {project.media.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                        className="w-full aspect-[4/3] bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label={item.alt || 'View image'}
                      >
                        <img
                          src={item.src}
                          alt={item.alt || ''}
                          className="object-contain w-full h-full"
                        />
                        <span className="absolute top-2 right-2 bg-white/80 rounded-full p-1"><Eye size={18} /></span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="mb-4">
                    <ProjectCarousel media={project.media} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Lightbox Modal */}
        {lightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setLightbox(null)}>
            <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow hover:bg-neutral-200 z-10"
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt || ''}
                className="w-full max-h-[80vh] object-contain rounded-lg border border-neutral-200 bg-white shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 