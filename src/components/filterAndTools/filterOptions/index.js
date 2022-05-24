import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ComponentError from "../../errorBoundaries/componentError";

const FilterBoxWrapper = styled("div")`
  background-color: #2f2f2f;
  border-radius: 2.5rem;
  padding: 1rem;
  .react-datepicker-wrapper {
    width: 100px;
  }
  .Mui-checked {
    color: #7fffd4 !important;
  }
  .datepicker {
    width: 100px;
    border-radius: 2.5rem;
    text-align: center;
    border: none;
    outline: none;
    background-color: #000;
    color: #7fffd4;
    padding: 0.5rem 0;
  }
  .end-date {
    margin-top: 0.5rem;
  }
`;
const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const DarkLabel = styled("div")``;
const DateInputWrap = styled("div")`
  width: 60%;
`;
const DateInput = styled("div")`
  display: flex;
  align-items: center;
`;
const Label = styled("span")`
  color: #707070;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

const CheckboxWrapper = styled("div")`
  padding: 1rem;
  background-color: #282828;
  border-radius: 2.5rem;
  width: 60%;
`;
const CheckboxWrap = styled("div")`
  display: flex;
  align-items: center;
`;
const LabelText = styled("div")`
  width: 40%;
  color: #707070;
  font-size: 1.4rem;
`;
const FilterOptionsComponent = () => {
  const satelite = [
    { label: "Sentinel-S2-l2a-cogs" },
    { label: "landsat-7" },
    { label: "landsat-8" },
  ];
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (
    <ComponentError>
      <FilterBoxWrapper>
        <Wrapper>
          <LabelText>Date Range</LabelText>
          <DateInputWrap>
            <DateInput>
              <Label>Start Date</Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="datepicker"
              />
            </DateInput>
            <DateInput className="end-date">
              <Label>End Date</Label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="datepicker"
              />
            </DateInput>
          </DateInputWrap>
        </Wrapper>
        <Wrapper>
          <LabelText>Satelite Constellations</LabelText>
          <CheckboxWrapper>
            {satelite.map((ele) => {
              return (
                <CheckboxWrap key={ele.label}>
                  <Checkbox
                    style={{
                      color: "#b0b0b0",
                    }}
                  />
                  <Label>{ele.label}</Label>
                </CheckboxWrap>
              );
            })}
          </CheckboxWrapper>
        </Wrapper>
      </FilterBoxWrapper>
    </ComponentError>
  );
};

export default FilterOptionsComponent;
