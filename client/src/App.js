import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Investment from "./pages/investment/Investment";
import News from "./pages/news/News";
import FamilyManager from "./pages/family-manager/FamilyManager";
import Navbar from "./component/navbar/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={signup} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/investment" exact component={Investment} />
        <Route path="/news" exact component={News} />
        <Route path="/familymanager" exact component={FamilyManager} />
       
      </Switch>
    </BrowserRouter>
  );
};

export default App;
