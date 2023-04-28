import { Container, ProfileImage } from './styles';

import Logo from '@assets/logo.svg';
import profileImg from '@assets/profile.png';

export function ProfileHeader() {
  return (
    <Container>
      <Logo size={24} />

      <ProfileImage source={profileImg} />
    </Container>
  );
}