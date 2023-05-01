import styled from 'styled-components/native';

import theme from '@theme/index';

export const Container = styled.View`
  margin-vertical: 64px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 16px;
  color: ${theme.COLORS.GRAY_300};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  color: ${theme.COLORS.GRAY_300};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`;
