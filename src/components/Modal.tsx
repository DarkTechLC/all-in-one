import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';

import { XIcon } from '@heroicons/react/outline';

export type ModalRefType = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

const modalRootEl = document.getElementById('modal-root');

export const Modal = forwardRef<ModalRefType, ModalProps>(
  ({ title, children, defaultOpen = false }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    useImperativeHandle(
      ref,
      () => ({
        open: handleOpen,
        close: handleClose,
      }),
      []
    );

    return createPortal(
      isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-90 z-10 flex items-center justify-center p-4"
          role="presentation"
          onClick={handleClose}
        >
          <section
            className="bg-gray-200 p-4 pt-0 md:p-6 md:pt-0 rounded-3xl max-w-xl text-gray-900 max-h-full overflow-y-auto scrollbar-none"
            role="presentation"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between py-4 sticky top-0 bg-gray-200">
              <h3 className="text-xl font-bold">{title}</h3>

              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-xl transition-colors bg-gray-300 hover:text-red-600"
              >
                <XIcon className="h-6 w-6 cursor-pointer" />
                <span className="sr-only">Fechar</span>
              </button>
            </header>

            {children}
          </section>
        </div>
      ) : null,
      modalRootEl as Element
    );
  }
);
