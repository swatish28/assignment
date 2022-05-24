import React, { useRef, useState } from "react";
import styled from "styled-components";
import DataList from "../dataList/index.js";
import FilterOptions from "../filterAndTools/index";
import MapComponent from "../map";

const MainContainer = styled("main")`
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled("div")`
  width: ${(props) => (props.showData ? "calc(100% - 33%)" : "100%")};
  display: flex;
  transition: margin-right 0.3s;
`;

const MapConatiner = styled("section")`
  width: ${(props) => (props.showData ? "33%" : "65%")};
`;
const FilterContainer = styled("section")`
  width: ${(props) => (props.showData ? "33%" : "35%")};
  background-color: #2f2f2f;
  padding: 10px;
  overflow:auto;
`;
const ListContainer = styled("section")`
  position: fixed;
  top: 0;
  right: 0;
  width: ${(props) => (props.showData ? "33%" : "0")};
  padding: ${(props) => (props.showData ? "10px 10px 10px 0" : "0")};
  height: 100%;
  background: #2f2f2f;
  transition: all 0.1s ease-in;
  -webkit-overflow-scrolling: touch;
`;

const DashboardComponent = () => {
  const [showData, setShowData] = useState(false);

  const editRef = useRef();
  const onSearchClicked = () => {
 
      if(!showData){
        setShowData(true);
      }
     
    
  
  };
  const onDrawClicked = () => {
    editRef.current.startRectangle();
  };
  return (
    <React.Fragment>
      <MainContainer>
        <Container showData={showData}>
          <MapConatiner>
            <MapComponent editRef={editRef} />
          </MapConatiner>
          <FilterContainer>
            <FilterOptions onDrawClicked={() => onDrawClicked()} onSearchClicked={()=>onSearchClicked()} />
          </FilterContainer>
        </Container>
        <ListContainer showData={showData}>
          <DataList />
        </ListContainer>
      </MainContainer>
    </React.Fragment>
  );
};

export default DashboardComponent;
