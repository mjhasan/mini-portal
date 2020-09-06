import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/Post-Details/PostDetail';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Posts></Posts>
        </Route>
        <Route path="/home">
          <Posts></Posts>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/post/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
