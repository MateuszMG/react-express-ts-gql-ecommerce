import styled, { css, CSSProperties } from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FieldsDivided = styled.div<{ gap?: CSSProperties['gap'] }>(
  ({ gap }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${gap || '16px'};
  `,
);

export const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
