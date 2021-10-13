import { useState } from 'react';
import QRCodeReact from 'qrcode.react';
import { DownloadIcon } from '@heroicons/react/outline';

export function QRCodeGenerator() {
  const [inputText, setInputText] = useState('');

  const handleQRCodeDownload = (filename = 'qrcode') => {
    const QRCodeCanvasEl = document.getElementById(
      'qrCode'
    ) as HTMLCanvasElement | null;

    if (!QRCodeCanvasEl) {
      return;
    }

    const downloadLinkEl = document.createElement('a');
    const imageUrl = QRCodeCanvasEl.toDataURL().replace(
      'image/png',
      'image/octet-steam'
    );

    downloadLinkEl.href = imageUrl;
    downloadLinkEl.download = `${filename}.png`;

    document.body.appendChild(downloadLinkEl);
    downloadLinkEl.click();
    document.body.removeChild(downloadLinkEl);
  };

  return (
    <>
      <h2 className="text-gray-400">
        Gere um QR Code a partir de um texto qualquer.
      </h2>

      <section className="mt-4">
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Digite algo..."
            className="p-4 rounded-3xl bg-gray-800 text-base text-gray-300 placeholder-gray-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </form>

        {inputText && (
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="bg-gray-200 p-4 rounded-3xl">
              <QRCodeReact
                id="qrCode"
                value={inputText}
                size={196}
                bgColor="#E5E7EB"
                fgColor="#111827"
                level="M"
              />
            </div>

            <button
              className="flex gap-1 mt-2 p-2 text-blue-500 font-semibold hover:text-blue-400"
              onClick={() => handleQRCodeDownload()}
            >
              <DownloadIcon className="h-6 w-6" />
              Download
            </button>
          </div>
        )}
      </section>
    </>
  );
}
