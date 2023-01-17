import { ProductCard } from '../ProductCard/ProductCard';
import { ProductForGuest } from '../../../generated/types';
import { Wrapper } from './ProductsList.styled';

interface ProductsListProps {
  products: ProductForGuest[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Wrapper>
  );
};
