import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import dataJSON from "../data";
import { useDispatch } from "react-redux";
import ComponentError from "../../errorBoundaries/componentError";
const TableContainer = styled("div")`
  background-color: #202020;
  table {
    border-collapse: collapse;
  }
  tr {
    width: 100%;
  }
  tbody {
    display: block;
    height: 20rem;
    overflow: auto;
  }
  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed; /* even columns width , fix width of table too*/
  }
  th {
    text-align: left;
    padding: 0 1rem;
    color: #707070;
  }
  .Mui-checked {
    color: #7fffd4 !important;
  }
`;

const TableData = styled("td")`
  font-size: 1.6rem;
  color: #b0b0b0;
  background-color: #282828;
  display: ${(props) => (props.checbox ? "flex" : "")};
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 1rem;
  text-align: center;
`;

const SensorId = styled("div")`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 90%;
`;
const Button = styled("button")`
  border-radius: 2.5rem;
  padding: 1rem;
  background-color: #2f2f2f;
  color: #707070;
  margin-top: 1rem;
  align-self: end;
  border: none;
`;

const TableComponent = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const makeAllChecked = () => {
    if (!allChecked) {
      Object.entries(dataJSON).forEach(([key, val]) => {
        val.checked = true;
      });
    } else {
      Object.entries(dataJSON).forEach(([key, val]) => {
        val.checked = false;
      });
    }
    dispatch({ type: "ADD_TO_REDUX", payload: dataJSON });
    setData({ ...dataJSON });
  };

  const handleChange = (event, row) => {
    Object.entries(dataJSON).forEach(([key, val]) => {
      if (key === row) {
        val.checked = !val.checked;
      }
    });
    dispatch({ type: "ADD_TO_REDUX", payload: dataJSON });
    setData({ ...dataJSON });
    let count = 0;
    let total = Object.keys(dataJSON).length;
    if (total > 0) {
      Object.entries(dataJSON).forEach(([key, value]) => {
        if (value.checked === true) {
          count++;
        }
      });
      if (total === count) {
        setAllChecked(true);
      } else {
        setAllChecked(false);
      }
    }
  };

  useEffect(() => {
    Object.entries(dataJSON).forEach(([key, val]) => {
      val.checked = false;
    });
    setData({ ...dataJSON });
  }, []);

  return (
    <ComponentError>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}></th>
              <th>
                {" "}
                <Checkbox
                  style={{
                    color: "#b0b0b0",
                  }}
                  onClick={() => makeAllChecked()}
                  checked={allChecked}
                  onChange={(e) => {
                    setAllChecked(!allChecked);
                  }}
                />
                Sensor Image Id
              </th>
              <th style={{ width: "15%" }}>Satelite Constellations</th>
              <th style={{ width: "15%" }}>Date Collected</th>
              <th style={{ width: "10%" }}>Data Coverage</th>
              <th style={{ width: "10%" }}>Cloud Coverage</th>
              <th style={{ width: "10%" }}>Off Nadir Angle</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([key, val]) => {
              return (
                <tr key={key}>
                  <TableData style={{ width: "5%" }}></TableData>
                  <TableData checbox={true}>
                    <Checkbox
                      checked={val.checked}
                      onChange={(e) => handleChange(e, key)}
                      style={{
                        color: "#b0b0b0",
                      }}
                    />

                    <SensorId>{key}</SensorId>
                  </TableData>
                  <TableData style={{ width: "15%" }}>{val.datetime}</TableData>
                  <TableData style={{ width: "15%" }}>{val.platform}</TableData>
                  <TableData style={{ width: "10%" }}>
                    {val.area_coverage}
                  </TableData>
                  <TableData style={{ width: "10%" }}>
                    {val.cloud_coverage}
                  </TableData>
                  <TableData style={{ width: "10%" }}>
                    {val["off-nadir-angle"]}
                  </TableData>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Button>Add to AOI Center</Button>
      </TableContainer>
    </ComponentError>
  );
};

export default TableComponent;
