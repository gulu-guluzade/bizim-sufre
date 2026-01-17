"use client";

import mayonnaiseSliderData from "@/mock/mayonnaise-slider-data";
import IProductSliderData from "@/types/product-slider-data";
import ProductShowcaseTitle from "./product-showcase-title";
import ketchupSliderData from "@/mock/ketchup-slider-data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sauceSliderData from "@/mock/sauce-slider-data";
import Container from "@/components/ui/container";
import { useRef, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper/types";
import 'swiper/css';


const ProductShowcase = () => {
  const [avtiveTab, setActiveTab] = useState(
    {
      mayonnaise: true,
      ketchup: false,
      sauce: false,
    }
  );

  const mayonnaiseTabHandler = () => setActiveTab({
    mayonnaise: true,
    ketchup: false,
    sauce: false,
  });

  const ketchupTabHandler = () => setActiveTab({
    mayonnaise: false,
    ketchup: true,
    sauce: false,
  });

  const sauceTabHandler = () => setActiveTab({
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
    <section className="bg-[#B91A33] py-12 h-screen flex flex-col justify-center">
      <Container>
        <div className="flex flex-col gap-y-5">
          <ProductShowcaseTitle />
          <div className="grid grid-cols-[repeat(3,90px)] xs:grid-cols-[repeat(3,120px)] justify-center text-white xs:text-lg font-medium">
            <button onClick={mayonnaiseTabHandler} className={`
              cursor-pointer py-2 border-b-2  
              ${avtiveTab.mayonnaise ? "border-white" : "border-[rgba(255,255,255,0.5)]"}
              `}>Mayonnaise
            </button>
            <button onClick={ketchupTabHandler} className={
              `cursor-pointer py-2 border-b-2  
              ${avtiveTab.ketchup ? "border-white" : "border-[rgba(255,255,255,0.5)]"}
              `}>Ketchup
            </button>
            <button onClick={sauceTabHandler} className={
              `cursor-pointer py-2 border-b-2  
              ${avtiveTab.sauce ? "border-white" : "border-[rgba(255,255,255,0.5)]"}
              `}>Sauce
            </button>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className={`${avtiveTab.mayonnaise ? "block" : "hidden"}`}>
              <Swiper loop={true}
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

                onSwiper={(swiper) => (mayoRef.current = swiper)}>
                {
                  mayonnaiseSliderData.map((item: IProductSliderData) => (
                    <SwiperSlide key={item.id}>
                      <div className="flex gap-x-5 text-white">
                        <div className="overflow-hidden">
                          <img className="block h-96 object-contain" src={item.imageUrl} alt={item.title} />
                        </div>
                        <div className="w-60 flex flex-col gap-y-2 justify-center">
                          <p className="capitalize font-medium text-lg">{item.productCategory}</p>
                          <h3 className="uppercase font-bold text-xl">{item.title}</h3>
                          <p className="font-medium">{item.weight}</p>
                          <p className="text-sm line-clamp-3">{item.description}</p>
                          <div>
                            <Link href="#" className="hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-medium capitalize py-2 px-4 border border-white rounded-sm inline-block">details</Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <div className={`${avtiveTab.ketchup ? "block" : "hidden"}`}>
              <Swiper slidesPerView={3} loop={true} spaceBetween={20}
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
                onSwiper={(swiper) => (ketchupRef.current = swiper)}>
                {
                  ketchupSliderData.map((item: IProductSliderData) => (
                    <SwiperSlide key={item.id}>
                      <div className="flex gap-x-5 text-white">
                        <div className="overflow-hidden">
                          <img className="block h-96 object-contain" src={item.imageUrl} alt={item.title} />
                        </div>
                        <div className="w-60 flex flex-col gap-y-2 justify-center">
                          <p className="capitalize font-medium text-lg">{item.productCategory}</p>
                          <h3 className="uppercase font-bold text-xl">{item.title}</h3>
                          <p className="font-medium">{item.weight}</p>
                          <p className="text-sm line-clamp-3">{item.description}</p>
                          <div className="flex">
                            <Link href="#" className="hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-medium capitalize py-2 px-4 border border-white rounded-sm">details</Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <div className={`${avtiveTab.sauce ? "block" : "hidden"}`}>
              <Swiper slidesPerView={3} loop={true} spaceBetween={20}
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
                onSwiper={(swiper) => (sauceRef.current = swiper)}>
                {
                  sauceSliderData.map((item: IProductSliderData) => (
                    <SwiperSlide key={item.id}>
                      <div className="flex gap-x-5 text-white">
                        <div className="overflow-hidden">
                          <img className="block h-96 object-contain" src={item.imageUrl} alt={item.title} />
                        </div>
                        <div className="w-60 flex flex-col gap-y-2 justify-center">
                          <p className="capitalize font-medium text-lg">{item.productCategory}</p>
                          <h3 className="uppercase font-bold text-xl">{item.title}</h3>
                          <p className="font-medium">{item.weight}</p>
                          <p className="text-sm line-clamp-3">{item.description}</p>
                          <div className="flex">
                            <Link href="#" className="hover:bg-white hover:text-black transition-all duration-300 cursor-pointer font-medium capitalize py-2 px-4 border border-white rounded-sm">details</Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <div className="flex gap-x-10 justify-center items-center"> 
              <button onClick={() => getActiveSwiper()?.slidePrev()}
                className="cursor-pointer text-white">
                  <ChevronLeft size={32}/>
              </button>
              <button onClick={() => getActiveSwiper()?.slideNext()}
                className="cursor-pointer text-white">
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
