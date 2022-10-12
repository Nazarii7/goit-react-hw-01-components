import styled from "styled-components";

export const Wrapper = styled.div`
width: 300px;
background-color: white;
margin: 0 auto;
box-shadow: 0 0 10px 3px black;
`;

export const Description = styled.div`
padding: 35px 15px 15px 15px;
  text-align: center;
`;

export const ImgAvatar = styled.img`
border-radius: 50%;
  border: 1px solid #e4e9f0;
  width: calc(100% / 3);
  display: block;
  margin: 0 auto;
  `;

export const NameUser = styled.p`
margin-top: 20px;
font-size: 22px;
font-weight: 700;
`;

export const TextUser = styled.p`
margin-top: 15px;
color: #94a0ac;
`;

export const Stats = styled.ul`
box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  border-top: 1px solid #e4e9f0;
  list-style-type: none;
  background-color: #f3f6f9;
  `;

export const StatsItems = styled.li`
padding: 15px 0;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid #e4e9f0;
    `;

export const StatsLabel = styled.span`
display: block;
  color: #94a0ac;
  `;

export const StatsQuantity = styled.span`
margin-top: 10px;
display: block;
font-weight: 700;
`;
