import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

import { factionIndexData } from "../../data/graphs";

export interface Props {}

const FactionIndex: React.FC<Props> = () => {
  return (
    <div className="h-96 pb-4">
      <ResponsiveRadar
        data={factionIndexData}
        keys={["syrah"]}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color" }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: "set1" }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        isInteractive={true}
      />
    </div>
  );
};

export default FactionIndex;
