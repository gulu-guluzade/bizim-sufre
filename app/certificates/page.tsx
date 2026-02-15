'use client';

import Header from '@/components/sections/header';
import Container from '@/components/ui/container';
import certificateData from '@/mock/certificates-data';
import { X, ZoomIn } from 'lucide-react';
import { useEffect, useState } from 'react';

const Certificates = () => {
  const [modalWindow, setModalWindow] = useState({ imgSrc: '', imgAlt: '', status: false });

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') setModalWindow({ ...modalWindow, status: false });
  };

  useEffect(() => {
    if (!modalWindow.status) return;

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [modalWindow.status]);

  return (
    <>
      {modalWindow.status && (
        <div
          className={`flex justify-center items-center fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50`}
          onClick={() => setModalWindow({ ...modalWindow, status: false })}
        >
          <div className='fixed right-10 top-10'>
            <button
              className='cursor-pointer'
              onClick={() => setModalWindow({ ...modalWindow, status: false })}
            >
              <X size={40} stroke='white' />
            </button>
          </div>
          <div className='w-[65%] sm:w-[50%] md:w-[30%]' onClick={(e) => e.stopPropagation()}>
            <img
              className='block w-full object-cover'
              src={modalWindow.imgSrc}
              alt={modalWindow.imgAlt}
            />
          </div>
        </div>
      )}

      <Header className='static'></Header>
      <main>
        <section className='py-12 bg-[#F8F8F8]'>
          <Container>
            <div className='flex flex-col gap-y-12'>
              <div>
                <h2 className='text-6xl font-bold text-[#BA1A33] text-center capitalize'>certificates</h2>
              </div>
              <ul className='grid grid-cols-4 gap-12'>
                {certificateData.map(({ id, title, date, imgSrc }) => (
                  <li key={id}>
                    <div className='h-full flex flex-col gap-y-7'>
                      <div className='relative grow cursor-pointer bg-white flex items-center overflow-hidden rounded-xl'>
                        <div
                          className='absolute inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 hover:opacity-100 duration-600'
                          onClick={() =>
                            setModalWindow({ imgSrc: imgSrc, imgAlt: title, status: true })
                          }
                        >
                          <ZoomIn color='white' size={45} />
                        </div>
                        <img src={imgSrc} alt={title} />
                      </div>

                      <div>
                        <p className='text-xl font-bold'>{title}</p>
                        <time className='font-medium'>{date}</time>
                      </div>
                    </div>
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

export default Certificates;
