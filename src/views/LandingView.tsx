import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import Layout from "../layout/Layout";

import { suggestions } from "../data/suggestions";

interface Props {}

type ComposedProps = Props & RouteComponentProps;

const LandingView: React.FC<ComposedProps> = () => {
  const history = useHistory();

  const onSelect = (value: number) => {
    history.push("/politiker/" + value.toString());
  };

  return (
    <>
      <Layout>
        LandingPage
        <SearchBox suggestions={suggestions} onSelect={onSelect} />
      </Layout>
    </>
  );
};

export default LandingView;
