import React, { useState } from "react";
import { RouteComponentProps, useRouteMatch } from "react-router-dom";

import PersonInformation from "../components/PersonInformation";
import Tabbar from "../components/Tabbar";
import TabbarContent from "../components/TabbarContent";
import { tabs } from "../constants/navigation";
import Layout from "../layout/Layout";

import { person } from "../data/persons";

interface Props {}

type ComposedProps = Props & RouteComponentProps;

const ProfileView: React.FC<ComposedProps> = () => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: { id },
  } = useRouteMatch<{ id: string }>();
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(
    tabs.length ? tabs[0].id : undefined
  );
  return (
    <>
      <Layout>
        <PersonInformation person={person} />
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
