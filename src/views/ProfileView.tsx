import React from "react";

import ActivityList from "../components/ActivityList";
import FactionIndex from "../components/charts/FactionIndex";
import PersonInformation from "../components/PersonInformation";
import ProfileLayout from "../layout/ProfileLayout";
import { activities } from "../data/activities";
import { person } from "../data/persons";

const ProfileView: React.FC = () => {
  return (
    <>
      <ProfileLayout>
        <PersonInformation person={person} />
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
