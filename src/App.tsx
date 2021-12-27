import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import NewsDetail from "./pages/detail/index";
import Navbars from "./components/navbar/index";

function App() {
  return (
    <>
      <Navbars />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={NewsDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
