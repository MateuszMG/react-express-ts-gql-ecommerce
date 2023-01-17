import { paths } from '../../../routes/paths';
import { Price } from '../../Price/Price';
import { ProductForGuest } from '../../../generated/types';
import { useNavigate } from 'react-router-dom';
import {
  DataWrapper,
  Img,
  Title,
  Section,
  TextWrapper,
  ImgWrapper,
} from './ProductCard.styled';

interface ProductCardProps {
  product: ProductForGuest;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const { _id, image, price, sale, title } = product;

  return (
    <Section onClick={() => navigate(paths.product(_id))}>
      <ImgWrapper>
        <Img src={image} alt={title} />
      </ImgWrapper>

      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
      <DataWrapper>
        <Price price={price} sale={sale} />
      </DataWrapper>
    </Section>
  );
};
