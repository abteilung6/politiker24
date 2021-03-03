import React from "react";

import FactionIndex from "../components/charts/FactionIndex";
import ProfileLayout from "../layout/ProfileLayout";

const ProfileView: React.FC = () => {
  return (
    <>
      <ProfileLayout>
        <div style={{ height: 400 }}>
          {" "}
          <FactionIndex />
        </div>
      </ProfileLayout>
    </>
  );
};

export default ProfileView;
