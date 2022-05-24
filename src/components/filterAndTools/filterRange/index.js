import React from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import ComponentError from "../../errorBoundaries/componentError";
const FilterRangeWrapper = styled("div")`
  .MuiSlider-thumbColorPrimary {
    display: none;
  }
  .MuiSlider-rail {
    color: #000;
  }
  .MuiSlider-track {
    background-color: #7fffd4;
    border: #7fffd4;
  }
  .MuiSlider-colorPrimary {
    padding: 0;
  }
`;
const RangeLabelWrapper = styled("div")`
  display: flex;
  width: 100%;
  margin: 1.6rem 0;
`;
const LabelWrapper = styled("div")`
  width: 40%;
`;
const RangeLabel = styled("div")`
  font-size: 1.6rem;
  color: #707070;
`;
const RangeValue = styled("div")`
  font-size: 1.4rem;
  color: #7fffd4;
`;
const RangeWrap = styled("div")`
  width: 60%;
`;

const RangeBetweenWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Range = styled("div")`
  font-size: 1.4rem;
  color: #707070;
`;

function valuetext(value) {
  return `${value}°C`;
}
const FilterRangeComponent = () => {
  const rangeData = [
    {
      label: "Area Coverage",
      value: [0, 81],
      symbol: "%",
      rangeBetween: [0, 100],
    },
    {
      label: "Cloud Cover",
      value: [0, 51],
      symbol: "%",
      rangeBetween: [0, 100],
    },
    {
      label: "Ground Distance",
      value: [0, 81],
      symbol: "°",
      rangeBetween: [-60, 60],
    },
    {
      label: "Off-Nadir Angle",
      value: [47, 76],
      symbol: "%",
      rangeBetween: [0, 100],
    },
  ];
  return (
    <ComponentError>
      <FilterRangeWrapper>
        {rangeData.map((ele) => {
          return (
            <RangeLabelWrapper key={ele.label}>
              <LabelWrapper>
                <RangeLabel>{ele.label}</RangeLabel>
                <RangeValue>
                  {ele.value[0]}
                  {ele.symbol}-{ele.value[1]}
                  {ele.symbol}
                </RangeValue>
              </LabelWrapper>
              <RangeWrap>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={ele.value}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                <RangeBetweenWrapper>
                  <Range>
                    {ele.rangeBetween[0]}
                    {ele.symbol}
                  </Range>
                  <Range>
                    {ele.rangeBetween[1]}
                    {ele.symbol}
                  </Range>
                </RangeBetweenWrapper>
              </RangeWrap>
            </RangeLabelWrapper>
          );
        })}
      </FilterRangeWrapper>
    </ComponentError>
  );
};

export default FilterRangeComponent;
