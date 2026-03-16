import Products from '@/components/products';
import productsKetchup from '@/mock/products-ketchup';

const ProductsKetchup = () => {
  return <Products products={productsKetchup} pathName='ketchup' />;
};

export default ProductsKetchup;
