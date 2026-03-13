'use client';

import Header from '@/components/sections/header';
import Container from '@/components/ui/container';
import recipesData from '@/mock/recipes-data';
import { useParams } from 'next/navigation';

const RecipeDetailPage = () => {
  const { id } = useParams();

  const data = recipesData.find((item) => item.id == id);

  return (
    <>
      <Header className='static' />
      <main>
        <section className='py-12'>
          <Container>
            <div className='grid grid-cols-1 gap-y-4 gap-x-12 lg:grid-cols-2'>
              <div>
                <img src={data?.imgSrc} alt={data?.title} />
              </div>
              <div className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-[#afafaf] text-xl xl:text-2xl font-semibold'>Recipe</span>
                  <h4 className='text-xl xl:text-2xl text-[#000000] font-bold'>{data?.title}</h4>
                </div>

                <div className='flex flex-col gap-y-2'>
                  <h5 className='text-lg xl:text-xl text-[#222222] font-bold'>Ingredients:</h5>
                  <ul className='flex flex-col gap-y-1'>
                    {data?.ingredients.map((ingredient, index) => (
                      <li key={index} className='text-[#4d4d4d] font-semibold xl:text-lg'>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className='text-lg xl:text-xl text-[#222222] font-bold'>Preparation</h5>
                  <p className='text-[#4d4d4d] xl:text-xl font-semibold'>{data?.preparation}</p>
                </div>

                <div className='max-h-100 w-full shadow-[0_0_5px_rgba(0,0,0,0.2)] overflow-hidden bg-black'>
                  <video src={data?.videoSrc} controls className='h-full w-full'></video>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default RecipeDetailPage;
