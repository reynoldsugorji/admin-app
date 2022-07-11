import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, color, currentColor, height, width, data, type }) => {
  return (
    <SparklineComponent
      id={id}
      width={width}
      height={height}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      valueType="Numeric"
      lineWidth={1}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings = {{
        visible: true,
        format: '${x}: data ${yval}',
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
