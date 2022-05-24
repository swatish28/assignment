import React from "react";
import TableComponent from "./table/table";
import styled from "styled-components";
const ImageListContainer = styled("div")`
  height: 50%;
  background-color: #202020;
  padding: 1rem;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled("span")`
  color: #707070;
  font-size: 1.4rem;
  margin: 1rem 0;
`;
const DataList = () => {
  return (
    <ImageListContainer>
      <HeaderText>Image List</HeaderText>
      <TableComponent />
    </ImageListContainer>
  );
};

export default DataList;
