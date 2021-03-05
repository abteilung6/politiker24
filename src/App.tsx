import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const LandingView = React.lazy(() => import("./views/LandingView"));
const ProfileView = React.lazy(() => import("./views/ProfileView"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <LandingView {...props} />}
          />
          <Route
            path="/politiker"
            render={(props) => <ProfileView {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
