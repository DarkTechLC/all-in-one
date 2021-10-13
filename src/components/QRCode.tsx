import { CanvasHTMLAttributes } from 'react';
import QRCodeReact, { BaseQRCodeProps as QRCodeReactProps } from 'qrcode.react';

export type QRCodeProps = QRCodeReactProps &
  CanvasHTMLAttributes<HTMLCanvasElement>;

export function QRCode({
  level = 'M',
  size = 768,
  bgColor = '#E5E7EB',
  fgColor = '#111827',
  style,
  ...props
}: QRCodeProps) {
  return (
    <QRCodeReact
      renderAs="canvas"
      level={level}
      size={size}
      bgColor={bgColor}
      fgColor={fgColor}
      style={{
        height: '100%',
        maxWidth: '216px',
        width: '100%',
        ...style,
      }}
      {...props}
    />
  );
}
