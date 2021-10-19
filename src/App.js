import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/Authentication/LoginPage/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from "./Pages/Authentication/RegisterPage/RegisterPage";
import AuthProvider from "./Contexts/AuthProvider";
import Header from "./Pages/Shared/Header/Header";
import HomePage from "./Pages/Home/HomePage/HomePage";
import Services from "./Pages/Services/Services";
import ServiceDetailPage from "./Pages/ServiceDetailPage/ServiceDetailPage";
import About from "./Pages/About/About";
import AdviceHubPage from "./Pages/Home/AdviceHubPage/AdviceHubPage";
import Footer from "./Pages/Footer/Footer";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import DirectConsultecyPage from "./Pages/DirectConsultecyPage/DirectConsultecyPage";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/services/:id">
            <ServiceDetailPage></ServiceDetailPage>
          </PrivateRoute>
          <Route exact path="/about">
            <About></About>
          </Route>
          <PrivateRoute exact path="/advice-hub">
            <AdviceHubPage></AdviceHubPage>
          </PrivateRoute>
          <PrivateRoute exact path="/direct-consult">
            <DirectConsultecyPage></DirectConsultecyPage>
          </PrivateRoute>

          <Route exact path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route exact path="/register">
            <RegisterPage></RegisterPage>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <footer>
          <Footer></Footer>
        </footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
