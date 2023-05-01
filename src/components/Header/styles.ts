import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

import theme from '@theme/index';

export type HeaderTypeStyleProps = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';

interface ViewProps {
  type: HeaderTypeStyleProps;
}

export const Container = styled.View<ViewProps>`
  width: 100%;
  height: 132px;
  padding-horizontal: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : ( type === 'NEGATIVE' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_500) };
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1
`;

export const BackIcon = styled(AntDesign).attrs({
  size: 24,
  color: theme.COLORS.GRAY_200,
})``;

export const Title = styled.Text`
  position: absolute;

  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
`;