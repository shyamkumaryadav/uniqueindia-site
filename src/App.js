import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import firebase from './firebase';
import { Layout} from 'antd';
import About from './components/about'
import Terms from './components/terms'
import Home from './components/index'
import Page404 from './components/page404'
import AppHeader from './components/Layouts/Header';
import AppFooter from './components/Layouts/Footer';

const { Header, Content, Footer } = Layout;

function App() {
  
  const [mess, setMess] = useState("Hello world");
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    console.log("use effect")
    console.log(firebase)
  }, [])

  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Switch>
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
      </Content>
      <Footer>
       <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
