import React, { useState } from "react";

import FactionIndex from "../components/charts/FactionIndex";
import PersonInformation from "../components/PersonInformation";
import Tabbar from "../components/Tabbar";
import TabbarContent from "../components/TabbarContent";
import ProfileLayout from "../layout/ProfileLayout";
import { tabs } from "../constants/navigation";

import { person } from "../data/persons";

const ProfileView: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(
    tabs.length ? tabs[0].id : undefined
  );
  return (
    <>
      <ProfileLayout>
        <PersonInformation person={person} />
        <div style={{ height: 400 }}>
          {" "}
          <FactionIndex />
        </div>
        <Tabbar
          tabs={tabs}
          selectedTabId={selectedTabId}
          onClick={(selectedTabId) => setSelectedTabId(selectedTabId)}
        />
        <TabbarContent selectedTabId={selectedTabId} />
      </ProfileLayout>
    </>
  );
};

export default ProfileView;
