import styled from 'styled-components/native';

import theme from '@theme/index';

export type MealCardTypeStyleProps = 'POSITIVE' | 'NEGATIVE';

interface TouchableOpacityProps {
  type: MealCardTypeStyleProps;
}

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
  flex: 1;
  flex-direction: row;

  height: 49px;
  border-radius: 6px;
  border-width: 2px;

  align-items: center;

  border-color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
  background-color: ${theme.COLORS.GRAY_700};
`;

export const Time = styled.Text`
  padding: 0 12px;

  font-size: ${theme.FONT_SIZE.XS}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
`;

export const VerticalBar = styled.View`
  width: 2px;
  height: 14px;
  background-color: ${theme.COLORS.GRAY_400};
`;

export const Meal = styled.Text`
  padding: 0 12px;

  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_200};
`;

export const TypeIndicator = styled.View<TouchableOpacityProps>`
  position: absolute;
  
  width: 14px;
  height: 14px;
  right: 16px;
  border-radius: 100%;
  
  background-color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;