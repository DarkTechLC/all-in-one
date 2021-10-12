import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

export function Navbar() {
  return (
    <nav className="bg-gray-900 sticky top-0 py-3">
      <Link to="/">
        <img src={logo} alt="All in One" />
      </Link>
    </nav>
  );
}
