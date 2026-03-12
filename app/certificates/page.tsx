'use client';

import certificateData from '@/mock/certificates-data';
import ICertificatesData from '@/types/certificate';
import Header from '@/components/sections/header';
import Container from '@/components/ui/container';
import Link from 'next/link';

const Certificates = () => {
  return (
    <>
      <Header className='static'></Header>
      <main>
        <section className='py-12 bg-[#F8F8F8]'>
          <Container>
            <div className='flex flex-col gap-y-12'>
              <div>
                <h2 className='text-[40px] lg:text-6xl font-bold text-[#BA1A33] text-center capitalize'>
                  certificates
                </h2>
              </div>
              <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
                {certificateData.map(({ id, title, date, imgSrc, href }: ICertificatesData) => (
                  <li
                    key={id}
                    className='h-full flex flex-col gap-y-7 relative shadow-[0_0_5px_rgba(0,0,0,0.2)] p-4 bg-white rounded-xl'
                  >
                    <Link
                      href={href}
                      title={`${title} PDF`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='absolute inset-0'
                    ></Link>
                    <div className='grow flex items-center overflow-hidden rounded-xl'>
                      <img className='w-full' src={imgSrc} alt={title} />
                    </div>

                    <div>
                      <p className='text-xl font-bold'>{title}</p>
                      <time className='font-medium'>{date}</time>
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
