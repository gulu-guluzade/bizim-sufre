import Link from 'next/link';
import Container from '../ui/container';
import Header from '../sections/header';
import { IProducts } from '@/types/products';

const Products = ({ products, pathName }: { products: IProducts[]; pathName: string }) => {
  return (
    <>
      <Header className='static' />
      <main className='bg-[#B91A33]'>
        <section className='py-12'>
          <Container>
            <div className='flex flex-col gap-10'>
              <div className='flex items-center justify-center'>
                <div className='max-w-fit grid grid-cols-3 capitalize font-semibold text-white text-center xs:text-lg sm:text-xl xl:text-2xl'>
                  <Link
                    href='/mayonnaise/'
                    className={`px-1 py-2 border-b-2 lg:border-b-3 2xl:lg:border-b-4 ${pathName == 'mayonnaise' ? 'border-white' : 'border-[#DC8D99]'}`}
                  >
                    mayonnaise
                  </Link>
                  <Link
                    href='/ketchup/'
                    className={`px-1 py-2 border-b-2 lg:border-b-3 2xl:lg:border-b-4 ${pathName == 'ketchup' ? 'border-white' : 'border-[#DC8D99]'}`}
                  >
                    ketchup
                  </Link>
                  <Link
                    href='/sauce/'
                    className={`px-1 py-2 border-b-2 lg:border-b-3 2xl:lg:border-b-4 ${pathName == 'sauce' ? 'border-white' : 'border-[#DC8D99]'}`}
                  >
                    sauce
                  </Link>
                </div>
              </div>
              <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {products.map(({ id, title, imgSrc }: IProducts) => (
                  <li
                    key={id}
                    className='bg-[#C03148] p-5 relative flex flex-col gap-y-5 group/item transition-all duration-300 hover:bg-white'
                  >
                    <Link href={`/${pathName}/${id}`} className='absolute inset-0'></Link>
                    <div className='h-65 overflow-hidden'>
                      <img
                        src={imgSrc}
                        alt={title}
                        className='block object-contain w-full h-full'
                      />
                    </div>
                    <div className='text-center text-white font-semibold flex flex-col gap-y-2'>
                      <h4 className='text-lg xs:text-xl xl:text-2xl transition-all duration-300 group-hover/item:text-black'>
                        {title}
                      </h4>
                      <div className='xs:text-lg xl:text-xl opacity-0 p-2 bg-[#C03148] transition-all duration-300 group-hover/item:opacity-100'>
                        Learn more
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

export default Products;
