import { AppRoute, AppTemplate } from '../../templates/AppTemplate';

const routes: AppRoute[] = [
  {
    label: 'Leitor',
    path: '/qrcode',
    component: () => <h1>Leitor</h1>,
  },
  {
    label: 'Gerador',
    path: '/qrcode/generator',
    component: () => <h1>Gerador</h1>,
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
