import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import M from 'materialize-css'
// import firebase from './firebase';
import About from './components/about'
import Terms from './components/terms'
import Home from './views/Home'
import Page404 from './components/page404'
import AppHeader from './components/Layouts/AppHeader';
import AppFooter from './components/Layouts/AppFooter';


function App() {
  M.AutoInit();
  useEffect(() => {
    // console.log("use effect")
  }, [])

  return (
    <>
      <AppHeader />
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" name="Home">
              <Home></Home>
            </Route>
            <Route exact path="/index" name="Index" >
              <Home />
            </Route>
            <Route path="/about" name="About">
              <About />
            </Route>
            <Route path="/terms" name="Terms">
              <Terms />
            </Route>
            <Route component={Page404} name="ErrorPage" />
          </Switch>
        </div>
      </main>
      <AppFooter />
    </>
  );
}

export default App;
