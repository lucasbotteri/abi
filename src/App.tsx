import { Switch, Route } from "react-router-dom";
import { Layout } from "@component";
import { Landing, PrintRequest, Login, Admin } from "@screen";
import { routePath } from "@constant";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routePath.HOME} exact>
        <Landing />
      </Route>
      <Route path={routePath.PRINT_REQUEST} exact>
        <PrintRequest />
      </Route>
      <Route path={routePath.ADMIN_LOGIN} exact>
        <Login />
      </Route>
      <Route path={routePath.ADMIN_HOME} exact>
        <Admin />
      </Route>
    </Switch>
  </Layout>
);

export default App;
