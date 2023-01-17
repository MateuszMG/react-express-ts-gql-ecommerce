import { ProductsList } from '../../components/products/ProductsList/ProductsList';
import { useHome } from './useHome';
import { Wrapper } from './Home.styled';

export const Home = () => {
  const { products } = useHome();

  return (
    <Wrapper>
      <ProductsList products={products || []} />
    </Wrapper>
  );
};
