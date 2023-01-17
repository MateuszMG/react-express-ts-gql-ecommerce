import styled, { css } from 'styled-components';

const BORDER_RADIUS = '6px';

export const Wrapper = styled.div``;

export const Section = styled.section(
  ({ theme: { colors } }) => css`
    background-color: ${colors.backgroundReverse};
    border-radius: ${BORDER_RADIUS};
    color: ${colors.fontReverse};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    max-height: 452px;
    width: 280px;

    &:hover img {
      transform: scale(1.1);
    }
  `,
);

export const ImgWrapper = styled.div`
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  height: 280px;
  width: 280px;
  transition: 0.3s;
`;

export const TextWrapper = styled.div`
  margin: 12px;
`;

export const Title = styled.h2`
  word-break: break-all;
  word-wrap: break-word;
`;

export const DataWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin: 12px;
`;
