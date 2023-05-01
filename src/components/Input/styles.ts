import styled from 'styled-components/native';
import { TextInput } from 'react-native';

import theme from '@theme/index';

interface InputTypeStyleProps {
  description: boolean;
}

export const Container = styled.View`
  margin: 20px 0;
  gap: 8px;
`;

export const InputArea = styled(TextInput)<InputTypeStyleProps>`
  height: ${({ description }) => description ? 120 : 48 }px;

  padding: 14px;
  border-radius: 6px;
  border-width: 2px;
  border-color: ${theme.COLORS.GRAY_500};
  
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_200};
`;