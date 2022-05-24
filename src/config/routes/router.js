import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DummyTest from '../../components/prototype/dummy/dummytest';
import Home from '../../components/Home/Home';
import Quiz from '../../components/prototype/exam/Quiz';
import Summary from '../../components/prototype/exam/Summary';
import Navbar from '../../components/Navbar';
import JScourse from '../../components/Class/JScourse/JScourse';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dummy" component={DummyTest} />
          <Route path="/course/jscourse" component={JScourse} />
          <Route path="/examStart" component={Quiz} />
          <Route path="/summary" component={Summary} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
