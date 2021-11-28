import { useState } from 'react';
import QRReader from 'react-qr-reader';

export function QRCodeReader() {
  const [readResult, setReadResult] = useState('');

  function handleScan(data: string | null) {
    if (data && data !== readResult) {
      setReadResult(data);
    }
  }

  function handleScanError(error: any) {
    console.log(error);
  }

  return (
    <>
      <h2 className="text-gray-400">
        Aponte a câmera para um QR Code para que ele seja lido.
      </h2>

      <section className="mt-4 flex flex-col items-center justify-center">
        <QRReader
          onError={handleScanError}
          onScan={handleScan}
          className="max-w-xs w-full overflow-hidden rounded-3xl"
        />

        <input
          type="text"
          readOnly
          placeholder="Nenhum QR Code encontrado"
          value={readResult}
          className="w-full max-w-lg mt-6 p-4 rounded-3xl bg-gray-800 text-base text-gray-300 placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>
    </>
  );
}
