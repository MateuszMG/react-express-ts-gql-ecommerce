import { Container } from './Category.styled';
import { CategoryForm } from './CategoryForm/CategoryForm';
import { CategoryList } from './CategoryList/CategoryList';

export const Category = () => {
  return (
    <Container>
      <CategoryForm />
      <CategoryList />
    </Container>
  );
};
