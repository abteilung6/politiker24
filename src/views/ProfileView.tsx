import React from "react";

import FactionIndexGraph from "../components/FactionIndexGraph";
import ProfileLayout from "../layout/ProfileLayout";

const ProfileView: React.FC = () => {
  return (
    <>
      <ProfileLayout>
        <div style={{ height: 400 }}>
          {" "}
          <FactionIndexGraph />
        </div>
      </ProfileLayout>
    </>
  );
};

export default ProfileView;
