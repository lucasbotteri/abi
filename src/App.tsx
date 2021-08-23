import { Switch, Route } from "react-router-dom";
import { Layout } from "@component";
import { Landing } from "@screen";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Layout>
);

export default App;
