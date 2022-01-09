import React from "react";
import { Route, Switch } from "react-router-dom";
import signin from "./components/signin/signin";
import signup from "./components/signup/signup";
import aboutSide from "./components/about/about";
import ab from "./components/about/about";
import course from "./components/class/class";
import student from "./components/student/student";
import addClass from "./components/ClassForm/ClassForm";
import addStudent from "./components/StudentForm/StudentForm";
function App() {
  return (
    <div>
      <Switch>
        <Route path='/signin' exact component={signin} />
        <Route path='/signup' exact component={signup} />
        <Route path='/about' exact component={aboutSide} />
        <Route path='/class' exact component={course} />
        <Route path='/student' component={student} />
        <Route path='/addclass' exact component={addClass} />
        <Route path='/edit' component={addClass} />
        <Route path='/' exact component={ab} />
        <Route path='/addstudent' exact component={addStudent} />
        <Route path='/update' component={addStudent} />
      </Switch>
    </div>
  );
}

export default App;
