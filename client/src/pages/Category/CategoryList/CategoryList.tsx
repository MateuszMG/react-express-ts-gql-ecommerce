import { Button } from '../../../components/Global/Button/Button';
import { useCategoryList } from './useCategoryList';
import { Wrapper } from '../../../components/Global/Form/Form.styled';
import {
  ButtonsWrapper,
  DataWrapper,
  ProductTitle,
  Section,
} from './CategoryList.styled';

export const CategoryList = () => {
  const { categories, handleDelete, handleEdit } = useCategoryList();

  return (
    <Wrapper>
      {categories?.map((item) => (
        <Section key={item._id}>
          <DataWrapper>
            <ProductTitle>{item.category}</ProductTitle>
          </DataWrapper>

          <ButtonsWrapper>
            <Button onClick={() => handleEdit(item)} type={'button'}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(item)} type={'button'}>
              Delete
            </Button>
          </ButtonsWrapper>
        </Section>
      ))}
    </Wrapper>
  );
};
