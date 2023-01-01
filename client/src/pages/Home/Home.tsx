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
import { SelectInput } from '../../components/Global/inputs/SelectInput/SelectInput';
import { useForm } from 'react-hook-form';
import { DateTimeInput } from '../../components/Global/inputs/DateTimeInput/DateTimeInput';

export const Home = () => {
  const { products } = useHome();

  const { control } = useForm();

  return (
    <>
      {/* <SelectInput
        control={control}
        name='default'
        options={[
          {
            label: 'text',
            value: 'value',
          },
        ]}
      /> */}
      {/* <HighlightedProduct />
      <Wrapper>
        {products?.map((item) => (
          <Section key={item.id}>
            <Img src={item.image} alt={item.title} />

            <DataWrapper>
              <ProductTitle>{item.title}</ProductTitle>
              <Text>Description: {item.description}</Text>
              <Text>Price: {item.price.retail}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </DataWrapper>
          </Section>
        ))}
      </Wrapper> */}
    </>
  );
};
