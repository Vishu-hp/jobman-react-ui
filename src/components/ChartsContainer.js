import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";
import BarChartComponent from "./BarChartComponent";
import AreaChartComponent from "./AreaChartComponent";

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "area chart" : "bar chart"}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
