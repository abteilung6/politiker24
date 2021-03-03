import React from "react";

import ActivityList from "./ActivityList";

import { activities } from "../data/activities";

interface Props {
  selectedTabId?: string;
}

const TabbarContent: React.FC<Props> = ({ selectedTabId }) => {
  if (selectedTabId === "contributions") {
    return <ActivityList activities={activities} />;
  } else if (selectedTabId === "likes") {
    return <div>Zuneigungen</div>;
  } else if (selectedTabId === "dislikes") {
    return <div>Abneigungen</div>;
  } else {
    return null;
  }
};

export default TabbarContent;
