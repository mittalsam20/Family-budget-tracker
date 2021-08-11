import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Investment from "./pages/investment/Investment";
import News from "./pages/news/News";
import FamilyManager from "./pages/family-manager/FamilyManager";
import Navbar from "./components/navbar/navbar";
import AccountPage from "./pages/accountpage/accountpage";
import LogSign from "./pages/loginpage/logsign";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login" exact component={LogSign} />
        <Route path="/home" exact component={Home} />
        <Route path="/investment" exact component={Investment} />
        <Route path="/news" exact component={News} />
        <Route path="/user/settings" exact component={AccountPage} />
        <Route path="/familymanager" exact component={FamilyManager} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
