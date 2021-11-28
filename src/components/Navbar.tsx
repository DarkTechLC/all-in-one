import { Link } from 'react-router-dom';

import { Container } from './Container';

export function Navbar() {
  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-md sticky top-0 h-20 py-4 z-10">
      <Container className="flex items-center justify-between h-full">
        <Link to="/" tabIndex={0}>
          <img src="/logo.svg" alt="All in One" className="h-10" />
        </Link>
      </Container>
    </nav>
  );
}
