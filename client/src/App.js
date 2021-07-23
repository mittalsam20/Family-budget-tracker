import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Investment from "./pages/investment/Investment";
import News from "./pages/news/News";
import FamilyManager from "./pages/family-manager/FamilyManager";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/investment" exact component={Investment} />
        <Route path="/news" exact component={News} />
        <Route path="/familymanager" exact component={FamilyManager} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
