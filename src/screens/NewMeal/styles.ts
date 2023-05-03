import styled from 'styled-components/native';

import theme from '@theme/index';

export const Container = styled.View`
  flex: 1;
`;

export const NewMealForm = styled.View`
  height: 90%;
  padding: 24px;
  margin-top: -32px;
  border-radius: 20px;
  background-color: ${theme.COLORS.GRAY_700};
`;

export const DatetimePickersContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  justify-content: 'flex-start';
`;

export const DatetimePickerInput = styled.View`
  flex-direction: 'column';
  width: 50%;
  gap: 8px;
  justify-content: 'flex-start';
`;

export const DatetimePickerTitle = styled.Text`
  color: ${theme.COLORS.GRAY_200};
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