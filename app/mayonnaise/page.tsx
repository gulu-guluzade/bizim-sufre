import Products from '@/components/products';
import productsMayonnaise from '@/mock/products-mayonnaise';

const ProductsMayonnaise = () => {
  return <Products products={productsMayonnaise} pathName='mayonnaise' />;
};

export default ProductsMayonnaise;
