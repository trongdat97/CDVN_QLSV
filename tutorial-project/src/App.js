import React from "react";
import { Route, Switch } from "react-router-dom";
import signin from "./components/signin/signin";
import signup from "./components/signup/signup";
import aboutSide from "./components/about/about";
import ab from "./components/about/about";
import course from "./components/class/class";
import student from "./components/student/student";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signin" exact component={signin} />
        <Route path="/signup" exact component={signup} />
        <Route path="/about" exact component={aboutSide} />
        <Route path="/class" exact component={course} />
        <Route path="/student" exact component={student} />
        <Route path="/" exact component={ab} />
      </Switch>
    </div>
  );
}

export default App;
