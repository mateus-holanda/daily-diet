import styled from 'styled-components/native';

import theme from '@theme/index';

export const Container = styled.View`
  flex: 1;
`;

export const StatsInfoContainer = styled.View`
  height: 90%;
  padding: 24px;
  margin-top: -32px;
  border-radius: 20px;
  gap: 12px;

  background-color: ${theme.COLORS.GRAY_700};
`;

export const StatsTitle = styled.Text`
  padding: 12px;

  text-align: center;

  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_100};
`;

export const MealTypeStats = styled.View`
  flex-direction: row;
  gap: 12px;
`;