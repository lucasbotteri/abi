import { Button } from "antd";
import { dd, Route } from "react-router-dom";
import "./App.css";

function App() {
  const aa = "333333";
  const bb = "22";
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
