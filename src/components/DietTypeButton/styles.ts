import styled from 'styled-components/native';

import theme from '@theme/index';

export type DietTypeButtonStyleProps = 'POSITIVE' | 'NEGATIVE';

interface TouchableOpacityProps {
  active?: boolean;
  type: DietTypeButtonStyleProps;
}

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
  height: 46px;
  width: 166px;
  border-radius: 6px;

  justify-content: center;

  border-width: ${({ active }) => active ? 2 : 0 }px;
  border-color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
  background-color: ${({ active, type }) => active ? (type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT) : theme.COLORS.GRAY_600 };
`;

export const Content = styled.View`
  flex-direction: row;

  gap: 8px;
  
  align-items: center;
  justify-content: center;
  
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
`;

export const TypeIndicator = styled.View<TouchableOpacityProps>`
  width: 8px;
  height: 8px;
  border-radius: 100%;

  background-color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`;