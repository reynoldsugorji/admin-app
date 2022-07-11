import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="stacked-chart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      legendSettings={{background:"white"}}
      chartArea={{ border: { width: 0 } }}
      tooltip={{enable: true}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
       {
        stackedCustomSeries.map((item, index) => (
          <SeriesDirective {...item} key={index}  />
        ))
       }
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
