import React from "react";
import PropTypes from "prop-types";
import { 
    Wrapper, 
    Description, 
    ImgAvatar,
    NameUser,
    TextUser,
    Stats,
    StatsItems,
    StatsLabel,
    StatsQuantity,} from "./profile.styled";

export const Profile = ({
    username,
    tag,
    location,
    stats: {followers, views, likes, },
}) => {
    return <Wrapper>
    <Description>
      <ImgAvatar
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
      />
      <NameUser>{username}</NameUser>
      <TextUser>@{tag}</TextUser>
      <TextUser>{location}</TextUser>
    </Description>
  
    <Stats>
      <StatsItems>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItems>
      <StatsItems>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItems>
      <StatsItems>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItems>
    </Stats>
  </Wrapper>;
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}


