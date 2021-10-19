import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/Authentication/LoginPage/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from "./Pages/Authentication/RegisterPage/RegisterPage";
function App() {
  return (
    <Router>
      {/* <Header></Header> */}
      <Switch>
        <Route exact path="/">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/home">
          {/* <Home></Home> */}
        </Route>
        <Route exact path="/courses">
          {/* <Courses></Courses> */}
        </Route>
        <Route exact path="/about">
          {/* <About></About> */}
        </Route>
        <Route exact path="/success-story">
          {/* <SuccessStory></SuccessStory> */}
        </Route>

        <Route exact path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/register">
          <RegisterPage></RegisterPage>
        </Route>

        <Route exact path="*">
          {/* <NotFound></NotFound> */}
        </Route>
      </Switch>
      {/* <footer>
        {" "}
        <Footer></Footer>
      </footer> */}
    </Router>
  );
}

export default App;
