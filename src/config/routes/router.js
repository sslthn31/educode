import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DummyTest from '../../components/prototype/dummy/dummytest';
import Home from '../../components/Home/Home';
import Quiz from '../../components/prototype/exam/Quiz';
import Summary from '../../components/prototype/exam/Summary';
import Navbar from '../../components/Navbar';
import Courses from '../../components/Courses/ClassList';
import JScourse from '../../components/Class/JScourse/JScourse';
import JsExamTest from '../../components/Class/JScourse/JsExamTest';
import Footer from '../../components/Footer';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dummy" component={DummyTest} />
          <Route path="/course" component={Courses} />
          <Route path="/jscourse" component={JScourse} />
          <Route path="/JsExamTest" component={JsExamTest} />
          <Route path="/examStart" component={Quiz} />
          <Route path="/summary" component={Summary} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
