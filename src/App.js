import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import { Layout, Drawer } from 'antd';

import { Button } from 'antd';

function App() {
  
  const [mess, setMess] = useState("Hello world");
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    console.log("use effect")
    console.log(firebase)
  }, [])

  return (
    <Layout>
      <Drawer
          title="Basic Drawer"
          placement='left'
          closable={true}
          onClose={() => setDrawer(false)}
          visible={drawer}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      <Layout>
          <Button onClick={() => setMess(Math.random())} type="primary">Button</Button>
          <Button onClick={() => setDrawer(true)}>show drawer</Button>
          <h1>{ mess }</h1>
        
      </Layout>
      <div>Foo</div>
      
    </Layout>
  );
}

export default App;
