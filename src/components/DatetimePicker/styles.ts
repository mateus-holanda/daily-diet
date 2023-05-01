import styled from 'styled-components/native';

import theme from '@theme/index';

export const Container = styled.View`
  flex-direction: 'column';
  width: 50%;
  gap: 8px;
  justify-content: 'flex-start';
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_200};
`;