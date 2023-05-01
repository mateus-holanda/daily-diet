import styled from 'styled-components/native';

import theme from '@theme/index';

type TextProps = {
  type: 'SUCCESS' | 'FAIL';
}

export const Container = styled.View`
  flex: 1;

  gap: 40px;

  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
  gap: 8px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<TextProps>`
  font-size: ${theme.FONT_SIZE.XL}px;
  color: ${({ type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`;

export const Subtitle = styled.Text`
  margin-bottom: 40px;

  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_100 };
`;

export const Bold = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
`;