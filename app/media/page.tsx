'use client';

import { useState } from 'react';
import Header from '@/components/sections/header';
import Container from '@/components/ui/container';
import videos from '@/mock/media-videos-data';
import IVideos from '@/types/media-videos';

interface VideoPlayerProps {
  id: string;
  activeVideo: string | null;
  setActiveVideo: (id: string) => void;
}

const VideoPlayer = ({ id, activeVideo, setActiveVideo }: VideoPlayerProps) => {
  const play = activeVideo === id;

  return (
    <div
      className='relative w-full pt-[56.25%] cursor-pointer bg-black'
      onClick={() => setActiveVideo(id)}
      aria-label='Play video'
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setActiveVideo(id);
      }}
    >
      {!play && (
        <img
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt='Video thumbnail'
          loading='lazy'
          draggable={false}
        />
      )}
      {play && (
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      )}
    </div>
  );
};

const Media = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <Header className='static' />
      <main>
        <section className='py-12.5'>
          <Container>
            <div className='flex flex-col gap-y-12.5'>
              <h2 className='text-6xl font-bold text-[#BA1A33] text-center capitalize'>media</h2>

              <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-9'>
                {videos.map(({ id }: IVideos) => (
                  <li key={id}>
                    <VideoPlayer
                      id={id}
                      activeVideo={activeVideo}
                      setActiveVideo={setActiveVideo}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Media;
