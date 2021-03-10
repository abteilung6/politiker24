import React from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

import SearchBox from "../components/SearchBox";
import HeroSection from "../components/landing/HeroSection";
import FeatureSection from "../components/landing/FeatureSection";
import StatsSection from "../components/landing/StatsSection";
import FooterSection from "../components/landing/FooterSection";
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
        <HeroSection>
          <SearchBox suggestions={suggestions} onSelect={onSelect} />
        </HeroSection>
        <StatsSection />
        <FeatureSection />
        <FooterSection />
      </Layout>
    </>
  );
};

export default LandingView;
