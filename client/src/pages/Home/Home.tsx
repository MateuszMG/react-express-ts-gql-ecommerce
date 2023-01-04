import { paths } from '../../routes/paths';
import { useHome } from './useHome';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  console.log('products', products);

  return (
    <Wrapper>
      {products?.map(
        ({
          description,
          distinction,
          id,
          image,
          model,
          price,
          quantity,
          sale,
          size,
          subtitle,

          title,
        }) => (
          <Section key={id} onClick={() => navigate(paths.product(id))}>
            <Img src={image} alt={title} />

            <DataWrapper>
              <ProductTitle>{title}</ProductTitle>
              <Text> {description.slice(0, 500)}</Text>
              <Text> {model} </Text>
              <Text>Price: {price}</Text>
              <Text>Quantity: {quantity}</Text>
            </DataWrapper>
          </Section>
        ),
      )}
    </Wrapper>
  );
};
