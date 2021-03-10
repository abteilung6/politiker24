import React from "react";

import ActivityList from "./ActivityList";
import Insights from "./Insights";
import MessageList from "./message/MessageList";

import { activities } from "../data/activities";
import { messages } from "../data/messages";

interface Props {
  selectedTabId?: string;
}

const TabbarContent: React.FC<Props> = ({ selectedTabId }) => {
  if (selectedTabId === "contributions") {
    return <ActivityList activities={activities} />;
  } else if (selectedTabId === "rates") {
    return <MessageList messages={messages} />;
  } else if (selectedTabId === "insights") {
    return <Insights />;
  } else {
    return null;
  }
};

export default TabbarContent;
