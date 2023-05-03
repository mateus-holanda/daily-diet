import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styled from 'styled-components/native';

import theme from '@theme/index';

export type CardTypeStyleProps = 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';

interface TouchableOpacityProps {
  type: CardTypeStyleProps;
  main: boolean;
}

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
  flex: 1;

  min-height: 102px;
  max-height: 102px;

  padding: 16px;
  border-radius: 8px;

  background-color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : (type === 'NEGATIVE' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600)};

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<TouchableOpacityProps>(({ type }) => ({
  size: 24,
  color: type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  position: absolute;
  right: 6px;
  top: 6px
`;

export const Number = styled.Text<TouchableOpacityProps>`
  margin-bottom: 8px;

  font-size: ${({ main }) => main ? theme.FONT_SIZE.XXL : theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
`;

export const Description = styled.Text`
  text-align: center;

  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_200};
`;