import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import FilterRangeComponent from "./filterRange";
import FilterOptionsComponent from "./filterOptions";
import locationData from "./location";
import { withStyles } from "@material-ui/core/styles";

const FilterWrapper = styled("section")`
  padding: 10px;
  border-radius: 25px;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  .search-box {
    border-radius: 2.5rem;
    background-color: #000;
    padding: 0.5rem 1rem !important;

    border: none;
    outline: none;
    width: 65%;
  }
  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root {
    color: #707070;
    padding: 0;
    outline: none;
    border: none;
    font-size: 1.6rem;
  }
  .css-9e5uuu-MuiPaper-root-MuiAutocomplete-paper {
    background-color: #000;
  }
  .css-b7k0tb-MuiAutocomplete-listbox {
    max-height: none;
  }
  .MuiAutocomplete-noOptions {
    color: #707070;
  }
  .css-1q60rmi-MuiAutocomplete-endAdornment{
    display:none;
  }
  .Mui-focused{
    outline:none;
  }
  .MuiOutlinedInput-root{
    padding:0 !important;
  }
`;
const ExploreWrapper = styled("div")``;
const ToolboxWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background-color: #2f2f2f;
  border-radius: 2.5rem;
  padding: 1rem;
`;

const HeaderText = styled("span")`
  color: #707070;
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const InputWrapper = styled("div")`
  display: flex;
  margin: 1rem 0;
`;

const Circle = styled("div")`
  width: 3.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.9rem;
  border-radius: 50%;
  background-color: #505050;
  margin-right: 1rem;
`;

const Dropdown = styled("div")`
  padding: 1rem;
  color: #707070;
  background-color: #2f2f2f;
  font-size: 1.6rem;
  border-radius: 2.5rem;
  margin-left: 1rem;
  width: 35%;
  display: flex;
    align-items: center;
`;
const ToolBox = styled("div")`
  font-size: 1.4rem;
  color: #b0b0b0;
  background-color: #282828;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  cursor:pointer;
`;

const SearchButton = styled("button")`
  border-radius: 2.5rem;
  padding: 1rem;
  width: 100px;
  background-color: #2f2f2f;
  color: #707070;
  margin-top: 1rem;
  align-self: end;
  border: none;
  cursor:pointer;
`;

const styles = (theme) => ({
  paper: {
    height: "100px",
    backgroundColor: "#000",
  },
});

const FilterOptions = (props) => {

  return (
    <FilterWrapper>
      <ExploreWrapper>
        <HeaderText>Explore Center</HeaderText>
        <InputWrapper>
          <Autocomplete
            disablePortal
            className="search-box"
            id="combo-box-demo"
            classes={{
              paper: props.classes.paper,
            }}
            options={locationData}
            renderOption={(props, option) => {
              return (
                <span
                  {...props}
                  style={{
                    backgroundColor: "#000",
                    padding: "1rem",
                    color: "#707070",
                  }}
                >
                  {option}
                </span>
              );
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Search" />
            )}
          />
          <Dropdown>Location</Dropdown>
        </InputWrapper>
      </ExploreWrapper>
      <HeaderText>Toolbox</HeaderText>
      <ToolboxWrapper>
        <ToolBox onClick={() => props.onDrawClicked()}>
          <Circle>
            <ModeEditOutlineOutlinedIcon />
          </Circle>
          Draw Area
        </ToolBox>
        <ToolBox>
          <Circle>
            <FileUploadOutlinedIcon />
          </Circle>
          Custom data input
        </ToolBox>
        <ToolBox>
          <Circle>
            <LocalOfferOutlinedIcon />
          </Circle>
          Enter Image ID
        </ToolBox>
        <ToolBox>
          <Circle>
            <StorageOutlinedIcon />
          </Circle>
          Custom catalog
        </ToolBox>
      </ToolboxWrapper>
      <HeaderText>Filter Options</HeaderText>
      <FilterOptionsComponent />
      <FilterRangeComponent />
      <SearchButton onClick={()=>props.onSearchClicked()}>Search</SearchButton>
    </FilterWrapper>
  );
};

export default withStyles(styles)(FilterOptions);
