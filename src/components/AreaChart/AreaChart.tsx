import React from "react";
import {
  AreaChartProps,
  AreaChart as AreaChartM,
} from "@cloudscape-design/components";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";

/**
 * @uxpindocurl https://cloudscape.design/components/area-chart/
 * @uxpindescription A chart component for visualizing time-series or continuous data with shaded areas.
 */
const AreaChart = ({
  series = [],
  yDomain = [0, 100],
  height = 300,
  xTitle = "Time (UTC)",
  yTitle = "Bytes transferred",
  ...props
}: AreaChartProps<any>) => {
  //Type guard to filter only valid area chart series
  const isValidSeries = (series: AreaChartProps.Series<any>): series is AreaChartProps.AreaSeries<any> =>
    "data" in series;

  //Convert timestamps to Date objects while filtering invalid series
  const seriesData: AreaChartProps.AreaSeries<any>[] = series
    .filter(isValidSeries)
    .map((series: AreaChartProps.AreaSeries<any>) => ({
      ...series,
      data: series.data.map((point: { x: number; y: number }) => ({
        x: new Date(point.x), // Convert timestamp to Date object
        y: point.y,
      })),
    }));

  //Compute xDomain dynamically based on min and max x values
  const allXValues = seriesData.flatMap((s) => s.data.map((point) => point.x.getTime()));
  const xDomain =
    allXValues.length > 0 ? [new Date(Math.min(...allXValues)), new Date(Math.max(...allXValues))] : [new Date(0), new Date()];

  return (
    <AreaChartM
      {...props}
      series={seriesData}
      xDomain={xDomain} //Dynamic xDomain based on data
      yDomain={yDomain}
      i18nStrings={{
        xTickFormatter: (e: Date) =>
          e
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })
            .split(",")
            .join("\n"),
        yTickFormatter: (e: number) =>
          Math.abs(e) >= 1e9
            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
            : Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
              : Math.abs(e) >= 1e3
                ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                : e.toFixed(2),
      }}
      ariaLabel="Stacked area chart"
      height={height}
      hideFilter={props.hideFilter ?? true}
      xScaleType="time"
      xTitle={xTitle}
      yTitle={yTitle}
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">There is no data available</Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">There is no matching data to display</Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
  );
};

export default AreaChart;
