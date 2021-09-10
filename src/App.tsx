import { Switch, Route } from "react-router-dom";
import { Layout } from "@component";
import { Landing, PrintRequest } from "@screen";
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
    </Switch>
  </Layout>
);

export default App;
