import Products from '@/components/products';
import productsSauce from '@/mock/products-sauce';

const ProductsSauce = () => {
  return <Products products={productsSauce} pathName='sauce' />;
};

export default ProductsSauce;
