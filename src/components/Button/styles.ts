import { Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

import theme from '@theme/index';

export type ButtonTypeStyleProps = 'LIGHT' | 'DARK';

interface TouchableOpacityProps {
  type: ButtonTypeStyleProps;
  disabled?: boolean;
}

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
  flex: 1;
  flex-direction: row;

  padding: 0 24px;
  min-height: 50px;
  max-height: 50px;
  
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  background-color: ${({ type }) => type === 'LIGHT' ? 'transparent' : theme.COLORS.GRAY_200};
  border: ${({ type }) => type === 'LIGHT' ? `2px solid ${theme.COLORS.GRAY_100}`: 'none' };
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(AntDesign).attrs<TouchableOpacityProps>(({ type }) => ({
  size: 20,
  color: type === 'LIGHT' ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE
}))`
  margin-right: 8px
`;

export const Title = styled(Text)<TouchableOpacityProps>`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${({ type }) => type === 'LIGHT' ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE };
`;