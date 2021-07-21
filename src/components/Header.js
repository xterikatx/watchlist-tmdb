import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <Link to="/">WathList</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Watch List</Link></li>
          <li><Link to="/watched">Watched</Link></li>
          <li><Link to="/add" className="btn">Add</Link></li>
        </ul>
      </div>
    </div>
  </header>
);
