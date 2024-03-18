import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboard')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);
const SchoolList = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './school-list')
);

const Users = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './users')
);

const Students = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './students')
);

const Class = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './class')
);

const Sections = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './section')
);

const Roles = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './roles')
);

const HealthReportCard = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './healthReportCard')
);

const Logout = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './logout')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboards {...props} />}
            />
            <Route
              path={`${match.url}/applications`}
              render={(props) => <Applications {...props} />}
            />
            {/* <ProtectedRoute
                    path={`${match.url}/applications`}
                    component={Applications}
                    roles={[UserRole.Admin]}
            /> */}
            <Route
              path={`${match.url}/pages`}
              render={(props) => <Pages {...props} />}
            />
            <Route
              path={`${match.url}/ui`}
              render={(props) => <Ui {...props} />}
            />
            <Route
              path={`${match.url}/menu`}
              render={(props) => <Menu {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Route
              path={`${match.url}/school-list`}
              render={(props) => <SchoolList {...props} />}
            />
            <Route
              path={`${match.url}/users`}
              render={(props) => <Users {...props} />}
            />
            <Route
              path={`${match.url}/students`}
              render={(props) => <Students {...props} />}
            />
            <Route
              path={`${match.url}/class`}
              render={(props) => <Class {...props} />}
            />
            <Route
              path={`${match.url}/section`}
              render={(props) => <Sections {...props} />}
            />
            <Route
              path={`${match.url}/roles`}
              render={(props) => <Roles {...props} />}
            />

            <Route
              path={`${match.url}/healthReportCard/:id/:profileid`}
              render={(props) => <HealthReportCard {...props} />}
            />

            <Route
              path={`${match.url}/logout`}
              render={(props) => <Logout {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
