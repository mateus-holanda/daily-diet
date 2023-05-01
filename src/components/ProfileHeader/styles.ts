import styled from 'styled-components/native';

import theme from '@theme/index';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  max-height: 40px;
  min-height: 50px;

  margin: 32px 0;

  align-items: center;
  justify-content: space-between;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-color: ${theme.COLORS.GRAY_200};
  border-radius: 100%;
`;