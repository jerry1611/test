import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import Dashboard from '../components/Dashboard';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import CreatePage from '../components/CreatePage';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/create" component={CreatePage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
