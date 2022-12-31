import { Loader } from '../../../components/Global/Loader/Loader';
import {
  useGetHighlightedProductQuery,
  useHighlightedProductUpdatedSubscription,
} from '../../../generated/types';
import {
  DataWrapper,
  Img,
  ProductTitle,
  Section,
  SectionTitle,
  Text,
  Wrapper,
} from './HighlightedProduct.styled';

export const HighlightedProduct = () => {
  const { data, loading } = useGetHighlightedProductQuery();
  const product = data?.getHighlightedProduct;

  const { data: updatedData } = useHighlightedProductUpdatedSubscription();
  const updatedProduct = updatedData?.highlightedProductUpdated;

  if (loading) return <Loader />;

  const productToShow = updatedProduct || product;

  if (!productToShow) return null;

  return (
    <Wrapper>
      <SectionTitle>Highlighted product</SectionTitle>
      <Section>
        <Img src={productToShow.image} alt={productToShow.title} />

        <DataWrapper>
          <ProductTitle>{productToShow.title}</ProductTitle>
          <Text>Description: {productToShow.description}</Text>
          <Text>Price: {productToShow.price}</Text>
          <Text>Quantity: {productToShow.quantity}</Text>
        </DataWrapper>
      </Section>
    </Wrapper>
  );
};
