'use client';

import productsMayonnaise from '@/mock/products-mayonnaise';
import ProductShowcaseTitle from './product-showcase-title';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import productsKetchup from '@/mock/products-ketchup';
import Container from '@/components/ui/container';
import productsSauce from '@/mock/products-sauce';
import { IProducts } from '@/types/products';
import { useRef, useState } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';

const ProductShowcase = () => {
  const [avtiveTab, setActiveTab] = useState({
    mayonnaise: true,
    ketchup: false,
    sauce: false,
  });

  const mayonnaiseTabHandler = () =>
    setActiveTab({
      mayonnaise: true,
      ketchup: false,
      sauce: false,
    });

  const ketchupTabHandler = () =>
    setActiveTab({
      mayonnaise: false,
      ketchup: true,
      sauce: false,
    });

  const sauceTabHandler = () =>
    setActiveTab({
      mayonnaise: false,
      ketchup: false,
      sauce: true,
    });

  const mayoRef = useRef<SwiperType | null>(null);
  const ketchupRef = useRef<SwiperType | null>(null);
  const sauceRef = useRef<SwiperType | null>(null);

  const getActiveSwiper = () => {
    if (avtiveTab.mayonnaise) return mayoRef.current;
    if (avtiveTab.ketchup) return ketchupRef.current;
    return sauceRef.current;
  };

  return (
    <section className='bg-[#B91A33] py-12 h-screen flex flex-col justify-center'>
      <Container>
        <div className='flex flex-col gap-y-5'>
          <ProductShowcaseTitle />
          <div className='grid grid-cols-[repeat(3,90px)] xs:grid-cols-[repeat(3,120px)] justify-center text-white xs:text-lg font-medium'>
            <button
              onClick={mayonnaiseTabHandler}
              className={`
              cursor-pointer py-2 border-b-2  
              ${avtiveTab.mayonnaise ? 'border-white' : 'border-[rgba(255,255,255,0.5)]'}
              `}
            >
              Mayonnaise
            </button>
            <button
              onClick={ketchupTabHandler}
              className={`cursor-pointer py-2 border-b-2  
              ${avtiveTab.ketchup ? 'border-white' : 'border-[rgba(255,255,255,0.5)]'}
              `}
            >
              Ketchup
            </button>
            <button
              onClick={sauceTabHandler}
              className={`cursor-pointer py-2 border-b-2  
              ${avtiveTab.sauce ? 'border-white' : 'border-[rgba(255,255,255,0.5)]'}
              `}
            >
              Sauce
            </button>
          </div>
          <div className='flex flex-col gap-y-6'>
            <div className={`${avtiveTab.mayonnaise ? 'block' : 'hidden'}`}>
              <Swiper
                loop={true}
                breakpoints={{
                  1020: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                onSwiper={(swiper) => (mayoRef.current = swiper)}
              >
                {productsMayonnaise.map((item: IProducts) => (
                  <SwiperSlide key={item.id}>
                    <div className='flex gap-x-5 text-white'>
                      <div className='overflow-hidden'>
                        <img
                          className='block h-96 object-contain'
                          src={item.imgSrc}
                          alt={item.title}
                        />
                      </div>
                      <div className='w-60 flex flex-col gap-y-2 justify-center'>
                        <p className='capitalize font-medium text-lg'>mayonnaise</p>
                        <h3 className='uppercase font-bold text-xl'>{item.title}</h3>
                        <p className='font-medium'>{item.totalWeight}</p>
                        <p className='text-sm line-clamp-3'>{item.desc}</p>
                        <div>
                          <Link
                            href={`/mayonnaise/${item.id}`}
                            className='hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-medium capitalize py-2 px-4 border border-white rounded-sm inline-block'
                          >
                            details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={`${avtiveTab.ketchup ? 'block' : 'hidden'}`}>
              <Swiper
                slidesPerView={3}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  1020: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                onSwiper={(swiper) => (ketchupRef.current = swiper)}
              >
                {productsKetchup.map((item: IProducts) => (
                  <SwiperSlide key={item.id}>
                    <div className='flex gap-x-5 text-white'>
                      <div className='overflow-hidden'>
                        <img
                          className='block h-96 object-contain'
                          src={item.imgSrc}
                          alt={item.title}
                        />
                      </div>
                      <div className='w-60 flex flex-col gap-y-2 justify-center'>
                        <p className='capitalize font-medium text-lg'>ketchup</p>
                        <h3 className='uppercase font-bold text-xl'>{item.title}</h3>
                        <p className='font-medium'>{item.totalWeight}</p>
                        <p className='text-sm line-clamp-3'>{item.desc}</p>
                        <div className='flex'>
                          <Link
                            href={`/ketchup/${item.id}`}
                            className='hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-medium capitalize py-2 px-4 border border-white rounded-sm'
                          >
                            details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={`${avtiveTab.sauce ? 'block' : 'hidden'}`}>
              <Swiper
                slidesPerView={3}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  1020: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                onSwiper={(swiper) => (sauceRef.current = swiper)}
              >
                {productsSauce.map((item: IProducts) => (
                  <SwiperSlide key={item.id}>
                    <div className='flex gap-x-5 text-white'>
                      <div className='overflow-hidden'>
                        <img
                          className='block h-96 object-contain'
                          src={item.imgSrc}
                          alt={item.title}
                        />
                      </div>
                      <div className='w-60 flex flex-col gap-y-2 justify-center'>
                        <p className='capitalize font-medium text-lg'>sauce</p>
                        <h3 className='uppercase font-bold text-xl'>{item.title}</h3>
                        <p className='font-medium'>{item.totalWeight}</p>
                        <p className='text-sm line-clamp-3'>{item.desc}</p>
                        <div className='flex'>
                          <Link
                            href={`/sauce/${item.id}`}
                            className='hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-medium capitalize py-2 px-4 border border-white rounded-sm'
                          >
                            details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='flex gap-x-10 justify-center items-center'>
              <button
                onClick={() => getActiveSwiper()?.slidePrev()}
                className='cursor-pointer text-white'
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={() => getActiveSwiper()?.slideNext()}
                className='cursor-pointer text-white'
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
