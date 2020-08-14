import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from 'react-router-dom'
import Nav from 'components/Nav'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  height: 100vh;
`

const Main = styled.div`
  flex-grow: 1;
  overflow:auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/tag">
              <Tags />
            </Route>
            <Redirect exact from="/" to="/money"></Redirect>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>

        <Nav />
      </Wrapper>
    </Router >
  );
}

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}

export default App;
