import { Button } from '../../../components/Global/Button/Button';
import { CheckboxInput } from '../../../components/Global/inputs/CheckboxInput/CheckboxInput';
import { Form } from '../../../components/Global/Form/Form';
import { FormWrapper, Title } from './ProductForm.styled';
import { TextInput } from '../../../components/Global/inputs/TextInput/TextInput';
import { useProductForm } from './useProductForm';
import { SelectInput } from '../../../components/Global/inputs/SelectInput/SelectInput';
import { DateTimeInput } from '../../../components/Global/inputs/DateTimeInput/DateTimeInput';

export const ProductForm = () => {
  const {
    control,
    categoriesOptions,
    errors,
    isDirty,
    isValid,
    loading,
    onSubmit,
    register,
    reset,
  } = useProductForm();

  return (
    <FormWrapper>
      <Form onReset={() => reset()} onSubmit={onSubmit}>
        <Title>Add Product</Title>

        <Form.FieldsDivided>
          <TextInput {...register('title')} message={errors?.title?.message} />

          <TextInput
            {...register('subtitle')}
            message={errors?.subtitle?.message}
          />
        </Form.FieldsDivided>

        <TextInput
          {...register('description')}
          message={errors?.description?.message}
        />

        <Form.FieldsDivided>
          <SelectInput
            control={control}
            error={errors?.category?.message}
            name={'category'}
            options={categoriesOptions}
          />

          <TextInput {...register('model')} message={errors?.model?.message} />
        </Form.FieldsDivided>

        <TextInput
          {...register('quantity')}
          message={errors?.quantity?.message}
          type={'number'}
        />

        <CheckboxInput
          {...register('active')}
          error={errors?.active?.message}
          label={'Active'}
        />

        {/* //////////////////////////////////////////////// price */}

        <Form.FieldsDivided>
          <TextInput
            {...register('price.wholesale')}
            message={errors?.price?.wholesale?.message}
            label={'Wholesale price'}
            type={'number'}
          />

          <TextInput
            {...register('price.retail')}
            message={errors?.price?.retail?.message}
            label={'Retail price'}
            type={'number'}
          />
        </Form.FieldsDivided>

        {/* //////////////////////////////////////////////// size */}

        <Form.FieldsDivided>
          <TextInput
            {...register('size.weight')}
            message={errors?.size?.weight?.message}
            label={'Weight'}
            type={'number'}
          />

          <TextInput
            {...register('size.length')}
            message={errors?.size?.length?.message}
            label={'Length'}
            type={'number'}
          />

          <TextInput
            {...register('size.width')}
            message={errors?.size?.width?.message}
            label={'Width'}
            type={'number'}
          />

          <TextInput
            {...register('size.height')}
            message={errors?.size?.height?.message}
            label={'Height'}
            type={'number'}
          />
        </Form.FieldsDivided>

        {/* //////////////////////////////////////////////// distinction */}

        <Form.FieldsDivided>
          <CheckboxInput
            {...register('distinction.active')}
            error={errors?.distinction?.active?.message}
            label={'Active distinction'}
          />

          <DateTimeInput
            control={control}
            error={errors?.distinction?.startTime?.message}
            label={'Start time'}
            name={'distinction.startTime'}
          />

          <DateTimeInput
            control={control}
            error={errors?.distinction?.endTime?.message}
            label={'End time'}
            name={'distinction.endTime'}
          />
        </Form.FieldsDivided>

        {/* //////////////////////////////////////////////// sale */}

        <Form.FieldsDivided>
          <CheckboxInput
            {...register('sale.active')}
            error={errors?.sale?.active?.message}
            label={'Active sale'}
          />

          <DateTimeInput
            control={control}
            error={errors?.sale?.startTime?.message}
            label={'Start time'}
            name={'sale.startTime'}
          />

          <DateTimeInput
            control={control}
            error={errors?.sale?.endTime?.message}
            label={'End time'}
            name={'sale.endTime'}
          />
        </Form.FieldsDivided>

        <Form.FieldsDivided>
          <TextInput
            {...register('sale.priceBeforeSale')}
            message={errors?.sale?.priceBeforeSale?.message}
            label={'Price before sale'}
            type={'number'}
          />
          <TextInput
            {...register('sale.priceAfterSale')}
            message={errors?.sale?.priceAfterSale?.message}
            label={'Price after sale'}
            type={'number'}
          />
        </Form.FieldsDivided>

        {/* //////////////////////////////////////////////// ratings */}

        <Form.FieldsDivided>
          <CheckboxInput
            {...register('ratings.activeFake')}
            error={errors?.ratings?.activeFake?.message}
            label={'Active fake ratings'}
          />

          <TextInput
            {...register('ratings.fakeTotal')}
            message={errors?.ratings?.fakeTotal?.message}
            label={'Fake total'}
            type={'number'}
          />

          <TextInput
            {...register('ratings.fakeAmount')}
            message={errors?.ratings?.fakeAmount?.message}
            label={'Fake quantity'}
            type={'number'}
          />
        </Form.FieldsDivided>

        {/* //////////////////////////////////////////////// views */}

        <Form.FieldsDivided>
          <CheckboxInput
            {...register('views.activeFake')}
            error={errors?.views?.activeFake?.message}
            label={'Active fake views'}
          />

          <TextInput
            {...register('views.fakeTotal')}
            message={errors?.views?.fakeTotal?.message}
            label={'Fake total'}
            type={'number'}
          />
        </Form.FieldsDivided>

        {/* //////////////////////////////////////////////// sold */}

        <Form.FieldsDivided>
          <CheckboxInput
            {...register('solds.activeFake')}
            error={errors?.solds?.activeFake?.message}
            label={'Active fake sold'}
          />

          <TextInput
            {...register('solds.fakeTotal')}
            message={errors?.solds?.fakeTotal?.message}
            label={'Fake total'}
            type={'number'}
          />
        </Form.FieldsDivided>

        <Form.ButtonsWrapper>
          <Button loading={loading} type={'reset'}>
            Reset
          </Button>
          <Button
            disabled={!isValid && !isDirty}
            loading={loading}
            type={'submit'}
          >
            Add product
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
};
