import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import theme from '../../theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${theme.COLORS.GRAY_700};
`;

export const NewMealContainer = styled.View`
  padding: 40px 0;
  gap: 8px;

  font-size: ${theme.FONT_SIZE.MD}px;
`;

export const SectionHeader = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.LG}px;
`;