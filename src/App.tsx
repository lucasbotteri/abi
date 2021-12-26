import { Switch, Route } from "react-router-dom";
import { Layout } from "@component";
import { Landing, PrintRequest, Login } from "@screen";
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
    </Switch>
  </Layout>
);

export default App;
