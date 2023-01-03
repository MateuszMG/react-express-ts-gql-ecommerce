import { Comments } from '../../components/Comments/Comments';
import { TextInput } from '../../components/Global/inputs/TextInput/TextInput';
import { Loader } from '../../components/Global/Loader/Loader';
import {
  CommentWrapper,
  Description,
  Img,
  ImgWrapper,
  Model,
  Size,
  SizeWrapper,
  Sold,
  SoldWrapper,
  SubTitle,
  Title,
} from './Product.styled';
import { useProduct } from './useProduct';
export const Product = () => {
  const { product } = useProduct();

  if (!product) return <Loader />;

  const {
    active,
    category,
    description,
    distinction,
    id,
    image,
    model,
    price,
    quantity,
    ratings,
    sale,
    size,
    sold,
    subtitle,
    title,
    views,
  } = product;

  return (
    <div>
      <ImgWrapper>
        <Img src={image} />
      </ImgWrapper>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Description>{description}</Description>
      <Model>{model}</Model>
      <SizeWrapper>
        <Size>height: {size.height}</Size>
        <Size>length: {size.length}</Size>
        <Size>weight: {size.weight}</Size>
        <Size>width: {size.width}</Size>
      </SizeWrapper>
      <SoldWrapper>
        <Sold></Sold>
      </SoldWrapper>
      <p> Product </p>
      <p> Product </p>
      <p> Product </p>

      <Comments />
    </div>
  );
};
