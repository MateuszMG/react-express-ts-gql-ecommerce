import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Section = styled.section(
  ({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.primary};
    display: flex;
    gap: 24px;
    padding: 24px;
  `,
);

export const Img = styled.img`
  display: block;
  height: 150px;
  width: 150px;
`;

export const DataWrapper = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.h2``;

export const Text = styled.p``;
