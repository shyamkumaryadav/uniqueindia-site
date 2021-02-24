import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from './firebase';
import About from './components/about'
import Terms from './components/terms'
import Home from './components/index'
import Page404 from './components/page404'
import AppHeader from './components/Layouts/AppHeader';
import AppFooter from './components/Layouts/AppFooter';


function App() {
  
  const [mess, setMess] = useState("Hello world");
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    console.log("use effect")
    console.log(firebase)
  }, [])

  return (
    <>
      <nav>
        <AppHeader />
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <div>
              Main page
            </div>
          </Route>
          <Route exact path="/index" >
            <Home />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/terms" >
            <Terms />
          </Route>
          <Route component={Page404} />
        </Switch>
      </main>
      <footer >
       <AppFooter />
      </footer>
    </>
  );
}

export default App;
