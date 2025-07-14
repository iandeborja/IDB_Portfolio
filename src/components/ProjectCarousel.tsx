import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface ProjectCarouselProps {
  media: MediaItem[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ media }) => {
  const [current, setCurrent] = useState(0);
  if (!media || media.length === 0) return null;

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  const item = media[current];

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      <div className="relative w-full aspect-[16/9] bg-neutral-100 rounded-xl shadow-lg border border-neutral-200 flex items-center justify-center overflow-hidden transition-all duration-300">
        {item.type === 'image' ? (
          <img src={item.src} alt={item.alt || ''} className="object-contain w-full h-full transition-all duration-300" />
        ) : (
          <video controls className="object-contain w-full h-full rounded-xl">
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {media.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-700 shadow p-2 rounded-full transition-all duration-200 z-10 border border-neutral-200"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-700 shadow p-2 rounded-full transition-all duration-200 z-10 border border-neutral-200"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
      {media.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {media.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 border border-neutral-300 ${
                idx === current ? 'bg-neutral-800' : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel; 