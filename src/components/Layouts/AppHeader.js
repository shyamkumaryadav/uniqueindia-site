import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <div className="nav-wrapper darken-4">
        <Link to="/" className="brand-logo">Unique india</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/about">about</Link></li>
          <li><Link to="/terms">Terms</Link></li>
          <li><Link to="Home">Home</Link></li>
      </ul>
    </div>
  );
}

export default AppHeader;