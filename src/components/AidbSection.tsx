import React from 'react';

const AidbSection: React.FC = () => {
  return (
    <section id="aidb" className="py-16 bg-white border-b border-neutral-200">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight mb-4">
          project (a)idb
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mb-12">
          I know absolutely nothing about writing code, but I picked up vibe coding in June 2025 and it has become one of my favorite hobbies. I've since made a personal goal to create and publish some sort of project twice a month.  
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-8 flex flex-col justify-between h-full min-h-[380px]">
            <div className="w-full aspect-[3/2] bg-neutral-100 rounded mb-6 flex items-center justify-center overflow-hidden">
              <a href="https://blindboxd.xyz" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img src="/blindboxd.png" alt="BLINDBOXD project screenshot" className="object-contain w-full h-full rounded" />
              </a>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">BLINDBOXD</h3>
            <p className="text-neutral-600 mb-6">BLINDBOXD is a webapp that lets you create Top 10 Movie lists without seeing what the picks are ahead of time.</p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-8 flex flex-col justify-between h-full min-h-[380px]">
            <div className="w-full aspect-[3/2] rounded mb-6 flex items-center justify-center overflow-hidden">
              <video controls className="object-contain w-full h-full rounded">
                <source src="/supercontest.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">The Supercontest</h3>
            <p className="text-neutral-600 mb-6">My friends and I do an annual NFL Supercontest league. My friend who hosts it has typically managed the entire league with a spreadsheet, so I built a website for us to use instead.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AidbSection; 