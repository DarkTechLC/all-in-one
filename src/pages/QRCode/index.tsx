import { AppRoute, AppTemplate } from '../../templates/AppTemplate';
import { QRCodeGenerator } from './Generator';

const routes: AppRoute[] = [
  {
    label: 'Leitor',
    path: '/qrcode',
    component: () => <h1>Leitor</h1>,
  },
  {
    label: 'Gerador',
    path: '/qrcode/generator',
    component: QRCodeGenerator,
  },
  {
    label: 'Histórico',
    path: '/qrcode/history',
    component: () => <h1>Histórico</h1>,
  },
];

export function QRCode() {
  return <AppTemplate title="QR Code" routes={routes} />;
}
