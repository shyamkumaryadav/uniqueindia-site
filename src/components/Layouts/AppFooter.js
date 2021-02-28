import React from 'react';


function AppFooter() {
  return (
    <footer className="page-footer darken-2 blue">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Unique India</h5>
            <p className="grey-text text-lighten-4">Human activity is hugely responsible for damaging the environment. <a className="tooltipped grey-text text-lighten-3" data-position="bottom" href="https://www.instagram.com/explore/tags/uniquecleanup/" data-tooltip="explore this tag" target="_blank" rel="noreferrer">#uniquecleanup</a>.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Social Links</h5>
            <ul>
              <li><a rel="noreferrer" className="grey-text text-lighten-3" href="//instagram.com/uniqueindia289" target="_blank">Instagram</a></li>
              <li><a rel="noreferrer" className="grey-text text-lighten-3" href="//facebook.com/uniqueindia289" target="_blank">Facebook</a></li>
              <li><span className="grey-text text-lighten-3 disabled">YouTube</span></li>
              <li><span className="grey-text text-lighten-3 disabled">Twitter</span></li>
              <li><span className="grey-text text-lighten-3 disabled">Reddit</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2014 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;