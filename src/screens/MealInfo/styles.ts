import styled from 'styled-components/native';

import theme from '@theme/index';

type ContainerProps = {
  modalOpen?: boolean;
}

interface TypeIndicatorProps {
  onDiet: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  opacity: ${({ modalOpen }) => modalOpen ? 0.4 : 1 };
`;

export const MealInfoContainer = styled.View`
  height: 90%;
  padding: 24px;
  margin-top: -32px;
  border-radius: 20px;

  background-color: ${theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  margin-top: 20px;

  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
`;

export const Description = styled.Text`
  margin: 8px 0 24px;

  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_200};
`;

export const Subtitle = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
`;

export const DietType = styled.View`
  flex-direction: row;

  height: 34px;
  max-width: 144px;
  gap: 8px;
  border-radius: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.GRAY_600};
`;

export const TypeIndicator = styled.View<TypeIndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 100%;

  background-color: ${({ onDiet }) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  gap: 9px;
  bottom: 40px;

  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  top: 35%;
  margin-horizontal: 24px;
  padding: 48px 24px 24px;
  max-height: 192px;
  gap: 32px;
  border-radius: 8px;
  shadow-radius: 4px;
  align-items: center;
  justify-content: center;
  shadow-opacity: 0.25;
  elevation: 5;

  background-color: ${theme.COLORS.GRAY_700};
`;

export const ModalTitle = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.GRAY_200};
`;

export const ModalButtonsContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;