import React from "react";
import { RouteComponentProps } from "react-router-dom";

import Layout from "../layout/Layout";

interface Props {}

type ComposedProps = Props & RouteComponentProps;

const LandingView: React.FC<ComposedProps> = () => {
  return (
    <>
      <Layout>LandingView</Layout>
    </>
  );
};

export default LandingView;
