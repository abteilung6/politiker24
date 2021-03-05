import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import FactionIndex from "../components/charts/FactionIndex";
import PersonInformation from "../components/PersonInformation";
import Tabbar from "../components/Tabbar";
import TabbarContent from "../components/TabbarContent";
import { tabs } from "../constants/navigation";
import Layout from "../layout/Layout";

import { person } from "../data/persons";

interface Props {}

type ComposedProps = Props & RouteComponentProps;

const ProfileView: React.FC<ComposedProps> = () => {
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(
    tabs.length ? tabs[0].id : undefined
  );
  return (
    <>
      <Layout>
        <PersonInformation person={person} />
        <FactionIndex />
        <Tabbar
          tabs={tabs}
          selectedTabId={selectedTabId}
          onClick={(selectedTabId) => setSelectedTabId(selectedTabId)}
        />
        <TabbarContent selectedTabId={selectedTabId} />
      </Layout>
    </>
  );
};

export default ProfileView;
