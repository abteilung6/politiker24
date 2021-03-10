import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

import { contributionData } from "../../data/graphs";

export interface Props {}

const Contributions: React.FC<Props> = () => {
  return (
    <ResponsiveCalendar
      data={contributionData}
      from="2019-01-01"
      to="2020-12-30"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ right: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};

export default Contributions;
