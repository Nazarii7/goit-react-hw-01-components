import styled from "styled-components";

export const SectionStatistics = styled.section`
width: 50%;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0 0 10px 3px black;`
  ;

export const Title = styled.h2`
padding: 15px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: #959da2;
  `;

export const List = styled.ul`
display: flex;
justify-content: center;
text-align: center;
`;

export const ListItem = styled.li`
padding: 15px 0;
  color: white;
  width: calc(100% / 5);
  `;

export const LabelStatisric = styled.span`
display: block;
  font-weight: 400;
  `;

export const Percentage = styled.span`
margin-top: 10px;
  display: block;
  font-size: 25px;
  font-weight: 700;
  `;