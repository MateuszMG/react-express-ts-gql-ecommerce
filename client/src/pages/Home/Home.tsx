import { useHome } from './useHome';
import { HighlightedProduct } from '../Products/HighlightedProduct/HighlightedProduct';
import {
  DataWrapper,
  Img,
  ProductTitle,
  Section,
  Text,
  Wrapper,
} from './Home.styled';

export const Home = () => {
  const { products } = useHome();

  return (
    <>
      <HighlightedProduct />
      <Wrapper>
        {products?.map((item) => (
          <Section key={item.id}>
            <Img src={item.image} alt={item.title} />

            <DataWrapper>
              <ProductTitle>{item.title}</ProductTitle>
              <Text>Description: {item.description}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </DataWrapper>
          </Section>
        ))}
      </Wrapper>
    </>
  );
};
