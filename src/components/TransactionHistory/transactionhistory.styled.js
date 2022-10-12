import styled from "styled-components";

export const TableTransHistory = styled.table`
box-shadow: 0 0 10px 3px black;
border-radius: 5px;
border-collapse: collapse;
overflow: hidden;
margin: 0 auto;
margin-top: 50px;
text-align: center;
`;

export const HeadTransHistory = styled.thead``;

export const BodyTransHistory = styled.tbody``;

export const TrTransHistory = styled.tr`
height: 50px;
font-size: 16px;
    &&:hover {
        background-color: #ddd;
      }
    &&:nth-child(even) {
        background-color: #f2f2f2;
      }
    && TdTransHistory:first-child,
        ThTransHistory:first-child {
            padding-left: 50px;
            width: 200px;
            text-align: start;
            text-transform: capitalize;
        }
`;

export const TdTransHistory = styled.th`
border: 1px solid #ddd;
`;

export const ThTransHistory = styled.td`
width: 300px;
  background: rgb(0, 217, 255);
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  border: 1px solid #ddd;
  `;