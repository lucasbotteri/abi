import { Switch, Route } from "react-router-dom";
import { Layout } from "./components";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/">
        <div>App Content</div>
      </Route>
    </Switch>
  </Layout>
);

export default App;
