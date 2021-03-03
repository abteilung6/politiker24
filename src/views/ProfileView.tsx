import React from "react";

import ActivityList from "../components/ActivityList";
import FactionIndex from "../components/charts/FactionIndex";
import ProfileLayout from "../layout/ProfileLayout";
import { activities } from "../data/activities";

const ProfileView: React.FC = () => {
  return (
    <>
      <ProfileLayout>
        <div style={{ height: 400 }}>
          {" "}
          <FactionIndex />
        </div>
        <ActivityList activities={activities} />
      </ProfileLayout>
    </>
  );
};

export default ProfileView;
