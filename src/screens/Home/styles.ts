import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import theme from '../../theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const NewMealContainer = styled.View`
  font-size: ${theme.FONT_SIZE.MD}px;
  margin: 40px 0;
  gap: 8px;
`;