import styled from 'styled-components/native';

import theme from '@theme/index';

export const Container = styled.View``;

export const EditMealForm = styled.View`
  height: 90%;
  padding: 24px;
  margin-top: -32px;
  border-radius: 20px;
  background-color: ${theme.COLORS.GRAY_700};
`;

export const DatetimePickerContainer = styled.View`
  flex-direction: row;
`;

export const DietTypeSelector = styled.View`
  margin: 20px 0;
  width: 327px;
  gap: 8px;
`;

export const DietTypeButtons = styled.View`
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  bottom: 40px;
  justify-content: flex-end;
`;