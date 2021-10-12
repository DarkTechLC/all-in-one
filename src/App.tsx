import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { QRCode } from './pages/QRCode';

import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />

        <Switch>
          <Route path="/" exact component={() => <h1>Home</h1>} />
          <Route path="/qrcode" component={QRCode} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
