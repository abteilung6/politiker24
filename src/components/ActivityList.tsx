import React from "react";
import { Activity } from "../types";
import ActivityListItem from "./ActivityListItem";

interface Props {
  activities: Activity[];
}

const ActivityList: React.FC<Props> = ({ activities }) => {
  return (
    <div className="space-y-3">
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityList;
