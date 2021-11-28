import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { QRCode } from './pages/QRCode';

import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container className="pb-64">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/qrcode" component={QRCode} />
        </Switch>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}
