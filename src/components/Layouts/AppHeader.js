import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import M from 'materialize-css';
import Sea from './../../assets/sea.png';
import Avatar from './../../assets/Avatar.png';

let drawer;
function AppHeader() {
  const location = useLocation();
  const sidenav = useRef();
  useEffect(()=>{
    drawer = M.Sidenav.init(sidenav.current, {})
  }, [])
  return (
    <>
      <nav>
        <div className="nav-wrapper darken-2 blue">
            <Link to="/" className="brand-logo" style={{ padding: '0 10px'}}>Unique india</Link>
            
            <ul id="nav-mobile" className="right">
              <li><a href="#!" onClick={() => drawer.open()} className="waves-effect"><i className="material-icons">menu</i></a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" ref={sidenav}>
          <li>
            <div className="user-view">
              <div className="background">
                <img src={Sea} alt="WoW" style={{width: '100%'}} />
              </div>
              <a href="#!"><img className="circle" src={Avatar} alt="WoW"/></a>
              <a href="#!"><span className="white-text name">Not Login</span></a>
              <a href="mailto:shyamkumaryadav2003@gmail.com" target="_blank" rel="noreferrer"><span className="white-text email">shyamkumaryadav2003@gmail.com</span></a>
            </div>
          </li>
          <li className={ (location.pathname === '/about' ? 'active' : '') } onClick={() => drawer.close()}><Link to="/about" className="waves-effect"><i className="material-icons">face</i>About</Link></li>
          <li className={ (location.pathname === '/terms' ? 'active' : '') } onClick={() => drawer.close()}><Link to="/terms" className="waves-effect"><i className="material-icons">book</i>Terms</Link></li>
          <li><div className="divider"></div></li>
          <li><a href="/#" className="subheader">Subheader</a></li>
          <li className={ (location.pathname === '/index' ? 'active' : '') } onClick={() => drawer.close()}><Link className="waves-effect" to="/index"><i className="material-icons">link</i>Index</Link></li>
        </ul>
    </>
  );
}

export default AppHeader;