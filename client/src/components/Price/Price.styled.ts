import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  font-size: 18px;
`;

export const PriceBeforeSale = styled.strong`
  text-decoration: line-through;
`;

export const Percent = styled.strong``;

export const RedPrice = styled.strong(
  ({ theme: { colors } }) => css`
    color: ${colors.error};
  `,
);
