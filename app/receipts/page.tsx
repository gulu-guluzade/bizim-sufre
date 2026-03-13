import Header from '@/components/sections/header';
import Container from '@/components/ui/container';
import recipesData from '@/mock/recipes-data';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const Receipts = () => {
  return (
    <>
      <Header className='static' />
      <main>
        <section className='py-12 bg-[#F8F8F8]'>
          <Container>
            <div className='flex flex-col gap-y-12'>
              <div>
                <h2 className='text-[40px] lg:text-6xl font-bold text-[#BA1A33] text-center capitalize'>
                  Receipts
                </h2>
              </div>
              <ul className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
                {recipesData.map(({ id, imgSrc, title }) => (
                  <li
                    key={id}
                    className='relative bg-white flex flex-col gap-4 group/item overflow-hidden transition-all duration-300 shadow-[0_0_5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]'
                  >
                    <Link href={`/receipts/${id}`} className='absolute inset-0'></Link>
                    <div className='sm:h-72 md:h-88 lg:h-76.75 xl:h-97.5 overflow-hidden'>
                      <img className='block w-full h-full object-cover' src={imgSrc} alt={title} />
                    </div>
                    <div className='flex flex-col gap-y-2 p-[0_16px_16px_16px]'>
                      <span className='text-[#afafaf] text-xl font-semibold'>Recipe</span>
                      <h4 className='text-xl text-[#222222] font-bold'>{title}</h4>
                      <MoveRight
                        stroke='#BA1A33'
                        className='opacity-0 transition-all duration-300 group-hover/item:opacity-100'
                      />
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

export default Receipts;
