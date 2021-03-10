import React from "react";

import { Activity } from "../types";

interface Props {
  activity: Activity;
}

const ActivityListItem: React.FC<Props> = ({ activity }) => {
  return (
    <div className="bg-white px-4 py-5 sm:px-6 shadow">
      <div className="flex space-x-3 border-b border-gray-200 ">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1 mb-3">
          <p className="text-sm font-medium text-gray-900">
            <a href="/" className="hover:underline">
              [Name des Politiker]
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="/" className="hover:underline">
              {activity.date}
            </a>
          </p>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-500">{activity.text}</div>
    </div>
  );
};

export default ActivityListItem;
