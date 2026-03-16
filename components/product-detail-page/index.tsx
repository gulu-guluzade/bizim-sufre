'use client';

import Container from '../ui/container';
import Header from '../sections/header';
import { useParams } from 'next/navigation';
import { IProducts } from '@/types/products';

const ProductDetailPage = ({ products }: { products: IProducts[] }) => {
  const { id } = useParams();
  const product = products.find((product: IProducts) => product.id == id);

  return (
    <>
      <Header className='static' />
      <main className='bg-[#B91A33]'>
        <section className='py-12 lg:px-40'>
          <Container>
            <div className='bg-[#C03148] text-white p-5 flex flex-col gap-y-5 lg:grid lg:grid-cols-[1fr_3fr]'>
              <div className='h-60 sm:h-80 lg:h-105 w-full flex items-center justify-center overflow-hidden lg:-translate-x-[calc(50%+20px)]'>
                <img
                  className='block object-contain w-full h-full'
                  src={product?.imgSrc}
                  alt={product?.title}
                />
              </div>
              <div>
                <div className='py-1 text-2xl font-bold text-center lg:text-start uppercase'>
                  <h2>{product?.title}</h2>
                </div>
                <div className='flex flex-col gap-5 lg:text-lg 2xl:text-xl'>
                  <p>{product?.desc}</p>
                  <div className='flex flex-col gap-1'>
                    <h5 className='font-bold'>Ingredients:</h5>
                    <p>{product?.ingredients}</p>
                  </div>
                  <div className='flex items-center justify-start gap-1'>
                    <h5 className='font-bold'>Total Weight:</h5>
                    <span>{product?.totalWeight}</span>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h5 className='font-bold'>Total Values of 100 gr Product</h5>
                    <ul>
                      <li>Fat: {product?.totalValuePer100gr.fat}</li>
                      <li>Protein: {product?.totalValuePer100gr.protein}</li>
                      <li>Carbohydrate: {product?.totalValuePer100gr.carbohydrate}</li>
                      <li>Energy: {product?.totalValuePer100gr.energy}</li>
                      <li>Inner Piece: {product?.totalValuePer100gr.innerPiece}</li>
                    </ul>
                  </div>
                  <div className='flex items-start justify-start gap-1'>
                    <h5 className='font-bold'>Note:</h5>
                    <p>{product?.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ProductDetailPage;
