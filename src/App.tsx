import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Money from 'views/Money';
import Tags from 'views/Tags';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import EditMoney from 'views/EditMoney'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/editMoney/:id">
          <EditMoney />
        </Route>
        <Redirect exact from="/" to="/money"></Redirect>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router >
  );
}




export default App;
