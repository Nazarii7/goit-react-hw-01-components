import PropTypes from "prop-types";
import { FriendsList } from './friendlist.styled';
import { FriendsItElements } from "./frienditem";

export const FriendList = ({friends}) => {
    return (
        <FriendsList>
      {friends.map(x => (
        <FriendsItElements
          key={x.id}
          avatar={x.avatar}
          isOnline={x.isOnline}
          name={x.name}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        })
    ),
};