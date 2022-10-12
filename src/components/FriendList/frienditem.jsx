import PropTypes from 'prop-types';
import { FriendsElements, Online, Offline, Name, Img } from './friendlist.styled';

export const FriendsItElements = ({ avatar, isOnline, name }) => {
  return (
    <FriendsElements>
      {isOnline ? <Online /> : <Offline />}
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsElements>
  );
};

FriendsItElements.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};