import { Button } from "antd";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/">
        <div className="App">
          <Button>Hola</Button>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
