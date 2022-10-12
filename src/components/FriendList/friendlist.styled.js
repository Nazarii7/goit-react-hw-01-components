import styled from "styled-components";

export const FriendsList = styled.ul`
  width: 30%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FriendsElements = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 30px;
  box-shadow: 0 0 10px 3px black;
  background-color: white;
`;
export const Online = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
`;
export const Offline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
`;
export const Img = styled.img`
  width: 48px;
  border: 1px solid gray;
  border-radius: 10px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;