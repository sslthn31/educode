import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DummyTest from '../../components/prototype/dummy/dummytest';
import Home from '../../components/Home/Home';
import Quiz from '../../components/prototype/exam/Quiz';
import Summary from '../../components/prototype/exam/Summary';
import Navbar from '../../components/Navbar';
import Courses from '../../components/Courses/ClassList';
import JScourse from '../../components/Class/JScourse/JScourse';
import HtmlCourse from '../../components/Class/HtmlCourse/Htmlcourse';
import CssCourse from '../../components/Class/CssCourse/Csscourse';
import HtmlExamTest from '../../components/Class/HtmlCourse/HtmlExamTest';
import CssExamTest from '../../components/Class/CssCourse/CssExamTest';
import JsExamTest from '../../components/Class/JScourse/JsExamTest';
import SummaryJs from '../../components/Class/JScourse/Summary';
import SummaryCss from '../../components/Class/CssCourse/Summary';
import SummaryHtml from '../../components/Class/HtmlCourse/Summary';
import Success from '../../components/prototype/shortcut/Success';
import Fail from '../../components/prototype/shortcut/Fail';
import Footer from '../../components/Footer';
import Observer from '../../components/observer/observer';

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
          <Route path="/htmlcourse" component={HtmlCourse} />
          <Route path="/csscourse" component={CssCourse} />
          <Route path="/HtmlExamTest" component={HtmlExamTest} />
          <Route path="/CssExamTest" component={CssExamTest} />
          <Route path="/JsExamTest" component={JsExamTest} />
          <Route path="/summaryHtml" component={SummaryHtml} />
          <Route path="/summaryCss" component={SummaryCss} />
          <Route path="/summary" component={SummaryJs} />
          <Route path="/examStart" component={Quiz} />
          <Route path="/success" component={Success} />
          <Route path="/fail" component={Fail} />
          <Route path="/summaryprototype" component={Summary} />
          <Route path="/observer" component={Observer} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
