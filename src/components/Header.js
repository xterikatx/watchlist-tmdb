import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <Link to="/">Minha lista de filmes</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Lista</Link></li>
          <li><Link to="/watched">Assistidos</Link></li>
          <li><Link to="/add" className="btn">Adicionar +</Link></li>
        </ul>
      </div>
    </div>
  </header>
);
