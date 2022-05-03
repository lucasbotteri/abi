import { Switch, Route } from "react-router-dom";
import { Layout, PrivateRoute } from "@component";
import { Landing, PrintRequest, Login, Admin } from "@screen";
import { routePath } from "@constant";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routePath.HOME} exact>
        <Landing />
      </Route>
      <Route path={routePath.PRINT_REQUEST_CREATION} exact>
        <PrintRequest />
      </Route>

      <PrivateRoute exact path={routePath.ADMIN.PRINT_REQUEST_DETAILS}>
        <></>
      </PrivateRoute>
      <PrivateRoute exact path={routePath.ADMIN.ROOT}>
        <Admin />
      </PrivateRoute>
      <Route exact path={routePath.ADMIN.LOGIN}>
        <Login />
      </Route>
    </Switch>
  </Layout>
);

export default App;
